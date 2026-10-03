import { VisionSeoSection as VisionSeoData } from "./data/types/home-types";

interface VisionSeoSectionProps {
  data: VisionSeoData;
}

export default function VisionSeoSection({ data }: VisionSeoSectionProps) {
  return (
    <section className="section-lime border-y-2 border-(--teal) px-[clamp(20px,5vw,64px)] py-[clamp(72px,8vw,112px)]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-x-20 gap-y-12 items-center">
        <div className="reveal-on-scroll flex flex-col gap-[22px]">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.06em] bg-(--teal) text-(--lime)">
              {data.badge}
            </span>
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-[0.04em] text-(--text-300) border border-(--border-light)">
              {data.statusBadge}
            </span>
          </div>
          <h2 className="m-0 font-mono font-medium text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.08] tracking-[-0.03em] text-(--teal) text-balance">
            {data.title}
          </h2>
          <p className="m-0 max-w-[520px] text-[1.02rem] leading-[1.7] text-(--text-300) text-pretty">{data.text}</p>
        </div>

        {/* Terminal-style concept sketch of an audit run */}
        <div
          role="img"
          aria-label={data.windowAriaLabel}
          className="reveal-on-scroll flex flex-col bg-(--teal) text-[#EAF3F2] font-mono shadow-[10px_10px_0_0_rgba(2,70,75,0.25)]"
          style={{ transitionDelay: "150ms" }}
        >
          <div className="flex justify-between gap-3 px-[18px] py-3 border-b border-white/14 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#C7D9D8]">
            <span>{data.windowTitle}</span>
            <span>{data.windowLabel}</span>
          </div>
          <div className="flex flex-col gap-0.5 p-[18px]">
            {data.tree.map((row, i) => (
              <div
                key={row.path}
                className="reveal-on-scroll flex justify-between gap-4 py-[7px] text-[clamp(0.78rem,1.2vw,0.9rem)] whitespace-pre"
                style={{ transitionDelay: `${200 + i * 110}ms` }}
              >
                <span className="flex items-center gap-2.5 min-w-0 overflow-hidden">
                  <span
                    className={`flex-none w-[9px] h-[9px] border-[1.5px] border-(--lime) ${row.done ? "bg-(--lime)" : "bg-transparent"}`}
                  />
                  <span className="overflow-hidden text-ellipsis">{row.path}</span>
                </span>
                <span className="flex-none text-[#9DB3B2]">{row.check}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 pt-3 mt-2 border-t border-dashed border-white/20 text-[0.85rem] text-(--lime)">
              <span>{data.analyzing}</span>
              <span className="cursor-blink inline-block w-2 h-[1.05em] bg-(--lime)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
