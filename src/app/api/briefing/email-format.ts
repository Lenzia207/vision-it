import type { BriefingFormState } from "@/app/[locale]/briefing-formular/data/types/briefing-form-types";

export function formatBriefingEmail(data: BriefingFormState): { subject: string; html: string; text: string } {
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
