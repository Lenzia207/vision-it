import { AngebotAgenturenFinalCtaData } from "../data/agenturen-types";

interface AgenturenFinalCtaSectionProps {
  finalCta: AngebotAgenturenFinalCtaData;
}

export default function AgenturenFinalCtaSection({ finalCta }: AgenturenFinalCtaSectionProps) {
  const { title, description, ctaLabel, note } = finalCta;

  return (
    <section id="kontakt" className="section-padding" style={{ background: "var(--bg-surface-1)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div
          className="flex flex-col gap-7 p-10 sm:p-14 reveal-on-scroll"
          style={{ background: "var(--bg-base)", border: "2px solid var(--teal)" }}
        >
          <h2 className="text-display-2 max-w-2xl">{title}</h2>
          <p className="text-lg max-w-xl" style={{ color: "var(--text-300)" }}>{description}</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#kontakt" className="btn btn-primary">{ctaLabel}</a>
            <span style={{ color: "var(--text-400)" }}>{note}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
