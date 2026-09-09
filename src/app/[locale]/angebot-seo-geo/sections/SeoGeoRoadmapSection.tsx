"use client";

import { useEffect, useRef, useState } from "react";
import { AngebotSeoGeoRoadmapData } from "../data/seo-geo-types";

interface SeoGeoRoadmapSectionProps {
  roadmap: AngebotSeoGeoRoadmapData;
}

export default function SeoGeoRoadmapSection({ roadmap }: SeoGeoRoadmapSectionProps) {
  const { tag, title, description, phases, note } = roadmap;
  const [active, setActive] = useState(0);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = phaseRefs.current.filter((el): el is HTMLDivElement => el !== null);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) {
          const index = els.indexOf(hit.target as HTMLDivElement);
          if (index !== -1) setActive(index);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [phases.length]);

  return (
    <section className="section-padding" style={{ background: "var(--bg-surface-1)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-5 reveal-on-scroll">
        <span className="label-mono">{tag}</span>
        <h2 className="text-display-2 max-w-3xl">{title}</h2>
        <p className="max-w-2xl" style={{ color: "var(--text-300)" }}>{description}</p>
      </div>

      <div className="roadmap-rail">
        <div className="roadmap-rail-inner">
          {phases.map((phase, i) => (
            <span key={phase.navLabel} className={`roadmap-rail-item${i === active ? " is-active" : ""}`}>
              <span className="roadmap-rail-dot" aria-hidden="true" />
              {phase.navLabel}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col">
        {phases.map((phase, i) => (
          <div
            key={phase.title}
            ref={(el) => { phaseRefs.current[i] = el; }}
            className={`roadmap-phase${i === phases.length - 1 ? " is-last" : ""}`}
          >
            <div className="roadmap-phase-meta">
              <span className="roadmap-phase-label">{phase.phaseLabel}</span>
              <h3 className="roadmap-phase-title">{phase.title}</h3>
              <span className="roadmap-phase-rule" aria-hidden="true" />
            </div>
            <ul className="roadmap-phase-list">
              {phase.items.map((item) => (
                <li key={item}>
                  <span aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="roadmap-note reveal-on-scroll">
          <p>{note}</p>
        </div>
      </div>
    </section>
  );
}
