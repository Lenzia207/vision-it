import type { BriefingFormState } from "@/app/[locale]/briefing-formular/data/types/briefing-form-types";
import { emailRegex } from "../_shared/validation";

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
export function parseAndValidate(raw: unknown): { data: BriefingFormState; error?: never } | { data?: never; error: string } {
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
