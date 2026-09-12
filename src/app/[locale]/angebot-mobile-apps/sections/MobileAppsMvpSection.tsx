import { AngebotMobileAppsMvpData } from "../data/mobile-apps-types";

interface MobileAppsMvpSectionProps {
  mvp: AngebotMobileAppsMvpData;
}

export default function MobileAppsMvpSection({ mvp }: MobileAppsMvpSectionProps) {
  const { label, title, description, note, steps } = mvp;

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-14 items-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        <div className="flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{label}</span>
          <h2 className="text-display-2">{title}</h2>
          <p style={{ color: "var(--text-300)" }}>{description}</p>
          <div className="price-note">
            <p style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}>{note}</p>
          </div>
        </div>

        <div className="reveal-on-scroll">
          {steps.map((step, i) => (
            <div key={step.step}>
              <div
                className="grid items-center gap-4 py-4"
                style={{
                  gridTemplateColumns: "46px 1fr",
                  ...(step.highlighted
                    ? { background: "var(--teal)", padding: "18px 22px", margin: "0 -22px" }
                    : {}),
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: step.highlighted ? "var(--lime)" : "var(--text-400)",
                  }}
                >
                  {step.step}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    color: step.highlighted ? "#FFFFFF" : "var(--text-100)",
                  }}
                >
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <span aria-hidden="true" style={{ display: "block", width: 1, height: 20, marginLeft: 23, background: "var(--border-light)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
