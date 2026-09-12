import { AngebotMobileAppsCrossPlatformData } from "../data/mobile-apps-types";

interface MobileAppsCrossPlatformSectionProps {
  crossPlatform: AngebotMobileAppsCrossPlatformData;
}

export default function MobileAppsCrossPlatformSection({ crossPlatform }: MobileAppsCrossPlatformSectionProps) {
  const { label, title, description, items, tools } = crossPlatform;

  return (
    <section className="section-dark section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-11">
        <div className="grid gap-12 items-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          <div className="flex flex-col gap-5 reveal-on-scroll">
            <span className="section-tag">{label}</span>
            <h2 className="text-display-2">{title}</h2>
            <p style={{ color: "var(--text-200)" }}>{description}</p>
          </div>

          <div className="reveal-on-scroll" style={{ display: "grid", gap: 1, background: "var(--border-light)" }}>
            {items.map((item) => (
              <div key={item.title} className="flex flex-col gap-2 p-6" style={{ background: "var(--teal)" }}>
                <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "1.05rem", fontWeight: 500, color: "#FFFFFF" }}>{item.title}</h3>
                <p style={{ color: "var(--text-300)" }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 reveal-on-scroll">
          {tools.map((tool) => (
            <span key={tool} className="pill-accent">{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
