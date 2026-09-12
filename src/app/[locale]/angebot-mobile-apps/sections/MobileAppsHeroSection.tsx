import { AngebotMobileAppsHeroData } from "../data/mobile-apps-types";

interface MobileAppsHeroSectionProps {
  hero: AngebotMobileAppsHeroData;
}

export default function MobileAppsHeroSection({ hero }: MobileAppsHeroSectionProps) {
  const { eyebrow, title, description, ctaLabel, secondaryCtaLabel } = hero;

  return (
    <section className="section-dark relative section-padding" style={{ paddingTop: "8rem" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-8 reveal-on-scroll">
        <span className="section-tag">{eyebrow}</span>
        <h1 className="text-display-2 max-w-3xl">{title}</h1>
        <p className="text-lg max-w-xl" style={{ color: "var(--text-200)" }}>{description}</p>

        <div className="flex flex-wrap gap-4 mt-2">
          <a href="#kontakt" className="btn btn-primary">{ctaLabel}</a>
          <a href="#projekte" className="btn btn-secondary">{secondaryCtaLabel}</a>
        </div>
      </div>
    </section>
  );
}
