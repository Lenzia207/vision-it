import { AngebotAgenturenUseCasesData } from "../data/agenturen-types";

interface AgenturenUseCasesSectionProps {
  useCases: AngebotAgenturenUseCasesData;
}

export default function AgenturenUseCasesSection({ useCases }: AgenturenUseCasesSectionProps) {
  const { label, title, description, items } = useCases;

  return (
    <section className="section-padding" style={{ background: "var(--bg-surface-1)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        <div className="max-w-2xl flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{label}</span>
          <h2 className="text-display-2">{title}</h2>
          <p style={{ color: "var(--text-300)" }}>{description}</p>
        </div>

        <div className="audit-grid reveal-on-scroll">
          {items.map((item) => (
            <div key={item.step} className="audit-card">
              <span className="audit-index">{item.step}</span>
              <h3 className="audit-title">{item.title}</h3>
              <p className="audit-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
