import Checkbox from "@/components/Checkbox";
import LabelInput from "@/components/LabelInput";
import { Send } from "lucide-react";
import { PricePackage } from "../data/types/home-types";
import type { ServiceSectionType } from "../data/types/home-types";
import { FormEvent } from "react";
import ServiceSection from "./components/ServiceSection";
import PackageSection from "./components/PackageSection";
import ToggleButton from "./components/ToggleButton";

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
        className="relative py-24 md:py-32 border-t border-white/5"
    >
        <div className="absolute inset-0 bg-linear-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 reveal-on-scroll">
            <div className="text-center mb-12">
                <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                    {title}
                </h2>
                <p className="text-zinc-400 text-lg whitespace-pre-line">
                    {description}
                </p>
            </div>

            <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
                <h3 className="text-xl font-medium text-white mb-8">{btn_text}</h3>

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
                        <label className="text-sm font-medium text-zinc-400 ml-1 block">
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
                        <label className="text-sm font-medium text-zinc-400 ml-1">
                            {messageLabel}
                        </label>
                        <textarea
                            name="message"
                            value={formDataMessage}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-zinc-600 transition-all resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50"
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
                        className="w-full py-4 mt-4 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {isSubmitting ? textSending : btn_text}
                        <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </div>
    </section>)
}