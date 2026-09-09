import { AngebotSeoGeoFindingsData } from "../data/seo-geo-types";

interface SeoGeoFindingsSectionProps {
  findings: AngebotSeoGeoFindingsData;
}

export default function SeoGeoFindingsSection({ findings }: SeoGeoFindingsSectionProps) {
  const { tag, title, description, questionsTitle, questions, example } = findings;

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-14">
        <div className="max-w-2xl flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{tag}</span>
          <h2 className="text-display-2">{title}</h2>
          <p style={{ color: "var(--text-300)" }}>{description}</p>
        </div>

        <div className="grid gap-12 items-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <div className="flex flex-col gap-6 reveal-on-scroll">
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "1.05rem", fontWeight: 500, letterSpacing: "-0.01em", color: "var(--text-100)" }}>
              {questionsTitle}
            </h3>
            <ol className="findings-questions">
              {questions.map((question, i) => (
                <li key={question}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span>{question}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="finding-card reveal-on-scroll">
            <div className="finding-card-header">
              <span className="finding-card-header-label">{example.badgeLabel}</span>
              <span className="finding-card-header-sub">{example.badgeSubtitle}</span>
            </div>
            <div className="finding-card-body">
              <p className="finding-title">{example.title}</p>

              <div className="finding-stats">
                {example.stats.map((stat) => (
                  <div key={stat.label} className="finding-stat">
                    <span className="finding-stat-label">{stat.label}</span>
                    <span className="finding-stat-value">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="finding-recommendation">
                <span className="finding-stat-label">{example.recommendationLabel}</span>
                <p>{example.recommendation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
