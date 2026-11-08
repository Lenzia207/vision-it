import { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/app/i18n/routing";
import { AngebotMobileAppsApp } from "../data/mobile-apps-types";
import { cardHoverClassName } from "./card-styles";

export default function AppCard({
  app,
  href,
  locale,
  roleLabel,
  highlightsLabel,
  ctaLabel,
  panelClassName,
  iconClassName,
  phone,
}: {
  app: AngebotMobileAppsApp;
  href: string;
  locale: string;
  roleLabel: string;
  highlightsLabel: string;
  ctaLabel: string;
  panelClassName: string;
  iconClassName: string;
  phone: ReactNode;
}) {
  return (
    <article className={`flex flex-col bg-(--bg-surface-1) border-2 border-(--bg-surface-1) ${cardHoverClassName}`}>
      <div className={`relative h-[280px] flex items-end justify-center gap-[18px] px-6 pt-8 overflow-hidden ${panelClassName}`}>
        <Image src={app.icon} alt="" aria-hidden="true" width={64} height={64} className={`absolute left-6 top-6 size-16 ${iconClassName}`} />
        <div aria-hidden="true">{phone}</div>
      </div>
      <div className="flex-1 flex flex-col gap-4 p-8">
        <span className="font-mono text-[0.69rem] font-semibold uppercase tracking-widest bg-(--teal) text-white px-2.5 py-[5px] w-fit">
          {app.badge}
        </span>
        <h3 className="m-0 font-mono text-[1.62rem] font-medium tracking-[-0.02em] text-(--teal)">{app.title}</h3>
        <p className="m-0 text-[0.94rem] leading-[1.65] text-(--text-300)">{app.description}</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[18px]">
          {[
            { label: roleLabel, items: app.roleItems },
            { label: highlightsLabel, items: app.highlightItems },
          ].map((column) => (
            <div key={column.label} className="flex flex-col gap-1.5">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-(--text-300)">{column.label}</span>
              <span className="text-[0.875rem] leading-[1.7] text-(--teal)">
                {column.items.map((item) => (
                  <span key={item} className="block">{item}</span>
                ))}
              </span>
            </div>
          ))}
        </div>
        <Link href={href} locale={locale} className="btn btn-primary mt-auto w-fit">
          {ctaLabel} →
        </Link>
      </div>
    </article>
  );
}
