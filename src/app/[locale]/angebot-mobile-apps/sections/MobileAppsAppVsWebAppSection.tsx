import { AngebotMobileAppsAppVsWebAppData } from "../data/mobile-apps-types";

interface MobileAppsAppVsWebAppSectionProps {
  appVsWebApp: AngebotMobileAppsAppVsWebAppData;
}

export default function MobileAppsAppVsWebAppSection({ appVsWebApp }: MobileAppsAppVsWebAppSectionProps) {
  const { label, title, mobileApp, webApp, note } = appVsWebApp;

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-11">
        <div className="max-w-2xl flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{label}</span>
          <h2 className="text-display-2">{title}</h2>
        </div>

        <div className="grid gap-6 reveal-on-scroll" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          {[
            { column: mobileApp, dotColor: "var(--lime-hover)", borderColor: "var(--teal)" },
            { column: webApp, dotColor: "var(--text-400)", borderColor: "var(--border-light)" },
          ].map(({ column, dotColor, borderColor }) => (
            <div
              key={column.title}
              className="flex flex-col gap-5 p-8"
              style={{ background: "var(--bg-surface-1)", borderTop: `2px solid ${borderColor}` }}
            >
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "1.3rem", fontWeight: 500, letterSpacing: "-0.02em" }}>
                {column.title}
              </h3>
              <ul className="grid gap-3" style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {column.items.map((item) => (
                  <li key={item} className="grid gap-2.5" style={{ gridTemplateColumns: "18px 1fr" }}>
                    <span aria-hidden="true" style={{ width: 7, height: 7, marginTop: 7, background: dotColor }} />
                    <span style={{ color: "var(--text-200)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="max-w-3xl reveal-on-scroll" style={{ color: "var(--text-300)" }}>{note}</p>
      </div>
    </section>
  );
}
