import { AngebotMobileAppsServicesData } from "../data/mobile-apps-types";

interface MobileAppsServicesSectionProps {
  services: AngebotMobileAppsServicesData;
}

export default function MobileAppsServicesSection({ services }: MobileAppsServicesSectionProps) {
  const { label, title, items } = services;

  return (
    <section id="leistungen" className="section-padding" style={{ background: "var(--bg-surface-1)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        <div className="max-w-2xl flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{label}</span>
          <h2 className="text-display-2">{title}</h2>
        </div>

        <div className="audit-grid reveal-on-scroll">
          {items.map((service) => (
            <div key={service.title} className={`audit-card${service.highlighted ? " is-highlighted" : ""}`}>
              {service.badgeLabel && <span className="section-tag" style={{ color: "var(--lime)" }}>{service.badgeLabel}</span>}
              <h3 className="audit-title">{service.title}</h3>
              <p className="audit-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
