import Checkbox from "@/components/Checkbox";
import LabelInput from "@/components/LabelInput";
import { Send } from "lucide-react";
import { PricePackage } from "../data/types/home-types";
import { FormEvent } from "react";

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
    };
    toggleInterest: (interest: "website" | "mobileApp") => void;
    selectedPackage: string | null;
    setSelectedPackage: (pkgName: string | null) => void;
    btn_text: string;
    interestLabel: string;
    interestWebsite: string;
    interestMobileApp: string;
    packageLabel: string;
    packages: PricePackage[];
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
    packageLabel,
    packages,
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
                            <button
                                type="button"
                                onClick={() => toggleInterest("website")}
                                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${interests.website
                                        ? "bg-blue-500/15 border-blue-500/50 text-blue-300"
                                        : "bg-zinc-800/60 border-white/10 text-zinc-400 hover:border-white/20 hover:text-zinc-300"
                                    }`}
                            >
                                <span
                                    className={`w-4 h-4 rounded flex items-center justify-center border-2 transition-all shrink-0 ${interests.website
                                            ? "bg-blue-500 border-blue-500"
                                            : "border-zinc-600"
                                        }`}
                                >
                                    {interests.website && (
                                        <svg
                                            className="w-2.5 h-2.5 text-white"
                                            viewBox="0 0 10 8"
                                            fill="none"
                                        >
                                            <path
                                                d="M1 4L4 7L9 1"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    )}
                                </span>
                                {interestWebsite}
                            </button>

                            {/* Mobile App toggle */}
                            <button
                                type="button"
                                onClick={() => toggleInterest("mobileApp")}
                                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${interests.mobileApp
                                        ? "bg-cyan-500/15 border-cyan-500/50 text-cyan-300"
                                        : "bg-zinc-800/60 border-white/10 text-zinc-400 hover:border-white/20 hover:text-zinc-300"
                                    }`}
                            >
                                <span
                                    className={`w-4 h-4 rounded flex items-center justify-center border-2 transition-all shrink-0 ${interests.mobileApp
                                            ? "bg-cyan-500 border-cyan-500"
                                            : "border-zinc-600"
                                        }`}
                                >
                                    {interests.mobileApp && (
                                        <svg
                                            className="w-2.5 h-2.5 text-white"
                                            viewBox="0 0 10 8"
                                            fill="none"
                                        >
                                            <path
                                                d="M1 4L4 7L9 1"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    )}
                                </span>
                                {interestMobileApp}
                            </button>
                        </div>

                        {/* Package sub-selection — visible only when Website is checked */}
                        {interests.website && (
                            <div className="mt-1 pl-1 space-y-2.5">
                                <label className="text-sm font-medium text-zinc-500 ml-1 block">
                                    {packageLabel}
                                </label>
                                <div className="space-y-2">
                                    {packages.map((pkg) => (
                                        <button
                                            key={pkg.name}
                                            type="button"
                                            onClick={() => setSelectedPackage(pkg.name)}
                                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all duration-200 ${selectedPackage === pkg.name
                                                    ? "bg-blue-500/10 border-blue-500/40 text-white"
                                                    : "bg-zinc-800/30 border-white/5 text-zinc-400 hover:border-white/15 hover:text-zinc-300"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className={`w-4 h-4 rounded-full flex items-center justify-center border-2 transition-colors shrink-0 ${selectedPackage === pkg.name
                                                            ? "border-blue-400"
                                                            : "border-zinc-600"
                                                        }`}
                                                >
                                                    {selectedPackage === pkg.name && (
                                                        <span className="w-2 h-2 rounded-full bg-blue-400 block" />
                                                    )}
                                                </span>
                                                <span className="font-medium">{pkg.name}</span>
                                            </div>
                                            <span
                                                className={`text-xs font-medium tabular-nums ${selectedPackage === pkg.name
                                                        ? "text-blue-300"
                                                        : "text-zinc-600"
                                                    }`}
                                            >
                                                {pkg.price}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
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