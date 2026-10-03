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
        <span className="absolute inset-0 rounded-full border border-dashed border-white/35" />
        <span className="absolute inset-2 rounded-full border-[1.5px] border-white/55" />
        <span className="absolute inset-[15px] rounded-full border-4 border-(--lime)" />
      </>
    );
  }
  if (kind === "agency") {
    return (
      <>
        <span className="absolute left-0 top-0.5 w-[26px] h-[26px] border-[1.5px] border-white/55" />
        <span className="absolute left-4 top-4 w-[26px] h-[26px] bg-(--lime)" />
        <span className="absolute left-4 top-4 w-[11.5px] h-[13.5px] bg-(--teal)" />
      </>
    );
  }
  return (
    <>
      <span className="absolute inset-x-0 top-1 bottom-1.5 border-[1.5px] border-white/45" />
      <span className="absolute inset-x-0 top-1 h-[9px] border-b-[1.5px] border-white/45" />
      <span className="absolute left-1.5 top-[18px] w-3 h-3 bg-(--lime)" />
      <span className="absolute left-[23px] top-5 w-[15px] h-[1.5px] bg-white" />
      <span className="absolute left-[23px] top-[26px] w-2.5 h-[1.5px] bg-white/45" />
    </>
  );
}

const tabClass = (selected: boolean) =>
  `-mb-px pb-3 bg-transparent border-0 border-b-2 cursor-pointer font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 hover:text-white ${
    selected ? "border-(--lime) text-white" : "border-transparent text-[#9DB3B2]"
  }`;

const numClass = "font-mono text-[0.72rem] font-semibold tracking-[0.08em] text-[#9DB3B2]";

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
      <article className="flex-1 flex flex-col bg-(--teal) shadow-[0_0_0_1px_rgba(255,255,255,0.14)] transition-colors duration-350 hover:bg-[#054E53]">
        <header className="flex flex-col gap-7 px-[clamp(24px,2.8vw,36px)] pt-[clamp(28px,3vw,40px)]">
          <div className="flex justify-between items-start gap-4">
            <span className="flex items-center gap-2.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#9DB3B2]">
              <span className="w-2 h-2 bg-(--lime)" />
              {areaLabel} {String(index + 1).padStart(2, "0")}
            </span>
            <div aria-hidden="true" className="relative flex-none w-11 h-11">
              <ServiceGlyph kind={card.key} />
            </div>
          </div>

          <h3 className="m-0 min-h-[2.3em] font-mono text-[clamp(1.4rem,2vw,1.7rem)] font-medium leading-[1.15] tracking-[-0.025em] text-white text-balance">
            {card.title}
          </h3>
          <p className="m-0 min-h-[6.8em] text-[0.95rem] leading-[1.7] text-[#C7D9D8] text-pretty">
            {card.description}
          </p>

          <div role="tablist" aria-label={card.title} className="flex gap-7 border-b border-white/14">
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
        </header>

        <div id={panelId} role="tabpanel" className="flex-1 px-[clamp(24px,2.8vw,36px)] pt-2 pb-8">
          {showProcess ? (
            <ol className="m-0 p-0 list-none flex flex-col">
              {card.process.map((step) => (
                <li
                  key={step.step}
                  className="grid grid-cols-[32px_minmax(0,1fr)] items-baseline py-3.5 border-b border-white/8"
                >
                  <span className={numClass}>{step.step}</span>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[0.95rem] font-medium text-white">{step.title}</span>
                    <span className="text-[0.86rem] leading-[1.55] text-[#C7D9D8]">{step.description}</span>
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <ul className="m-0 p-0 list-none flex flex-col">
              {card.items.map((item, i) => (
                <li
                  key={item}
                  className="grid grid-cols-[32px_minmax(0,1fr)] items-baseline py-3.5 border-b border-white/8 text-[0.93rem] leading-normal text-white"
                >
                  <span className={numClass}>{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link
          href={`/${card.link}`}
          locale={locale}
          className="flex justify-between items-center gap-4 px-[clamp(24px,2.8vw,36px)] py-[22px] border-t border-white/14 font-mono text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-white no-underline transition-colors duration-250 hover:bg-(--lime) hover:text-(--teal)"
        >
          <span>{linkLabel}</span>
          <span aria-hidden="true" className="text-base tracking-normal">→</span>
        </Link>
      </article>
    </div>
  );
}
