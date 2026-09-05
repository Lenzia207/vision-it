import type { ReactNode } from "react";

export interface ServiceCardProps {
  /** Icon shown in the rounded icon tile at the top of the card. */
  icon: ReactNode;
  /** Service name. */
  title: string;
  /** One or two sentences describing the service. */
  description: string;
  /** Optional call-to-action label, shown as a link revealed on hover. */
  ctaLabel?: string;
  /** Href for the call-to-action link. */
  ctaHref?: string;
  /** Forces the hover state visible - used for touch devices' active card. */
  active?: boolean;
}

/** Service offering card with icon, title, description, and an optional CTA link. */
export function ServiceCard({ icon, title, description, ctaLabel, ctaHref, active }: ServiceCardProps) {
  const classes = ["vids-service-card", active ? "is-active" : ""].filter(Boolean).join(" ");
  return (
    <div className={classes}>
      <div className="vids-service-card-icon">{icon}</div>
      <h3 className="vids-service-card-title">{title}</h3>
      <p className="vids-service-card-desc">{description}</p>
      {ctaLabel && ctaHref ? (
        <a className="vids-service-card-cta" href={ctaHref}>
          {ctaLabel}
        </a>
      ) : null}
    </div>
  );
}
