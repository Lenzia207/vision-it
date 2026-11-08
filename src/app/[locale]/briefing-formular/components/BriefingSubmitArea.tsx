import { Send } from "lucide-react";

interface BriefingSubmitAreaProps {
    privacyAccepted: boolean;
    privacyLabel: string;
    onPrivacyChange: (checked: boolean) => void;
    submitStatus: "success" | "error" | null;
    statusMessage: string;
    isSubmitting: boolean;
    submitButton: string;
    submittingText: string;
}

/** Privacy consent, submit feedback and the submit button at the end of the briefing form. */
export default function BriefingSubmitArea({
    privacyAccepted,
    privacyLabel,
    onPrivacyChange,
    submitStatus,
    statusMessage,
    isSubmitting,
    submitButton,
    submittingText,
}: BriefingSubmitAreaProps) {
    return (
        <div className="glass-card rounded-2xl p-6 md:p-8 space-y-6">
            <label className="flex items-start gap-3 cursor-pointer">
                <input
                    type="checkbox"
                    checked={privacyAccepted}
                    onChange={e => onPrivacyChange(e.target.checked)}
                    required
                    className="mt-0.5 w-4 h-4 rounded shrink-0 focus:ring-2 focus:ring-(--ring)"
                    style={{ background: "var(--bg-surface)", borderColor: "var(--border)", accentColor: "var(--accent)" }}
                />
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{privacyLabel}</span>
            </label>

            {submitStatus && (
                <div className={`p-4 rounded-xl text-sm ${submitStatus === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}>
                    {statusMessage}
                </div>
            )}


            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/15"
            >
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        {submittingText}
                    </span>
                ) : (
                    <>
                        <Send className="w-4 h-4" />
                        {submitButton}
                    </>
                )}
            </button>
        </div>
    );
}
