import { Card } from "@visionit/design-system";

export function Glass() {
  return (
    <Card variant="glass" style={{ maxWidth: 320 }}>
      <h3 style={{ margin: "0 0 0.5rem", fontFamily: "var(--vids-font-mono)", color: "var(--vids-text-100)" }}>
        Individuelle Webseiten
      </h3>
      <p style={{ margin: 0, color: "var(--vids-text-300)", fontSize: "0.9rem" }}>
        Maßgeschneiderte Websites, die zu Ihrer Marke und Ihren Zielen passen.
      </p>
    </Card>
  );
}

export function Dark() {
  return (
    <Card variant="dark" style={{ maxWidth: 320 }}>
      <h3 style={{ margin: "0 0 0.5rem", fontFamily: "var(--vids-font-mono)", color: "var(--vids-text-100)" }}>
        SEO &amp; GEO
      </h3>
      <p style={{ margin: 0, color: "var(--vids-text-300)", fontSize: "0.9rem" }}>
        Sichtbarkeit in Suchmaschinen und generativer KI-Suche.
      </p>
    </Card>
  );
}
