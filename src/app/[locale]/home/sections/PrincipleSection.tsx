"use client";

import { useEffect, useRef, useState } from "react";
import { PrincipleSection as PrincipleData } from "./data/types/home-types";
import Eyebrow from "./components/Eyebrow";

interface PrincipleSectionProps {
  data: PrincipleData;
}

const LIME = "#BEE600";
const STEP_MS = 1000;
// Ring label positions, innermost (Fundament) to outermost.
const LABEL_TOPS = ["50%", "31%", "22%", "13%", "4%"];
// Concentric rings 1–3, outside-in: [inset %, size %]
const RINGS: [number, number][] = [
  [13, 74],
  [22, 56],
  [31, 38],
];

export default function PrincipleSection({ data }: PrincipleSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const userPickedRef = useRef(false);
  const [active, setActive] = useState(0);

  // Walk through all components once when the section scrolls into view.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (userPickedRef.current) return;
        let i = 0;
        setActive(0);
        timer = setInterval(() => {
          i++;
          if (i >= data.items.length || userPickedRef.current) {
            clearInterval(timer);
            return;
          }
          setActive(i);
        }, STEP_MS);
      },
      { rootMargin: "0px 0px -40% 0px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [data.items.length]);

  const pick = (i: number) => {
    userPickedRef.current = true;
    setActive(i);
  };

  const last = data.items.length - 1;
  const complete = active >= last;
  const ringBorder = (i: number) =>
    i > active ? "1px dashed rgba(255,255,255,0.2)" : i === active ? `2px solid ${LIME}` : "1.5px solid rgba(255,255,255,0.6)";

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
          <div aria-hidden="true" className="relative w-full max-w-[540px] aspect-square lg:block hidden">
            <div
              className="slow-spin absolute left-[4%] top-[4%] w-[92%] h-[92%] rounded-full"
              style={{
                border: complete ? `2px dashed ${LIME}` : "1px dashed rgba(255,255,255,0.2)",
                transition: "border-color 0.6s ease",
              }}
            />
            {RINGS.map(([inset, size], k) => (
              <div
                key={inset}
                className="absolute rounded-full"
                style={{
                  left: `${inset}%`,
                  top: `${inset}%`,
                  width: `${size}%`,
                  height: `${size}%`,
                  border: ringBorder(3 - k),
                  transition: "border 0.6s ease",
                }}
              />
            ))}
            <div className="absolute left-[40%] top-[40%] w-[20%] h-[20%] rounded-full bg-(--lime) flex items-center justify-center">
              <span className="w-[34%] aspect-square rounded-full bg-(--teal)" />
            </div>
            {data.items.map((item, i) => (
              <span
                key={item.ringLabel}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-[9px] py-[3px] whitespace-nowrap bg-(--teal) border font-mono text-[clamp(0.6rem,1.4vw,0.72rem)] font-semibold uppercase tracking-[0.12em] transition-colors duration-400"
                style={{
                  top: LABEL_TOPS[i],
                  color: i === active ? LIME : i < active ? "#FFFFFF" : "#7E9694",
                  borderColor: i === active ? LIME : "rgba(255,255,255,0.14)",
                }}
              >
                {String(i + 1).padStart(2, "0")} {item.ringLabel}
              </span>
            ))}
          </div>
       
        </div>
      </div>
    </section>
  );
}
