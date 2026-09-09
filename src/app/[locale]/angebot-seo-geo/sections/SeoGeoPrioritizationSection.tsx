"use client";

import { useState } from "react";
import { AngebotSeoGeoPrioritizationData } from "../data/seo-geo-types";

const BORDER_OPACITIES = [1, 0.65, 0.4, 0.2];

interface SeoGeoPrioritizationSectionProps {
  prioritization: AngebotSeoGeoPrioritizationData;
}

export default function SeoGeoPrioritizationSection({ prioritization }: SeoGeoPrioritizationSectionProps) {
  const { tag, title, description, tabs, footnote } = prioritization;
  const [active, setActive] = useState(0);
  const activeTab = tabs[active];

  return (
    <section className="section-dark section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        <div className="max-w-2xl flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{tag}</span>
          <h2 className="text-display-2">{title}</h2>
          <p style={{ color: "var(--text-300)" }}>{description}</p>
        </div>

        <div className="flex flex-col reveal-on-scroll">
          <div className="priority-tabs">
            {tabs.map((tab, i) => (
              <button
                key={tab.code}
                type="button"
                className={`priority-tab${i === active ? " is-active" : ""}`}
                style={{ borderTopColor: `rgba(190, 230, 0, ${BORDER_OPACITIES[i] ?? 0.2})` }}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                <span className="priority-tab-code">{tab.code}</span>
                <span className="priority-tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="priority-panel">
            <p>{activeTab.description}</p>
            <ul className="priority-list">
              {activeTab.items.map((item) => (
                <li key={item}>
                  <span aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="max-w-xl" style={{ fontSize: "0.95rem", color: "var(--text-400)" }}>{footnote}</p>
      </div>
    </section>
  );
}
