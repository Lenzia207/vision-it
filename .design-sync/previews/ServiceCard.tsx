import { ServiceCard } from "@visionit/design-system";

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
  </svg>
);

export function Default() {
  return (
    <div style={{ maxWidth: 340 }}>
      <ServiceCard
        icon={<GlobeIcon />}
        title="Website-Entwicklung"
        description="Schnelle, moderne Webseiten mit Next.js - von der Landingpage bis zur Unternehmensseite."
        ctaLabel="Mehr erfahren"
        ctaHref="#"
      />
    </div>
  );
}

export function Active() {
  return (
    <div style={{ maxWidth: 340 }}>
      <ServiceCard
        icon={<GlobeIcon />}
        title="SEO &amp; GEO Optimierung"
        description="Bessere Auffindbarkeit in klassischen und KI-gestützten Suchmaschinen."
        ctaLabel="Mehr erfahren"
        ctaHref="#"
        active
      />
    </div>
  );
}
