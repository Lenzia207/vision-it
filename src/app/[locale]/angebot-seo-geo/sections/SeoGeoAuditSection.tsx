import { AngebotSeoGeoAuditData } from "../data/seo-geo-types";

interface SeoGeoAuditSectionProps {
  audit: AngebotSeoGeoAuditData;
}

export default function SeoGeoAuditSection({ audit }: SeoGeoAuditSectionProps) {
  const { tag, title, description, categories } = audit;

  return (
    <section id="leistungen" className="section-padding" style={{ background: "var(--bg-surface-1)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        <div className="max-w-2xl flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{tag}</span>
          <h2 className="text-display-2">{title}</h2>
          <p style={{ color: "var(--text-300)" }}>{description}</p>
        </div>

        <div className="audit-grid reveal-on-scroll">
          {categories.map((category, i) => (
            <div key={category.title} className={`audit-card${category.highlighted ? " is-highlighted" : ""}`}>
              <div className="flex items-baseline gap-3">
                <span className="audit-index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="audit-title">{category.title}</h3>
              </div>
              <p className="audit-desc">{category.description}</p>
              <div className="audit-tags">
                {category.tags.map((chip) => (
                  <span key={chip} className="tag-micro">{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
