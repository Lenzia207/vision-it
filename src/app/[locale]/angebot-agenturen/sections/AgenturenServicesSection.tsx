import IconLucide from "@/components/IconsLucide";
import { AngebotAgenturenServicesData } from "../data/agenturen-types";

interface AgenturenServicesSectionProps {
  services: AngebotAgenturenServicesData;
}

export default function AgenturenServicesSection({ services }: AgenturenServicesSectionProps) {
  const { label, title, description, items } = services;

  return (
    <section id="leistungen" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        <div className="max-w-2xl flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{label}</span>
          <h2 className="text-display-2">{title}</h2>
          {description && <p style={{ color: "var(--text-300)" }}>{description}</p>}
        </div>

        <div className="grid gap-6 reveal-on-scroll" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {items.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-card-icon">
                <IconLucide iconName={service.icon} size={22} />
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
