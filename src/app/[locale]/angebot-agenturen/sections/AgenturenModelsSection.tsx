import { AngebotAgenturenModelsData } from "../data/agenturen-types";

interface AgenturenModelsSectionProps {
  models: AngebotAgenturenModelsData;
}

export default function AgenturenModelsSection({ models }: AgenturenModelsSectionProps) {
  const { label, title, items, note, ctaLabel } = models;

  return (
    <section className="section-padding" style={{ background: "var(--bg-surface-1)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        <div className="max-w-2xl flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{label}</span>
          <h2 className="text-display-2">{title}</h2>
        </div>

        <div className="price-package-grid reveal-on-scroll">
          {items.map((model) => (
            <div key={model.step} className="price-package-card">
              <div className="flex flex-col gap-2">
                <span className="label-mono">{model.step}</span>
                <h3 className="price-package-name">{model.title}</h3>
              </div>
              <p className="price-package-tagline">{model.description}</p>
              <p className="price-package-tagline mt-auto pt-4" style={{ borderTop: "1px solid var(--border-light)", fontFamily: "var(--font-mono)" }}>
                {model.rate}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 reveal-on-scroll">
          <p className="max-w-md" style={{ color: "var(--text-300)" }}>{note}</p>
          <a href="#kontakt" className="btn btn-primary">{ctaLabel}</a>
        </div>
      </div>
    </section>
  );
}
