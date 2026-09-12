import { AngebotMobileAppsProcessData } from "../data/mobile-apps-types";

interface MobileAppsProcessSectionProps {
  process: AngebotMobileAppsProcessData;
}

export default function MobileAppsProcessSection({ process }: MobileAppsProcessSectionProps) {
  const { label, title, items } = process;

  return (
    <section className="section-padding" style={{ background: "var(--bg-surface-1)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        <div className="max-w-2xl flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{label}</span>
          <h2 className="text-display-2">{title}</h2>
        </div>

        <div className="process-grid reveal-on-scroll">
          {items.map((item) => (
            <div key={item.step} className="process-card">
              <span className="process-step-label">{item.step}</span>
              <h3 className="process-title">{item.title}</h3>
              <p className="process-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
