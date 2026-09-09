import { Link } from "@/app/i18n/routing";
import { AngebotSeoGeoCollaborationData } from "../data/seo-geo-types";

interface SeoGeoCollaborationSectionProps {
  collaboration: AngebotSeoGeoCollaborationData;
  locale: string;
}

const GROWTH_BORDER_OPACITIES = [1, 0.6, 0.3];

export default function SeoGeoCollaborationSection({ collaboration, locale }: SeoGeoCollaborationSectionProps) {
  const { tag, title, description, plans, growthLabel, growthMonths, growthNote } = collaboration;

  return (
    <section className="section-padding" style={{ background: "var(--bg-surface-1)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        <div className="max-w-2xl flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{tag}</span>
          <h2 className="text-display-2">{title}</h2>
          <p style={{ color: "var(--text-300)" }}>{description}</p>
        </div>

        <div className="price-package-grid reveal-on-scroll">
          {plans.map((plan) => (
            <div key={plan.name} className={`plan-card${plan.highlighted ? " is-highlighted" : ""}`}>
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="price-package-name">{plan.name}</h3>
                  <span className={plan.badgeVariant === "outline" ? "badge-outline" : "badge"}>{plan.badgeLabel}</span>
                </div>
                <p className="price-package-tagline">{plan.description}</p>
              </div>

              <div className="price-package-amount-row">
                <span className="price-package-price-custom">{plan.price}</span>
              </div>

              {plan.includedNote && (
                <div className="plan-included-note">
                  <p>{plan.includedNote}</p>
                </div>
              )}

              <ul className="price-package-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">&mdash;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                locale={locale}
                className={`btn ${plan.ctaVariant === "primary" ? "btn-primary" : "btn-secondary"} mt-auto`}
              >
                {plan.ctaLabel}
              </Link>

              {plan.footnote && <p className="plan-footnote">{plan.footnote}</p>}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 reveal-on-scroll">
          <span className="label-mono">{growthLabel}</span>
          <div className="growth-grid">
            {growthMonths.map((month, i) => (
              <div
                key={month.label}
                className="growth-month"
                style={{ borderTopColor: `rgba(190, 230, 0, ${GROWTH_BORDER_OPACITIES[i] ?? 0.3})` }}
              >
                <span className="growth-month-label">{month.label}</span>
                <p className="growth-month-desc">{month.description}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "var(--text-400)" }}>{growthNote}</p>
        </div>
      </div>
    </section>
  );
}
