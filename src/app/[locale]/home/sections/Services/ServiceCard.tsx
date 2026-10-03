"use client";

import { useId, useState } from "react";
import { Link } from "@/app/i18n/routing";
import { ServiceCardData } from "../data/types/home-types";

interface ServiceCardProps {
  card: ServiceCardData;
  index: number;
  areaLabel: string;
  servicesTab: string;
  processTab: string;
  linkLabel: string;
  locale: string;
}

/** Abstract geometric mark in the card header, one per service area. */
function ServiceGlyph({ kind }: { kind: string }) {
  if (kind === "seo") {
    return (
      <>
        <span className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-white/40" />
        <span className="absolute inset-3 rounded-full border-2 border-white/60" />
        <span className="absolute inset-[22px] rounded-full border-[5px] border-(--lime)" />
      </>
    );
  }
  if (kind === "agency") {
    return (
      <>
        <span className="absolute left-0 top-1 w-[38px] h-[38px] border-2 border-white/60" />
        <span className="absolute left-[22px] top-6 w-[38px] h-[38px] bg-(--lime)" />
        <span className="absolute left-[22px] top-6 w-4 h-[18px] bg-(--teal-2)" />
      </>
    );
  }
  return (
    <>
      <span className="absolute inset-x-0 top-1.5 bottom-2 border-2 border-white/55" />
      <span className="absolute inset-x-0 top-1.5 h-3 border-b-2 border-white/55" />
      <span className="absolute left-[9px] top-[26px] w-[18px] h-[18px] bg-(--lime)" />
      <span className="absolute left-[33px] top-7 w-[22px] h-0.5 bg-white" />
      <span className="absolute left-[33px] top-9 w-[15px] h-0.5 bg-white/55" />
    </>
  );
}

const tabClass = (selected: boolean) =>
  `flex-1 min-h-10 border-0 cursor-pointer font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
    selected ? "bg-(--lime) text-(--teal)" : "bg-(--teal-2) text-[#9DB3B2] hover:text-white"
  }`;

export default function ServiceCard({
  card,
  index,
  areaLabel,
  servicesTab,
  processTab,
  linkLabel,
  locale,
}: ServiceCardProps) {
  const [tab, setTab] = useState<"services" | "process">("services");
  const panelId = useId();
  const showProcess = tab === "process";

  return (
    <div className="reveal-on-scroll flex" style={{ transitionDelay: `${index * 120}ms` }}>
      <article className="flex-1 flex flex-col bg-white border-2 border-(--teal) transition-[transform,box-shadow] duration-350 ease-(--ease-out-expo) hover:-translate-y-1.5 hover:shadow-[0_28px_48px_-30px_rgba(2,70,75,0.5)]">
        <div className="flex justify-between items-end gap-4 min-h-[148px] px-6 pt-[26px] pb-6 bg-(--teal) text-white">
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-(--lime)">
              {areaLabel} {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="m-0 font-mono text-[1.3rem] font-medium leading-tight text-white text-balance">
              {card.title}
            </h3>
          </div>
          <div aria-hidden="true" className="relative flex-none w-16 h-16 self-start">
            <ServiceGlyph kind={card.key} />
          </div>
        </div>

        <div role="tablist" aria-label={card.title} className="flex gap-0.5 p-0.5 bg-(--teal)">
          <button
            type="button"
            role="tab"
            aria-selected={!showProcess}
            aria-controls={panelId}
            onClick={() => setTab("services")}
            className={tabClass(!showProcess)}
          >
            {servicesTab}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={showProcess}
            aria-controls={panelId}
            onClick={() => setTab("process")}
            className={tabClass(showProcess)}
          >
            {processTab}
          </button>
        </div>

        <div id={panelId} role="tabpanel" className="flex-1 flex flex-col gap-5 p-6">
          <p className="m-0 text-[0.95rem] leading-relaxed text-(--text-300) text-pretty">{card.description}</p>

          {showProcess ? (
            <ol className="m-0 p-0 list-none flex flex-col gap-3.5">
              {card.process.map((step) => (
                <li key={step.step} className="grid grid-cols-[28px_minmax(0,1fr)] gap-2.5">
                  <span className="font-mono text-[0.85rem] font-bold text-(--teal)/50">{step.step}</span>
                  <div className="flex flex-col gap-[3px]">
                    <span className="font-mono text-[0.92rem] font-medium text-(--teal)">{step.title}</span>
                    <span className="text-[0.86rem] leading-normal text-(--text-300)">{step.description}</span>
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <ul className="m-0 p-0 list-none flex flex-col gap-3">
              {card.items.map((item) => (
                <li key={item} className="flex gap-3 items-start text-[0.92rem] leading-normal text-(--teal)">
                  <span className="flex-none w-2 h-2 mt-[7px] bg-(--lime-hover)" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="px-6 pb-6">
          <Link href={`/${card.link}`} locale={locale} className="btn btn-primary whitespace-nowrap">
            {linkLabel}
          </Link>
        </div>
      </article>
    </div>
  );
}
