import { AngebotMobileAppsCostsData } from "../data/mobile-apps-types";

interface MobileAppsCostsSectionProps {
  costs: AngebotMobileAppsCostsData;
}

export default function MobileAppsCostsSection({ costs }: MobileAppsCostsSectionProps) {
  const { label, title, description, factors, note, ctaLabel } = costs;

  return (
    <section className="section-padding" style={{ background: "var(--bg-surface-1)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-11">
        <div className="max-w-2xl flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{label}</span>
          <h2 className="text-display-2">{title}</h2>
          <p style={{ color: "var(--text-300)" }}>{description}</p>
        </div>

        <div className="price-factor-grid reveal-on-scroll">
          {factors.map((factor) => (
            <div key={factor.title} className="price-factor-card">
              <p className="price-factor-title">{factor.title}</p>
              <p className="price-factor-desc">{factor.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 reveal-on-scroll">
          <p className="max-w-md" style={{ color: "var(--text-300)" }}>{note}</p>
          <a href="#kontakt" className="btn btn-secondary">{ctaLabel}</a>
        </div>
      </div>
    </section>
  );
}
