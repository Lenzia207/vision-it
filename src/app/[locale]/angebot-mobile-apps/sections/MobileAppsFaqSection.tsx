"use client";

import { useState } from "react";
import { AngebotMobileAppsFaqData } from "../data/mobile-apps-types";

interface MobileAppsFaqSectionProps {
  faq: AngebotMobileAppsFaqData;
}

export default function MobileAppsFaqSection({ faq }: MobileAppsFaqSectionProps) {
  const { label, title, items } = faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        <div className="flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{label}</span>
          <h2 className="text-display-2">{title}</h2>
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
                  <span className="faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                <div className={`faq-panel${isOpen ? " is-open" : ""}`}>
                  <div className="faq-panel-inner"><p>{item.answer}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
