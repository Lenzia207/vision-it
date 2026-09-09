import { AngebotSeoGeoSituationData } from "../data/seo-geo-types";

interface SeoGeoSituationSectionProps {
  situation: AngebotSeoGeoSituationData;
}

export default function SeoGeoSituationSection({ situation }: SeoGeoSituationSectionProps) {
  const { tag, title, paragraphs, problems, note } = situation;

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        <div className="grid gap-10 items-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          <div className="flex flex-col gap-5 reveal-on-scroll">
            <span className="label-mono">{tag}</span>
            <h2 className="text-display-2">{title}</h2>
          </div>
          <div className="flex flex-col gap-4 reveal-on-scroll">
            {paragraphs.map((paragraph, i) => (
              <p key={i} style={{ color: "var(--text-300)" }}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="price-factor-grid reveal-on-scroll">
          {problems.map((problem, i) => (
            <div key={i} className="price-factor-card">
              <span aria-hidden="true" style={{ width: 8, height: 8, background: "var(--lime)" }} />
              <p className="price-factor-title">{problem}</p>
            </div>
          ))}
        </div>

        <div className="price-note reveal-on-scroll">
          <p style={{ fontFamily: "var(--font-mono)", fontWeight: 500, letterSpacing: "-0.01em", color: "var(--text-100)" }}>{note}</p>
        </div>
      </div>
    </section>
  );
}
