import { InterplaySection as InterplayData } from "./data/types/home-types";
import Eyebrow from "./components/Eyebrow";

interface InterplaySectionProps {
  data: InterplayData;
}

// Each quadrant hugs its outer corner so the four pillars frame the centre mark.
const cornerClass = (i: number) =>
  [
    i < 2 ? "justify-start" : "justify-end",
    i % 2 ? "items-end text-right" : "items-start text-left",
  ].join(" ");

export default function InterplaySection({ data }: InterplaySectionProps) {
  return (
    <section className="bg-white px-[clamp(20px,5vw,64px)] py-[clamp(88px,11vw,152px)]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-[clamp(48px,6vw,96px)] items-center">
        <div className="reveal-on-scroll flex flex-col gap-[22px] max-w-[500px]">
          <Eyebrow>{data.tag}</Eyebrow>
          <h2 className="m-0 font-mono font-medium text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-(--teal) text-balance">
            {data.title}
          </h2>
          <p className="m-0 text-[1.05rem] leading-[1.75] text-(--text-300) lg:text-justify">{data.text}</p>
        </div>

        <div
          className="reveal-on-scroll relative w-full max-w-[600px] justify-self-center"
          style={{ transitionDelay: "150ms" }}
        >
          <div className="grid grid-cols-2 gap-px bg-(--border-light) border border-(--border-light)">
            {data.pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`flex flex-col gap-2.5 min-h-[clamp(170px,22vw,280px)] p-[clamp(18px,2.6vw,32px)] bg-white transition-colors duration-300 hover:bg-(--bg-surface-1) ${cornerClass(i)}`}
              >
                <span className="flex items-center gap-2.5 font-mono text-[0.72rem] font-bold tracking-[0.12em] text-(--text-400)">
                  <span className="w-2 h-2 bg-(--lime)" />
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 font-mono text-[clamp(1.05rem,1.8vw,1.4rem)] font-medium tracking-[-0.01em] text-(--teal)">
                  {pillar.title}
                </h3>
                <p className="m-0 max-w-[200px] text-[clamp(0.82rem,1.1vw,0.92rem)] leading-normal text-(--text-300)">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>

          {/* Centre mark tying the four pillars together */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(64px,9vw,108px)] aspect-square flex items-center justify-center rounded-full bg-white shadow-[0_0_0_1px_var(--border-light)]"
          >
            <span className="w-[64%] aspect-square rounded-full border-[clamp(6px,0.9vw,11px)] border-(--lime) flex items-center justify-center">
              <span className="w-[56%] aspect-square rounded-full bg-(--teal)" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
