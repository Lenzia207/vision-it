import { AngebotMobileAppsAfterLaunchData } from "../data/mobile-apps-types";

interface MobileAppsAfterLaunchSectionProps {
  afterLaunch: AngebotMobileAppsAfterLaunchData;
}

export default function MobileAppsAfterLaunchSection({ afterLaunch }: MobileAppsAfterLaunchSectionProps) {
  const { label, title, paragraphs, items } = afterLaunch;

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

        <div
          className="reveal-on-scroll"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 1, background: "var(--border-faint)", border: "1px solid var(--border-faint)" }}
        >
          {items.map((item) => (
            <div key={item} className="p-6" style={{ background: "var(--bg-surface-1)", fontFamily: "var(--font-mono)", fontWeight: 500, color: "var(--text-100)" }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
