import { Link } from "@/app/i18n/routing";
import { AngebotSeoGeoFinalCtaData } from "../data/seo-geo-types";

interface SeoGeoFinalCtaSectionProps {
  finalCta: AngebotSeoGeoFinalCtaData;
  locale: string;
}

export default function SeoGeoFinalCtaSection({ finalCta, locale }: SeoGeoFinalCtaSectionProps) {
  const { title, description, ctaLabel, href } = finalCta;

  return (
    <section className="section-dark section-padding">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col gap-7 reveal-on-scroll">
        <span aria-hidden="true" style={{ height: 2, width: 48, background: "var(--lime)" }} />
        <h2 className="text-display-2">{title}</h2>
        <p className="text-lg" style={{ color: "var(--text-300)" }}>{description}</p>

        <div className="flex flex-wrap gap-4 mt-2">
          <Link href={href} locale={locale} className="btn btn-primary">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
