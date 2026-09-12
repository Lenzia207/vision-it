import { AngebotAgenturenWorkflowData } from "../data/agenturen-types";

interface AgenturenWorkflowSectionProps {
  workflow: AngebotAgenturenWorkflowData;
}

export default function AgenturenWorkflowSection({ workflow }: AgenturenWorkflowSectionProps) {
  const { label, title, description, toolsLabel, tools, toolsNote, statement } = workflow;

  return (
    <section className="section-dark section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-12 items-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        <div className="flex flex-col gap-5 reveal-on-scroll">
          <span className="section-tag">{label}</span>
          <h2 className="text-display-2">{title}</h2>
          <p style={{ color: "var(--text-200)" }}>{description}</p>
          <div className="price-note">
            <p style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}>{statement}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 reveal-on-scroll">
          <span className="label-mono">{toolsLabel}</span>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool) => (
              <span key={tool} className="pill">{tool}</span>
            ))}
          </div>
          <p style={{ color: "var(--text-300)" }}>{toolsNote}</p>
        </div>
      </div>
    </section>
  );
}
