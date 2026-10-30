import Image from "next/image";
import { Link } from "@/app/i18n/routing";
import { caseStudiesUrl } from "@/app/configs/configs";
import Eyebrow from "../../home/sections/components/Eyebrow";
import { websiteThemes } from "../../projekte/data/case-study-themes";
import { AngebotReferencesData } from "../data/website-dev-types";

interface WebsiteReferencesSectionProps {
  references: AngebotReferencesData;
  locale: string;
}

export default function WebsiteReferencesSection({ references, locale }: WebsiteReferencesSectionProps) {
  const { label, title, description, roleLabel, highlightsLabel, caseStudyCta, items } = references;

  return (
    <section id="referenzen" className="section-padding bg-(--bg-surface-1)">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        <div className="max-w-[680px] flex flex-col gap-[18px] reveal-on-scroll">
          <Eyebrow>{label}</Eyebrow>
          <h2 className="text-display-2">{title}</h2>
          <p className="m-0 text-[1.06rem] leading-[1.65] text-(--text-300)">{description}</p>
        </div>

        {items.map((item, i) => {
          const theme = websiteThemes[item.slug];
          const preview = (
            <div className={`flex items-center p-[clamp(20px,3vw,36px)] ${theme.panel}`}>
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={1600}
                height={860}
                sizes="(min-width: 1024px) 540px, 100vw"
                className={`block w-full h-auto rounded-md ${theme.shadow}`}
              />
            </div>
          );

          return (
            <article
              key={item.slug}
              className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] bg-white border-2 border-white transition-colors duration-300 hover:border-(--lime) reveal-on-scroll"
            >
              {i % 2 === 0 && preview}
              <div className="flex flex-col gap-[18px] p-[clamp(28px,4vw,44px)]">
                <span className="font-mono text-[0.69rem] font-semibold uppercase tracking-[0.1em] text-(--teal) border border-(--border-light) px-2.5 py-[5px] w-fit">
                  {item.category}
                </span>
                <h3 className="m-0 font-mono text-[1.62rem] font-medium tracking-[-0.02em] text-(--teal)">{item.title}</h3>
                <p className="m-0 text-[0.94rem] leading-[1.65] text-(--text-300)">{item.description}</p>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-5">
                  {[
                    { label: roleLabel, items: item.roleItems },
                    { label: highlightsLabel, items: item.highlightItems },
                  ].map((column) => (
                    <div key={column.label} className="flex flex-col gap-2">
                      <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-(--text-300)">{column.label}</span>
                      <ul className="m-0 p-0 list-none text-[0.875rem] leading-[1.7] text-(--teal)">
                        {column.items.map((entry) => <li key={entry}>{entry}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-1">
                  <Link href={`${caseStudiesUrl}/${item.slug}`} locale={locale} className="btn btn-primary">
                    {caseStudyCta} →
                  </Link>
                  <a
                    href={item.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center min-h-[46px] font-mono text-[0.875rem] font-semibold text-(--teal) underline"
                  >
                    {item.domain} ↗
                  </a>
                </div>
              </div>
              {i % 2 === 1 && preview}
            </article>
          );
        })}
      </div>
    </section>
  );
}
