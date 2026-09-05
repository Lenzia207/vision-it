import { Link } from "@/app/i18n/routing";
import { AngebotAudienceData } from "../data/website-dev-types";

interface WebsiteAudienceSectionProps {
  audience: AngebotAudienceData;
  locale: string;
}

export default function WebsiteAudienceSection({ audience, locale }: WebsiteAudienceSectionProps) {
  const { tag, title, description, situationLabel, solutionLabel, rows, ctaText, ctaLabel } = audience;

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-14">
        <div className="max-w-2xl flex flex-col gap-6 reveal-on-scroll">
          <span className="label-mono">{tag}</span>
          <h2 className="text-display-2">{title}</h2>
          <p style={{ color: "var(--text-300)" }}>{description}</p>
        </div>

        <div className="flex flex-col reveal-on-scroll">
          <div className="audience-row-head">
            <span>{situationLabel}</span>
            <span />
            <span>{solutionLabel}</span>
          </div>

          {rows.map((row, i) => (
            <div key={i} className="audience-row">
              <span className="audience-situation">{row.situation}</span>
              <span className="audience-arrow" aria-hidden="true">&rarr;</span>
              <span className="audience-solution">{row.solution}</span>
            </div>
          ))}
        </div>

        <div className="audience-cta reveal-on-scroll">
          <p>{ctaText}</p>
          <Link href="/#contact" locale={locale} className="btn btn-primary">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
