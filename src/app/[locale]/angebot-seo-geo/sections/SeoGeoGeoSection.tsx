import { AngebotSeoGeoGeoData } from "../data/seo-geo-types";

interface SeoGeoGeoSectionProps {
  geo: AngebotSeoGeoGeoData;
}

export default function SeoGeoGeoSection({ geo }: SeoGeoGeoSectionProps) {
  const { tag, title, description, note, signals } = geo;

  return (
    <section className="section-dark section-padding">
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-12 items-start"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        <div className="flex flex-col gap-6 reveal-on-scroll">
          <span className="section-tag">{tag}</span>
          <h2 className="text-display-2">{title}</h2>
          <p style={{ color: "var(--text-300)" }}>{description}</p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "var(--text-400)" }}>{note}</p>
        </div>

        <div className="geo-signal-list reveal-on-scroll">
          {signals.map((signal) => (
            <div key={signal} className="geo-signal-item">
              <span aria-hidden="true" />
              <p>{signal}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
