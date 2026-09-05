"use client";

import { useState } from "react";
import { Link } from "@/app/i18n/routing";
import { AngebotFaqData } from "../data/website-dev-types";

interface WebsiteFaqSectionProps {
  faq: AngebotFaqData;
  locale: string;
}

export default function WebsiteFaqSection({ faq, locale }: WebsiteFaqSectionProps) {
  const { tag, title, description, items, noteText, noteCta } = faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-dark section-padding">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        <div className="max-w-xl flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{tag}</span>
          <h2 className="text-display-2">{title}</h2>
          <p style={{ color: "var(--text-300)" }}>{description}</p>
        </div>

        <div className="faq-list reveal-on-scroll">
          {items.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={i} className="faq-item">
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div className={`faq-panel${isOpen ? " is-open" : ""}`}>
                  <div className="faq-panel-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="audience-cta reveal-on-scroll">
          <p>{noteText}</p>
          <Link href="/#contact" locale={locale} className="btn btn-primary">
            {noteCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
