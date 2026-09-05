import { ProjectCard } from "@visionit/design-system";

const placeholder =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="640" height="360" fill="#0A5257"/></svg>'
  );

export function Default() {
  return (
    <div style={{ maxWidth: 340 }}>
      <ProjectCard
        imageSrc={placeholder}
        imageAlt="Screenshot des Projekts Musterfirma GmbH"
        title="Musterfirma GmbH"
        subtitle="Relaunch der Unternehmenswebsite mit Next.js"
        tags={["Next.js", "SEO", "CMS"]}
        href="#"
      />
    </div>
  );
}
