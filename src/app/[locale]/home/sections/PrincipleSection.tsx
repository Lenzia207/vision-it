"use client";

import { useRef } from "react";
import { PrincipleSection as PrincipleData } from "./data/types/home-types";
import Eyebrow from "./components/Eyebrow";
import PrincipleRings from "./Principle/PrincipleRings";
import { useStepThroughOnView } from "./Principle/use-step-through-on-view";

interface PrincipleSectionProps {
  data: PrincipleData;
}

export default function PrincipleSection({ data }: PrincipleSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { active, pick } = useStepThroughOnView(sectionRef, data.items.length);

  return (
    <section
      id="ansatz"
      ref={sectionRef}
      className="section-dark relative overflow-hidden px-[clamp(20px,5vw,64px)] py-[clamp(88px,11vw,152px)]"
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-[clamp(48px,6vw,88px)] items-center">
        <div className="flex flex-col gap-7">
          <div className="reveal-on-scroll flex flex-col gap-5">
            <Eyebrow tone="lime">{data.tag}</Eyebrow>
            <h2 className="m-0 font-mono font-medium text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-white text-balance">
              {data.title}
            </h2>
            <p className="m-0 max-w-[520px] text-[1.05rem] leading-[1.7] text-(--text-300) text-pretty lg:text-justify">{data.text}</p>
          </div>

          <ul
            className="reveal-on-scroll m-0 p-0 list-none flex flex-col border-b border-(--border-light)"
            style={{ transitionDelay: "120ms" }}
          >
            {data.items.map((item, i) => {
              const on = i === active;
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    aria-current={on}
                    onClick={() => pick(i)}
                    onMouseEnter={() => pick(i)}
                    onFocus={() => pick(i)}
                    className={`grid grid-cols-[48px_minmax(0,1fr)] gap-x-3 gap-y-1 items-baseline w-full m-0 px-3 py-4 text-left border-0 border-t border-(--border-light) cursor-pointer transition-colors duration-300 ${
                      on ? "bg-white/6" : "bg-transparent"
                    }`}
                  >
                    <span
                      className={`font-mono text-[0.82rem] font-bold tracking-[0.08em] transition-colors duration-300 ${
                        i <= active ? "text-(--lime)" : "text-(--text-400)"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-mono text-[1.1rem] font-medium transition-colors duration-300 ${
                        on ? "text-white" : i < active ? "text-(--text-200)" : "text-(--text-300)"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span />
                    <span className="text-[0.93rem] leading-normal text-(--text-300)">{item.text}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="reveal-on-scroll" style={{ transitionDelay: "200ms" }}>
            <a href={data.cta.pageId} className="btn btn-primary whitespace-nowrap">
              {data.cta.label}
            </a>
          </div>
        </div>

        <div
          className="reveal-on-scroll flex flex-col items-center gap-6"
          style={{ transitionDelay: "150ms" }}
        >
          <PrincipleRings items={data.items} active={active} />
        </div>
      </div>
    </section>
  );
}
