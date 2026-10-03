import { AngebotWebsiteHeroData } from "../data/website-dev-types";

interface WebsiteHeroSectionProps {
  hero: AngebotWebsiteHeroData;
  title: string;
  description: string;
  processLabel: string;
  processSteps: string[];
}

export default function WebsiteHeroSection({ hero, title, description, processLabel, processSteps }: WebsiteHeroSectionProps) {
  const { tag, primaryCtaLabel, secondaryCtaLabel } = hero;

  return (
    <section className="section-dark relative section-padding" style={{ paddingTop: "8rem" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-14">
        <div className="max-w-3xl flex flex-col gap-6 reveal-on-scroll">
          <span className="section-tag">{tag}</span>
          <h1 className="text-display-2">{title}</h1>
          <p className="text-lg max-w-xl" style={{ color: "var(--text-300)" }}>{description}</p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a href="#preisModelle" className="btn btn-primary">{primaryCtaLabel}</a>
            <a href="#leistungen" className="btn btn-secondary">{secondaryCtaLabel}</a>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center gap-x-2 gap-y-2.5 pt-10 reveal-on-scroll"
          style={{ borderTop: "1px solid var(--border-light)" }}
        >
          <span className="label-mono w-full mb-1">{processLabel}</span>
          {processSteps.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true" style={{ color: "var(--text-400)", fontSize: "0.82rem" }}>/</span>}
              <span
                className="font-mono uppercase"
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  color: i === 0 ? "var(--lime)" : "var(--text-300)",
                }}
              >
                {step}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
