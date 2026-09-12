import { AngebotMobileAppsFinalCtaData } from "../data/mobile-apps-types";

interface MobileAppsFinalCtaSectionProps {
  finalCta: AngebotMobileAppsFinalCtaData;
}

export default function MobileAppsFinalCtaSection({ finalCta }: MobileAppsFinalCtaSectionProps) {
  const { title, description, primaryCtaLabel, secondaryCtaLabel } = finalCta;

  return (
    <section id="kontakt" className="section-padding" style={{ background: "var(--bg-surface-1)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div
          className="flex flex-col gap-7 p-10 sm:p-14 reveal-on-scroll"
          style={{ background: "var(--bg-base)", border: "2px solid var(--teal)" }}
        >
          <h2 className="text-display-2 max-w-3xl">{title}</h2>
          <p className="text-lg max-w-xl" style={{ color: "var(--text-300)" }}>{description}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#kontakt" className="btn btn-primary">{primaryCtaLabel}</a>
            <a href="#kontakt" className="btn btn-secondary">{secondaryCtaLabel}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
