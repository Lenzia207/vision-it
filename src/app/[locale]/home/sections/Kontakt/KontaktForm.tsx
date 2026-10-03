"use client";

import { FormEvent, useState } from "react";
import { KontaktForm as KontaktFormData } from "../data/types/home-types";

interface KontaktFormProps {
  data: KontaktFormData;
  locale: string;
}

const initialForm = { name: "", company: "", email: "", message: "" };

const labelClass = "font-mono text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-(--text-300)";
const fieldClass =
  "w-full px-4 py-3 bg-white border-2 border-[#dce3e2] rounded-[2px] text-(--teal) text-[0.95rem] placeholder:text-[#7e9694] transition-colors duration-200 focus:border-(--lime) focus:outline-none";

export default function KontaktForm({ data, locale }: KontaktFormProps) {
  const [form, setForm] = useState(initialForm);
  const [topic, setTopic] = useState(data.topics[0]?.value ?? "");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const topicLabel = data.topics.find((t) => t.value === topic)?.label;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          locale,
          privacyAccepted,
          interests: topicLabel ? [topicLabel] : [],
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
      setStatus("sent");
      setForm(initialForm);
      setPrivacyAccepted(false);
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col gap-4 py-6">
        <span className="w-11 h-11 rounded-full border-8 border-(--lime)" />
        <h3 className="m-0 font-mono text-2xl font-medium text-white">{data.successTitle}</h3>
        <p className="m-0 text-base leading-relaxed text-(--text-300)">{data.successText}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="self-start p-0 bg-transparent border-0 cursor-pointer font-mono text-[0.8rem] font-semibold uppercase tracking-widest text-(--lime)"
        >
          {data.reset}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="kf-name" className={labelClass}>{data.nameLabel} *</label>
          <input
            id="kf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder={data.namePlaceholder}
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="kf-company" className={labelClass}>{data.companyLabel}</label>
          <input
            id="kf-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
            placeholder={data.companyPlaceholder}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="kf-email" className={labelClass}>{data.emailLabel} *</label>
        <input
          id="kf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder={data.emailPlaceholder}
          className={fieldClass}
        />
      </div>

      <fieldset className="m-0 p-0 border-0 flex flex-col gap-2.5">
        <legend className={`${labelClass} mb-2.5`}>{data.topicLabel}</legend>
        <div role="radiogroup" className="flex flex-wrap gap-2">
          {data.topics.map((t) => {
            const selected = t.value === topic;
            return (
              <button
                key={t.value}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setTopic(t.value)}
                className={`px-[1.1rem] py-2 rounded-full border font-mono text-[0.8rem] font-semibold uppercase tracking-[0.02em] cursor-pointer transition-all duration-200 ${
                  selected
                    ? "bg-(--lime) border-(--lime) text-(--teal)"
                    : "bg-transparent border-(--border-light) text-(--text-300) hover:border-(--lime)"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="kf-message" className={labelClass}>{data.messageLabel} *</label>
        <textarea
          id="kf-message"
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          placeholder={data.messagePlaceholder}
          className={`${fieldClass} min-h-32 resize-y`}
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          required
          checked={privacyAccepted}
          onChange={(e) => setPrivacyAccepted(e.target.checked)}
          className="mt-[0.2rem] w-[1.1rem] h-[1.1rem] flex-none accent-(--lime)"
        />
        <span className="text-[0.9rem] leading-normal text-(--text-300)">{data.privacyText}</span>
      </label>

      {status === "error" && (
        <p role="alert" className="m-0 px-4 py-3 border border-red-300/40 bg-red-500/10 text-[0.9rem] text-red-100">
          {data.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? data.sending : data.submit}
      </button>
    </form>
  );
}
