import { Link } from "@/app/i18n/routing";
import { AngebotPricingData } from "../data/website-dev-types";

interface WebsitePricingSectionProps {
  pricing: AngebotPricingData;
  locale: string;
}

export default function WebsitePricingSection({ pricing, locale }: WebsitePricingSectionProps) {
  const { factorsTag, factorsTitle, factorsDescription, factors, note, packagesTag, packagesTitle, packages } = pricing;

  return (
    <>
      <section className="section-dark section-padding" style={{ paddingBottom: 0 }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
          <div className="max-w-2xl flex flex-col gap-5 reveal-on-scroll">
            <span className="label-mono">{factorsTag}</span>
            <h2 className="text-display-2">{factorsTitle}</h2>
            <p style={{ color: "var(--text-300)" }}>{factorsDescription}</p>
          </div>

          <div className="price-factor-grid reveal-on-scroll">
            {factors.map((factor, i) => (
              <div key={i} className="price-factor-card">
                <span className="price-factor-index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="price-factor-title">{factor.title}</h3>
                <p className="price-factor-desc">{factor.description}</p>
              </div>
            ))}
          </div>

          <div className="price-note reveal-on-scroll">
            <p>{note}</p>
          </div>
        </div>
      </section>

      <section className="section-dark section-padding" style={{ paddingTop: "2.5rem" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
          <div className="max-w-2xl flex flex-col gap-4 reveal-on-scroll">
            <span className="label-mono">{packagesTag}</span>
            <h2 className="text-display-2">{packagesTitle}</h2>
          </div>

          <div className="price-package-grid reveal-on-scroll">
            {packages.map((pkg, i) => (
              <div key={i} className={`price-package-card${pkg.highlighted ? " is-highlighted" : ""}`}>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="price-package-name">{pkg.name}</h3>
                    {pkg.badge && <span className="badge">{pkg.badge}</span>}
                  </div>
                  <p className="price-package-tagline">{pkg.tagline}</p>
                </div>

                <div className="price-package-amount-row">
                  {pkg.pricePrefix ? (
                    <>
                      <span className="price-package-prefix">{pkg.pricePrefix}</span>
                      <span className="price-package-price">{pkg.price}</span>
                    </>
                  ) : (
                    <span className="price-package-price-custom">{pkg.price}</span>
                  )}
                </div>

                <ul className="price-package-features">
                  {pkg.features.map((feature, fi) => (
                    <li key={fi}>
                      <span aria-hidden="true">&mdash;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  locale={locale}
                  className={`btn ${pkg.ctaVariant === "primary" ? "btn-primary" : "btn-secondary"} mt-auto`}
                >
                  {pkg.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
