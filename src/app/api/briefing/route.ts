export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { transporter, emailRegex } from "../contact/utils";
import type { BriefingFormState } from "@/app/[locale]/briefing-formular/data/types/briefing-form-types";

// ─── Validation ──────────────────────────────────────────────────────────────

/** Strips HTML tags and trims to prevent header injection / XSS in email */
function sanitize(value: unknown, maxLength = 500): string {
    if (typeof value !== "string") return "";
    return value.replace(/<[^>]*>/g, "").trim().slice(0, maxLength);
}

function sanitizeBool(value: unknown): boolean {
    return value === true;
}

function sanitizeBoolMap(value: unknown): Record<string, boolean> {
    if (typeof value !== "object" || value === null || Array.isArray(value)) return {};
    return Object.fromEntries(
        Object.entries(value).map(([k, v]) => [sanitize(k, 50), sanitizeBool(v)])
    );
}

// allowed options for some select‑type fields
const budgetOptions = [
    "", "under1500", "1500-3000", "3000-6000", "6000-10000", "over10000", "open",
] as const;
type BudgetOption = typeof budgetOptions[number];

function sanitizeBudget(value: unknown): BudgetOption {
    const v = sanitize(value, 50);
    return budgetOptions.includes(v as BudgetOption) ? (v as BudgetOption) : "";
}

const timelineOptions = [
    "asap", "within4weeks", "2to3months", "fixedDate", "noFixedDate",
] as const;
type TimelineOption = typeof timelineOptions[number];

function sanitizeTimeline(value: unknown): TimelineOption {
    const v = sanitize(value, 50);
    return timelineOptions.includes(v as TimelineOption) ? (v as TimelineOption) : "asap";
}

const maintenanceOptions = ["", "basic", "professional", "none"] as const;
type MaintenanceOption = typeof maintenanceOptions[number];

function sanitizeMaintenance(value: unknown): MaintenanceOption {
    const v = sanitize(value, 50);
    return maintenanceOptions.includes(v as MaintenanceOption)
        ? (v as MaintenanceOption)
        : "";
}

const channelOptions = ["", "email", "whatsapp", "phone", "other"] as const;
type ChannelOption = typeof channelOptions[number];

function sanitizeChannel(value: unknown): ChannelOption {
    const v = sanitize(value, 50);
    return channelOptions.includes(v as ChannelOption)
        ? (v as ChannelOption)
        : "";
}

// allowed options for feedback‑rounds select
const feedbackRoundsOptions = ["", "1", "2", "3+"] as const;
type FeedbackRoundsOption = typeof feedbackRoundsOptions[number];

function sanitizeFeedbackRounds(value: unknown): FeedbackRoundsOption {
    const v = sanitize(value, 50);
    return feedbackRoundsOptions.includes(v as FeedbackRoundsOption)
        ? (v as FeedbackRoundsOption)
        : "";
}

/** Validates and sanitizes the raw request body — never trusts the cast */
function parseAndValidate(raw: unknown): { data: BriefingFormState; error?: never } | { data?: never; error: string } {
    if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
        return { error: "Invalid payload" };
    }

    const b = raw as Record<string, unknown>;

    const emailPhone = sanitize(b.emailPhone, 200);
    const rawEmail = emailPhone.split("/")[0].trim();

    if (!emailPhone || !emailRegex.test(rawEmail)) {
        return { error: "Invalid email address" };
    }

    if (!sanitizeBool(b.privacyAccepted)) {
        return { error: "Privacy policy not accepted" };
    }

    const data: BriefingFormState = {
        // Client info
        companyName: sanitize(b.companyName),
        contactPerson: sanitize(b.contactPerson),
        emailPhone,
        existingWebsite: sanitize(b.existingWebsite),

        // Section 1
        projectTypes: sanitizeBoolMap(b.projectTypes) as BriefingFormState["projectTypes"],
        projectTypeOther: sanitize(b.projectTypeOther),
        projectDescription: sanitize(b.projectDescription, 2000),

        // Section 2
        design: sanitizeBoolMap(b.design) as BriefingFormState["design"],
        designFile: sanitize(b.designFile),
        referenceWebsites: sanitize(b.referenceWebsites),
        styleWish: sanitize(b.styleWish),

        // Section 3
        content: sanitizeBoolMap(b.content) as BriefingFormState["content"],
        requiredPages: sanitize(b.requiredPages),

        // Section 4
        features: sanitizeBoolMap(b.features) as BriefingFormState["features"],
        languages: sanitize(b.languages),
        apiDetails: sanitize(b.apiDetails),
        featuresOther: sanitize(b.featuresOther),

        // Section 5
        hosting: sanitizeBoolMap(b.hosting) as BriefingFormState["hosting"],
        domainName: sanitize(b.domainName),
        hostingProvider: sanitize(b.hostingProvider),

        // Section 6
        existing: sanitizeBoolMap(b.existing) as BriefingFormState["existing"],
        accessesNeeded: sanitize(b.accessesNeeded),

        // Section 7
        seo: sanitizeBoolMap(b.seo) as BriefingFormState["seo"],
        socialPlatforms: sanitize(b.socialPlatforms),

        // Section 8
        legal: sanitizeBoolMap(b.legal) as BriefingFormState["legal"],

        // Section 10
        budget: sanitizeBudget(b.budget),
        timeline: sanitizeTimeline(b.timeline),
        fixedDate: sanitize(b.fixedDate, 50),

        // Section 11
        maintenanceType: sanitizeMaintenance(b.maintenanceType),
        onboarding: sanitizeBool(b.onboarding),
        documentation: sanitizeBool(b.documentation),

        // Section 12
        preferredChannel: sanitizeChannel(b.preferredChannel),
        channelOther: sanitize(b.channelOther),
        feedbackRounds: sanitizeFeedbackRounds(b.feedbackRounds),
        multipleStakeholders: sanitizeBool(b.multipleStakeholders),
        feedbackAvailability: sanitize(b.feedbackAvailability),

        privacyAccepted: true,
    };

    return { data };
}

// ─── Email formatting ────────────────────────────────────────────────────────

function formatBriefingEmail(data: BriefingFormState): { subject: string; html: string; text: string } {
    const no = "—";
    const bool = (v: boolean) => (v ? "✅" : no);

    const section = (title: string, rows: string) =>
        `<tr><td colspan="2" style="background:#1e3a5f;color:#93c5fd;font-weight:bold;padding:10px 14px;">${title}</td></tr>${rows}`;

    const row = (label: string, value: string | boolean | undefined) => {
        const display = typeof value === "boolean" ? bool(value) : value || no;
        return `<tr>
          <td style="padding:7px 14px;color:#9ca3af;width:40%;vertical-align:top;">${label}</td>
          <td style="padding:7px 14px;color:#f3f4f6;">${display}</td>
        </tr>`;
    };

    const checkedLabels = (
        map: Record<string, boolean>,
        labels: Record<string, string>
    ): string =>
        Object.entries(map)
            .filter(([, v]) => v)
            .map(([k]) => labels[k] ?? k)
            .join(", ") || no;

    const projectTypesList = checkedLabels(data.projectTypes, {
        landingPage:     "Landingpage",
        businessWebsite: "Business-Website",
        webshop:         "Webshop / E-Commerce",
        webapp:          "Web-App / Portal",
        mobileApp:       "Mobile App",
        other:           `Sonstiges: ${data.projectTypeOther}`,
    });

    const featuresList = checkedLabels(data.features, {
        contactForm:  "Kontaktformular",
        booking:      "Terminbuchung",
        newsletter:   "Newsletter",
        login:        "Benutzer-Login",
        shop:         "Webshop / Zahlung",
        multilingual: `Mehrsprachigkeit (${data.languages})`,
        api:          `API (${data.apiDetails})`,
        googleMaps:   "Google Maps",
        liveChat:     "Live-Chat",
        other:        `Sonstiges: ${data.featuresOther}`,
    });

    const seoList = checkedLabels(data.seo, {
        basicSEO:       "Basis-SEO",
        localSEO:       "Lokales SEO",
        googleBusiness: "Google Business",
        analytics:      "Google Analytics",
        socialMedia:    `Social Media (${data.socialPlatforms})`,
    });

    const legalList = checkedLabels(data.legal, {
        imprint:       "Impressum",
        privacy:       "Datenschutz / DSGVO",
        cookieBanner:  "Cookie-Banner",
        agb:           "AGB",
        accessibility: "Barrierefreiheit (WCAG)",
    });

    const budgetLabels: Record<string, string> = {
        under1500:    "bis 1.500 €",
        "1500-3000":  "1.500 – 3.000 €",
        "3000-6000":  "3.000 – 6.000 €",
        "6000-10000": "6.000 – 10.000 €",
        over10000:    "über 10.000 €",
        open:         "offen / Empfehlung gewünscht",
    };

    const timelineLabels: Record<string, string> = {
        asap:         "So schnell wie möglich",
        within4weeks: "Innerhalb 4 Wochen",
        "2to3months": "2–3 Monate",
        fixedDate:    `Fixtermin: ${data.fixedDate}`,
        noFixedDate:  "Kein fixer Termin",
    };

    const channelLabels: Record<string, string> = {
        email:    "E-Mail",
        whatsapp: "WhatsApp",
        phone:    "Telefon / Video-Call",
        other:    `Sonstiges: ${data.channelOther}`,
    };

    const tableRows = `
        ${section("Kundendaten", `
            ${row("Firmenname / Name", data.companyName)}
            ${row("Ansprechperson", data.contactPerson)}
            ${row("E-Mail / Telefon", data.emailPhone)}
            ${row("Bestehende Website", data.existingWebsite)}
        `)}
        ${section("1. Projekttyp", `
            ${row("Projekttypen", projectTypesList)}
            ${row("Kurzbeschreibung", data.projectDescription)}
        `)}
        ${section("2. Design & Branding", `
            ${row("Design / Mockup vorhanden", data.design.hasDesign)}
            ${row("Design-Datei", data.designFile)}
            ${row("Logo / CI vorhanden", data.design.hasLogo)}
            ${row("Farben & Schriften definiert", data.design.hasColors)}
            ${row("Vision-IT erstellt Design", data.design.noDesign)}
            ${row("Referenz-Websites", data.referenceWebsites)}
            ${row("Stilwunsch", data.styleWish)}
        `)}
        ${section("3. Inhalte & Texte", `
            ${row("Texte vorhanden", data.content.hasTexts)}
            ${row("Bilder / Fotos vorhanden", data.content.hasImages)}
            ${row("Texte müssen erstellt werden", data.content.needsTexts)}
            ${row("Stock-Fotos benötigt", data.content.needsStockPhotos)}
            ${row("Benötigte Seiten", data.requiredPages)}
        `)}
        ${section("4. Funktionen & Integrationen", `
            ${row("Gewünschte Features", featuresList)}
        `)}
        ${section("5. Domain & Hosting", `
            ${row("Domain vorhanden", data.hosting.hasDomain)}
            ${row("Domain-Name", data.domainName)}
            ${row("Domain registrieren", data.hosting.needsDomain)}
            ${row("Hosting vorhanden", data.hosting.hasHosting)}
            ${row("Hosting-Anbieter", data.hostingProvider)}
            ${row("Hosting durch Vision-IT", data.hosting.visionItHosting)}
            ${row("CMS gewünscht", data.hosting.wantsCMS)}
            ${row("E-Mail-Adressen erhalten", data.hosting.keepEmails)}
        `)}
        ${section("6. Bestehende Website / Zugänge", `
            ${row("Website wird abgelöst", data.existing.siteReplaced)}
            ${row("Inhalte migrieren", data.existing.contentMigration)}
            ${row("Bereitzustellende Zugänge", data.accessesNeeded)}
        `)}
        ${section("7. SEO & Marketing", `
            ${row("SEO-Maßnahmen", seoList)}
        `)}
        ${section("8. Rechtliches & Compliance", `
            ${row("Rechtliche Anforderungen", legalList)}
        `)}
        ${section("9. Budget & Zeitplan", `
            ${row("Budget", budgetLabels[data.budget] ?? no)}
            ${row("Zeitplan", timelineLabels[data.timeline] ?? no)}
        `)}
        ${section("10. Wartung & Support", `
            ${row("Wartungspaket", data.maintenanceType || no)}
            ${row("Einschulung / Übergabe", data.onboarding)}
            ${row("Dokumentation", data.documentation)}
        `)}
        ${section("11. Kommunikation & Ablauf", `
            ${row("Bevorzugter Kanal", channelLabels[data.preferredChannel] ?? no)}
            ${row("Feedback-Runden", data.feedbackRounds || no)}
            ${row("Mehrere Ansprechpersonen", data.multipleStakeholders)}
            ${row("Verfügbarkeit für Feedback", data.feedbackAvailability)}
        `)}
    `;

    const html = `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;background:#111827;color:#f3f4f6;border-radius:12px;overflow:hidden;">
            <div style="background:#1d4ed8;padding:24px 32px;">
                <h1 style="margin:0;font-size:22px;color:#fff;">📋 Neues Kunden-Briefing</h1>
                <p style="margin:4px 0 0;color:#bfdbfe;font-size:14px;">Vision-IT – Kunden-Briefing Checkliste</p>
            </div>
            <div style="padding:24px 32px;">
                <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
            </div>
        </div>
    `;

    const text = [
        "NEUES KUNDEN-BRIEFING – Vision-IT",
        "=".repeat(40),
        `Firmenname:        ${data.companyName}`,
        `Ansprechperson:    ${data.contactPerson}`,
        `E-Mail / Telefon:  ${data.emailPhone}`,
        `Bestehende Website:${data.existingWebsite}`,
        "",
        `Projekttypen:  ${projectTypesList}`,
        `Beschreibung:  ${data.projectDescription}`,
        "",
        `Design:        ${checkedLabels(data.design, { hasDesign: "Mockup", hasLogo: "Logo/CI", hasColors: "Farben", noDesign: "Vision-IT erstellt" })}`,
        `Stilwunsch:    ${data.styleWish}`,
        "",
        `Features:      ${featuresList}`,
        `SEO:           ${seoList}`,
        `Rechtliches:   ${legalList}`,
        "",
        `Budget:        ${budgetLabels[data.budget] ?? no}`,
        `Zeitplan:      ${timelineLabels[data.timeline] ?? no}`,
        `Wartung:       ${data.maintenanceType || no}`,
        "",
        `Kanal:         ${channelLabels[data.preferredChannel] ?? no}`,
        `Feedback-Runden:   ${data.feedbackRounds || no}`,
        `Verfügbarkeit: ${data.feedbackAvailability}`,
    ].join("\n");

    return {
        subject: `Kunden-Briefing von ${data.companyName || data.contactPerson} – Vision-IT`,
        html,
        text,
    };
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: Request) {
    // Payload size guard
    const contentLength = request.headers.get("content-length");
    if (contentLength && Number(contentLength) > 50_000) {
        return NextResponse.json({ success: false, error: "Payload too large" }, { status: 413 });
    }

    // Parse JSON
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
    }

    // Validate & sanitize — never trust raw input
    const result = parseAndValidate(body);
     if ("error" in result) {
        return NextResponse.json(
            { success: false, error: result.error },
            { status: 400 }
        );
    }

    const { data } = result;
    const replyTo = data.emailPhone.split("/")[0].trim();

    try {
        const { subject, html, text } = formatBriefingEmail(data);

        await transporter.sendMail({
            from:    process.env.SMTP_USER,
            to:      process.env.SMTP_USER,
            replyTo, // sanitized — no header injection possible
            subject,
            text,
            html,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Briefing email error:", err);
        return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
    }
}