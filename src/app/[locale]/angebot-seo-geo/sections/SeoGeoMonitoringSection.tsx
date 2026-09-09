import { AngebotSeoGeoMonitoringData } from "../data/seo-geo-types";

interface SeoGeoMonitoringSectionProps {
  monitoring: AngebotSeoGeoMonitoringData;
}

export default function SeoGeoMonitoringSection({ monitoring }: SeoGeoMonitoringSectionProps) {
  const {
    tag,
    title,
    description,
    cycleTitle,
    cycleSubtitle,
    cycleSteps,
    cycleNote,
    monthsTitle,
    monthsSubtitle,
    months,
    monthsNote,
    metricsLabel,
    metrics,
    metricsAccent,
    metricsNote,
  } = monitoring;

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-16">
        <div className="max-w-2xl flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{tag}</span>
          <h2 className="text-display-2">{title}</h2>
          <p style={{ color: "var(--text-300)" }}>{description}</p>
        </div>

        <div className="flex flex-col gap-7 reveal-on-scroll">
          <div className="section-header-row">
            <h3>{cycleTitle}</h3>
            <span className="label-mono">{cycleSubtitle}</span>
          </div>

          <div className="cycle-grid">
            {cycleSteps.map((step) => (
              <div key={step.title} className={`cycle-card${step.highlighted ? " is-highlighted" : ""}`}>
                <div className="flex items-center justify-between gap-3">
                  <span className="label-mono">{step.label}</span>
                  <span className="cycle-card-index">{step.index}</span>
                </div>
                <p className="cycle-card-title">{step.title}</p>
                <p className="cycle-card-desc">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="cycle-note">
            <span className="cycle-note-icon" aria-hidden="true">&#8635;</span>
            <p>{cycleNote}</p>
          </div>
        </div>

        <div className="flex flex-col gap-7 reveal-on-scroll">
          <div className="section-header-row">
            <h3>{monthsTitle}</h3>
            <span className="label-mono">{monthsSubtitle}</span>
          </div>

          <div className="month-grid">
            {months.map((month) => (
              <div key={month.label} className={`month-card${month.highlighted ? " is-highlighted" : ""}`}>
                <div
                  className="month-progress"
                  style={{
                    background: `linear-gradient(to right, var(--lime) ${month.progress}%, var(--border-faint) ${month.progress}%)`,
                  }}
                  aria-hidden="true"
                />
                <span className="month-label">{month.label}</span>
                <p className="month-desc">{month.description}</p>
                <div className="month-tags">
                  {month.tags.map((t) => (
                    <span key={t} className="tag-micro">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "var(--text-400)" }}>{monthsNote}</p>
        </div>

        <div className="flex flex-col gap-5" style={{ paddingTop: "0.75rem", borderTop: "1px solid var(--border-faint)" }}>
          <span className="label-mono">{metricsLabel}</span>
          <div className="flex flex-wrap gap-2.5">
            {metrics.map((metric) => (
              <span key={metric} className="pill">{metric}</span>
            ))}
            <span className="pill pill-accent">{metricsAccent}</span>
          </div>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "var(--text-400)" }}>{metricsNote}</p>
        </div>
      </div>
    </section>
  );
}
