
import type { ServiceSectionType } from "../../data/types/home-types";

interface ServiceSectionProps {
    serviceLabel: string;
    services: ServiceSectionType["services"];
    selectedServices: string[];
    toggleService: (serviceName: string) => void;

}

export default function ServiceSection({ serviceLabel, services, selectedServices, toggleService }: ServiceSectionProps) {
    return (
        <div className="mt-1 pl-1 space-y-2.5">
           
            <label className="text-sm font-medium ml-1 block" style={{ color: "var(--text-muted)" }}>
                {serviceLabel}
            </label>
            <div className="space-y-2">
                {services.map((service) => (
                    <button
                        key={service.title}
                        type="button"
                        onClick={() => toggleService(service.title)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-sm transition-all duration-200"
                        style={{
                            background: selectedServices.includes(service.title) ? "rgba(59,130,246,0.1)" : "var(--bg-surface)",
                            borderColor: selectedServices.includes(service.title) ? "rgba(59,130,246,0.4)" : "var(--border)",
                            color: selectedServices.includes(service.title) ? "var(--text-primary)" : "var(--text-secondary)",
                        }}
                    >
                        <span
                            className="w-4 h-4 rounded flex items-center justify-center border-2 transition-all shrink-0"
                            style={{
                                background: selectedServices.includes(service.title) ? "var(--accent)" : "transparent",
                                borderColor: selectedServices.includes(service.title) ? "var(--accent)" : "var(--border-hover)",
                            }}
                        >
                            {selectedServices.includes(service.title) && (
                                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 8" fill="none">
                                    <path d="M1 4L4 7L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </span>
                        <span className="font-medium text-left">{service.title}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}