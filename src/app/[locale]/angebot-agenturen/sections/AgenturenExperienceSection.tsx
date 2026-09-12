import { AngebotAgenturenExperienceData } from "../data/agenturen-types";

interface AgenturenExperienceSectionProps {
  experience: AngebotAgenturenExperienceData;
}

export default function AgenturenExperienceSection({ experience }: AgenturenExperienceSectionProps) {
  const { label, title, paragraphs, facts } = experience;

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-14 items-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        <div className="flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{label}</span>
          <h2 className="text-display-2">{title}</h2>
          {paragraphs.map((paragraph, i) => (
            <p key={i} style={{ color: "var(--text-300)" }}>{paragraph}</p>
          ))}
        </div>

        <div className="finding-stats reveal-on-scroll">
          {facts.map((fact) => (
            <div key={fact.label} className="finding-stat">
              <span className="finding-stat-value">{fact.value}</span>
              <span className="finding-stat-label">{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
