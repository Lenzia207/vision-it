"use client";

import { useState, FormEvent } from "react";
import BriefingFormularView from "./BriefingFormularView";
import { BriefingFormData, BriefingFormState } from "./data/types/briefing-form-types";

interface BriefingFormularScreenProps {
    data: BriefingFormData;
    locale: string;
}

const initialState: BriefingFormState = {
    companyName: "",
    contactPerson: "",
    emailPhone: "",
    existingWebsite: "",
    projectTypes: { landingPage: false, businessWebsite: false, webshop: false, webapp: false, mobileApp: false, other: false },
    projectTypeOther: "",
    projectDescription: "",
    design: { hasDesign: false, hasLogo: false, hasColors: false, noDesign: false },
    designFile: "",
    referenceWebsites: "",
    styleWish: "",
    content: { hasTexts: false, hasImages: false, needsTexts: false, needsStockPhotos: false },
    requiredPages: "",
    features: { contactForm: false, booking: false, newsletter: false, login: false, shop: false, multilingual: false, api: false, googleMaps: false, liveChat: false, other: false },
    languages: "",
    apiDetails: "",
    featuresOther: "",
    hosting: { hasDomain: false, needsDomain: false, hasHosting: false, visionItHosting: false, wantsCMS: false, keepEmails: false },
    domainName: "",
    hostingProvider: "",
    existing: { siteReplaced: false, contentMigration: false },
    accessesNeeded: "",
    seo: { basicSEO: false, localSEO: false, googleBusiness: false, analytics: false, socialMedia: false },
    socialPlatforms: "",
    legal: { imprint: false, privacy: false, cookieBanner: false, agb: false, accessibility: false },
    appPlatform: "",
    app: { hasWireframe: false, needsBackend: false, pushNotifications: false, offline: false, login: false, payment: false, webConnection: false },
    appDescription: "",
    budget: "",
    timeline: "",
    fixedDate: "",
    maintenanceType: "",
    onboarding: false,
    documentation: false,
    preferredChannel: "",
    channelOther: "",
    feedbackRounds: "",
    multipleStakeholders: false,
    feedbackAvailability: "",
    privacyAccepted: false,
};

export default function BriefingFormularScreen({ data, locale }: BriefingFormularScreenProps) {
    const [formState, setFormState] = useState<BriefingFormState>(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
    const [statusMessage, setStatusMessage] = useState("");

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleNestedCheck = <G extends keyof BriefingFormState>(
        group: G,
        key: string,
        checked: boolean
    ) => {
        setFormState(prev => ({
            ...prev,
            [group]: { ...(prev[group] as Record<string, boolean>), [key]: checked },
        }));
    };

    const handleRadio = (name: keyof BriefingFormState, value: string) => {
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleBoolCheck = (name: keyof BriefingFormState, checked: boolean) => {
        setFormState(prev => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const res = await fetch("/api/briefing", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formState),
            });
            const json = await res.json();
            if (json.success) {
                setSubmitStatus("success");
                setStatusMessage(data.successMessage);
                setFormState(initialState);
            } else {
                setSubmitStatus("error");
                setStatusMessage(data.errorMessage);
            }
        } catch {
            setSubmitStatus("error");
            setStatusMessage(data.errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <BriefingFormularView
            data={data}
            formState={formState}
            isSubmitting={isSubmitting}
            submitStatus={submitStatus}
            statusMessage={statusMessage}
            onTextChange={handleTextChange}
            onNestedCheck={handleNestedCheck}
            onRadio={handleRadio}
            onBoolCheck={handleBoolCheck}
            onSubmit={handleSubmit}
        />
    );
}