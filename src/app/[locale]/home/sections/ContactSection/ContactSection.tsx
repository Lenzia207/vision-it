"use client";

import { useState, FormEvent, useEffect } from "react";
import { PricePackage } from "../data/types/home-types";
import ContactView from "./ContactView";

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
  interestLabel: string;
  interestWebsite: string;
  interestMobileApp: string;
  packageLabel: string;
  packages: PricePackage[];
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
  interestLabel,
  interestWebsite,
  interestMobileApp,
  packageLabel,
  packages,
}: ContactSectionProps) {
  const translations = {
    en: {
      requiredFields: "Please fill in all required fields.",
      invalidEmail: "Please enter a valid email address.",
      success: "Thank you! Your message has been sent successfully.",
      sendError: "Failed to send message. Please try again.",
      networkError:
        "Network error. Please check your connection and try again.",
      sending: "Sending...",
      privacyPolicy: "I have read and agree to the privacy policy",
      privacyRequired: "Please accept the privacy policy to continue.",
    },
    de: {
      requiredFields: "Bitte fülle alle erforderlichen Felder aus.",
      invalidEmail: "Bitte gib eine gültige E-Mail-Adresse ein.",
      success: "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.",
      sendError:
        "Nachricht konnte nicht gesendet werden. Bitte versuche es erneut.",
      networkError:
        "Netzwerkfehler. Bitte überprüfe deine Verbindung und versuche es erneut.",
      sending: "Wird gesendet...",
      privacyPolicy: "Ich habe die Datenschutzerklärung gelesen und stimme zu",
      privacyRequired:
        "Bitte akzeptieren Sie die Datenschutzerklärung, um fortzufahren.",
    },
  };

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const t =
    translations[locale as keyof typeof translations] || translations.en;

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [interests, setInterests] = useState({
    website: false,
    mobileApp: false,
  });
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const toggleInterest = (key: "website" | "mobileApp") => {
    setInterests((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      if (key === "website" && !next.website) {
        setSelectedPackage(null);
      }
      return next;
    });
  };

  useEffect(() => {
    const handler = (e: Event) => {
      const { packageName } = (e as CustomEvent<{ packageName: string }>).detail;
      setInterests((prev) => ({ ...prev, website: true }));
      setSelectedPackage(packageName);
    };
    window.addEventListener("select-package", handler);
    return () => window.removeEventListener("select-package", handler);
  }, []);

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
          interests: [
            ...(interests.website ? [interestWebsite] : []),
            ...(interests.mobileApp ? [interestMobileApp] : []),
          ],
          selectedPackage: interests.website ? selectedPackage : null,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: t.success,
        });
        // Reset form
        setFormData({ name: "", company: "", email: "", message: "" });
        setInterests({ website: false, mobileApp: false });
        setSelectedPackage(null);
        setPrivacyAccepted(false);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || t.sendError,
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: t.networkError,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <ContactView title={title} description={description} submitStatusType={submitStatus.type} submitStatusMessage={submitStatus.message}
    handleSubmit={handleSubmit}
    nameLabel={nameLabel}
    namePlaceholder={namePlaceholder}
    formDataName={formData.name}
    handleChange={handleChange}
    companyLabel={companyLabel}
    companyPlaceholder={companyPlaceholder}
    formDataCompany={formData.company}
    emailLabel={emailLabel}
    emailPlaceholder={emailPlaceholder}
    formDataEmail={formData.email}
    messageLabel={messageLabel}
    messagePlaceholder={messagePlaceholder}
    formDataMessage={formData.message}
    btn_text={btn_text}
    interestLabel={interestLabel}
    interestWebsite={interestWebsite}
    interestMobileApp={interestMobileApp}
    packageLabel={packageLabel}
    packages={packages}
    interests={interests}
    toggleInterest={toggleInterest}
    selectedPackage={selectedPackage}
    setSelectedPackage={setSelectedPackage}
    privacyAccepted={privacyAccepted}
    setPrivacyAccepted={setPrivacyAccepted}
    isSubmitting={isSubmitting}
    textPrivacyPolicy={t.privacyPolicy}
    textSending={t.sending}
    />
 
  );
}

