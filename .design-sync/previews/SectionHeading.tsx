import { SectionHeading } from "@visionit/design-system";

export function Default() {
  return (
    <SectionHeading
      tag="Unsere Leistungen"
      title="Was wir für Sie umsetzen"
      description="Von der individuellen Website bis zur SEO- und GEO-Optimierung - alles aus einer Hand."
    />
  );
}

export function TitleOnly() {
  return <SectionHeading title="Kontakt aufnehmen" />;
}
