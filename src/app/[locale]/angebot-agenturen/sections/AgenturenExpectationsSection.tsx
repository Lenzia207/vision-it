import { AngebotAgenturenExpectationsData } from "../data/agenturen-types";

interface AgenturenExpectationsSectionProps {
  expectations: AngebotAgenturenExpectationsData;
}

export default function AgenturenExpectationsSection({ expectations }: AgenturenExpectationsSectionProps) {
  const { label, title, items } = expectations;

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-14 items-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        <div className="flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{label}</span>
          <h2 className="text-display-2">{title}</h2>
        </div>

        <div className="geo-signal-list reveal-on-scroll">
          {items.map((item) => (
            <div key={item.title} className="geo-signal-item">
              <span aria-hidden="true" />
              <div className="flex flex-col gap-1.5">
                <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "1.05rem", fontWeight: 500, color: "var(--text-100)" }}>
                  {item.title}
                </h3>
                <p style={{ color: "var(--text-300)" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
