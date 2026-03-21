import Checkbox from "@/components/Checkbox";
import LabelInput from "@/components/LabelInput";
import { Send } from "lucide-react";
import { PricePackage } from "../data/types/home-types";
import type { ServiceSectionType } from "../data/types/home-types";
import { FormEvent } from "react";
import ServiceSection from "./components/ServiceSection";
import PackageSection from "./components/PackageSection";
import ToggleButton from "./components/ToggleButton";
import TitleHeader from "@/components/TitleHeader";

interface ContactViewProps {
    title: string;
    description: string;
    submitStatusType: "success" | "error" | null;
    submitStatusMessage: string;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    nameLabel: string;
    namePlaceholder: string;
    formDataName: string;
    companyLabel: string;
    companyPlaceholder: string;
    formDataCompany: string;
    emailLabel: string;
    emailPlaceholder: string;
    formDataEmail: string;
    messageLabel: string;
    messagePlaceholder: string;
    formDataMessage: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isSubmitting: boolean;
    privacyAccepted: boolean;
    setPrivacyAccepted: (accepted: boolean) => void;
    interests: {
        website: boolean;
        mobileApp: boolean;
        general: boolean;
    };
    toggleInterest: (interest: "website" | "mobileApp" | "general") => void;
    selectedPackage: string | null;
    setSelectedPackage: (pkgName: string | null) => void;
    btn_text: string;
    interestLabel: string;
    interestWebsite: string;
    interestMobileApp: string;
    interestGeneral: string;
    packageLabel: string;
    packages: PricePackage[];
    serviceLabel: string;
    services: ServiceSectionType["services"];
    selectedServices: string[];
    toggleService: (serviceName: string) => void;
    textPrivacyPolicy: string;
    textSending: string;
}

export default function ContactView({ title,
    description,
    submitStatusType,
    submitStatusMessage,
    handleSubmit,
    nameLabel,
    namePlaceholder,
    formDataName,
    companyLabel,
    companyPlaceholder,
    formDataCompany,
    emailLabel,
    emailPlaceholder,
    formDataEmail,
    messageLabel,
    messagePlaceholder,
    formDataMessage,
    handleChange,
    isSubmitting,
    privacyAccepted,
    setPrivacyAccepted,
    interests,
    toggleInterest,
    selectedPackage,
    setSelectedPackage,
    btn_text,
    interestLabel,
    interestWebsite,
    interestMobileApp,
    interestGeneral,
    packageLabel,
    packages,
    serviceLabel,
    services,
    selectedServices,
    toggleService,
    textPrivacyPolicy,
    textSending,
}: ContactViewProps) {
    return (<section
        id="contact"
        className="relative section-padding"
        style={{ borderTop: "1px solid var(--border)" }}
    >
        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="glow-blue" style={{ position: "absolute", bottom: 0, right: "-10%" }} />
        </div> */}

        <TitleHeader title={title} description={description} />

        <div className="max-w-7xl mx-auto px-6 reveal-on-scroll">
            <div className="glass-elevated rounded-sm p-8 md:p-10">
                <h3 className="text-xl font-medium mb-8" style={{ color: "var(--text-primary)" }}>{btn_text}</h3>

                {submitStatusType && (
                    <div
                        className={`mb-6 p-4 rounded-xl ${submitStatusType === "success"
                            ? "bg-green-500/10 border border-green-500/20 text-green-400"
                            : "bg-red-500/10 border border-red-500/20 text-red-400"
                            }`}
                    >
                        {submitStatusMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <LabelInput
                            type="text"
                            labelName={nameLabel}
                            namePlaceholder={namePlaceholder}
                            inputName="name"
                            formName={formDataName}
                            onChange={handleChange}
                        />
                        <LabelInput
                            type="text"
                            labelName={companyLabel}
                            namePlaceholder={companyPlaceholder}
                            inputName="company"
                            formName={formDataCompany}
                            onChange={handleChange}
                        />
                    </div>

                    <LabelInput
                        type="email"
                        labelName={emailLabel}
                        namePlaceholder={emailPlaceholder}
                        inputName="email"
                        formName={formDataEmail}
                        onChange={handleChange}
                    />

                    {/* Interest Selection */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium ml-1 block" style={{ color: "var(--text-secondary)" }}>
                            {interestLabel}
                        </label>
                        <div className="flex flex-wrap gap-3">
                            {/* Website toggle */}
                            <ToggleButton
                                onClick={() => toggleInterest("website")}
                                isActive={interests.website}
                                label={interestWebsite}
                            />
                            {/* Mobile App toggle */}
                            <ToggleButton
                                onClick={() => toggleInterest("mobileApp")}
                                isActive={interests.mobileApp}
                                label={interestMobileApp}
                            />
                            {/* General toggle */}
                            <ToggleButton
                                onClick={() => toggleInterest("general")}
                                isActive={interests.general}
                                label={interestGeneral}
                            />
                        </div>

                        {/* Service sub-selection — visible only when Website is checked */}
                        {interests.website && (
                            <ServiceSection
                                serviceLabel={serviceLabel}
                                services={services}
                                selectedServices={selectedServices}
                                toggleService={toggleService}
                            />
                        )}


                        {/* Package sub-selection — visible only when Website is checked */}
                        {/* {interests.website && (
                            <PackageSection
                                packageLabel={packageLabel}
                                packages={packages}
                                selectedPackage={selectedPackage}
                                setSelectedPackage={setSelectedPackage}
                            />
                        )} */}


                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium ml-1" style={{ color: "var(--text-secondary)" }}>
                            {messageLabel}
                        </label>
                        <textarea
                            name="message"
                            value={formDataMessage}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl input-dark transition-all resize-none focus:outline-none"
                            placeholder={messagePlaceholder}
                        ></textarea>
                    </div>

                    <Checkbox
                        privacyAccepted={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                        message={textPrivacyPolicy}
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 mt-4 text-white font-medium rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        style={{ background: "var(--accent)", boxShadow: "0 0 24px var(--accent-glow)" }}
                    >
                        {isSubmitting ? textSending : btn_text}
                        <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </div>
    </section>)
}