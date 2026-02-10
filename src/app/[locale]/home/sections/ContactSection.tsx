"use client";
import Checkbox from "@/components/Checkbox";
import { Send } from "lucide-react";
import { useState, FormEvent } from "react";

interface ContactSectionProps {
  title: string;
  description: string;
  nameLabel: string;
  namePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  btn_text: string;
  locale: string;
}

export default function ContactSection({
  title,
  description,
  nameLabel,
  namePlaceholder,
  companyLabel,
  companyPlaceholder,
  emailLabel,
  emailPlaceholder,
  messageLabel,
  messagePlaceholder,
  btn_text,
  locale,
}: ContactSectionProps) {
  const translations = {
    en: {
      requiredFields: "Please fill in all required fields.",
      invalidEmail: "Please enter a valid email address.",
      success: "Thank you! Your message has been sent successfully.",
      sendError: "Failed to send message. Please try again.",
      networkError: "Network error. Please check your connection and try again.",
      sending: "Sending...",
      privacyPolicy: "I have read and agree to the privacy policy",
      privacyRequired: "Please accept the privacy policy to continue.",
    },
    de: {
      requiredFields: "Bitte fülle alle erforderlichen Felder aus.",
      invalidEmail: "Bitte gib eine gültige E-Mail-Adresse ein.",
      success: "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.",
      sendError: "Nachricht konnte nicht gesendet werden. Bitte versuche es erneut.",
      networkError: "Netzwerkfehler. Bitte überprüfe deine Verbindung und versuche es erneut.",
      sending: "Wird gesendet...",
      privacyPolicy: "Ich habe die Datenschutzerklärung gelesen und stimme zu",
      privacyRequired: "Bitte akzeptieren Sie die Datenschutzerklärung, um fortzufahren.",
    },
  };

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const t = translations[locale as keyof typeof translations] || translations.en;
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: "error",
        message: t.requiredFields,
      });
      setIsSubmitting(false);
      return;
    }

    // Privacy policy validation
    if (!privacyAccepted) {
      setSubmitStatus({
        type: "error",
        message: t.privacyRequired,
      });
      setIsSubmitting(false);
      return;
    }


    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: t.invalidEmail,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          message: formData.message,
          locale: locale,
          privacyAccepted: privacyAccepted,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: t.success,
        });
        // Reset form
        setFormData({
          name: "",
          company: "",
          email: "",
          message: "",
        });
        setPrivacyAccepted(false);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || t.sendError,
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: t.networkError,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 border-t border-white/5"
    >
      <div className="absolute inset-0 bg-linear-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 reveal-on-scroll">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-zinc-400 text-lg whitespace-pre-line">{description}</p>
        </div>

        <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
          <h3 className="text-xl font-medium text-white mb-8">{btn_text}</h3>

          {submitStatus.type && (
            <div
              className={`mb-6 p-4 rounded-xl ${submitStatus.type === "success"
                ? "bg-green-500/10 border border-green-500/20 text-green-400"
                : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 ml-1">
                  {nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-zinc-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder={namePlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 ml-1">
                  {companyLabel}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-zinc-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder={companyPlaceholder}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400 ml-1">
                {emailLabel}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-zinc-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                placeholder={emailPlaceholder}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400 ml-1">
                {messageLabel}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-zinc-600 transition-all resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                placeholder={messagePlaceholder}
              ></textarea>
            </div>

            <Checkbox privacyAccepted={privacyAccepted} onChange={(e) => setPrivacyAccepted(e.target.checked)} message={t.privacyPolicy} />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 mt-4 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? t.sending : btn_text}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
