import { CollaborationSection as CollaborationData } from "./data/types/home-types";
import Eyebrow from "./components/Eyebrow";

interface CollaborationSectionProps {
  data: CollaborationData;
}

export default function CollaborationSection({ data }: CollaborationSectionProps) {
  return (
    <section className="bg-(--bg-surface-1) px-[clamp(20px,5vw,64px)] py-[clamp(88px,10vw,136px)]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-16">
        <div className="reveal-on-scroll flex flex-col gap-[18px] max-w-[640px]">
          <Eyebrow>{data.tag}</Eyebrow>
          <h2 className="m-0 font-mono font-medium text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-(--teal) text-balance">
            {data.title}
          </h2>
        </div>

        <ol className="m-0 p-0 list-none grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-y-10">
          {data.steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col gap-3 pt-9 pr-7">
              {/* Timeline track, its progress fill, and the step marker */}
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-(--border-light)" />
              <span
                aria-hidden="true"
                className="reveal-grow absolute inset-x-0 top-0 h-0.5 bg-(--teal)"
                style={{ transitionDelay: `${i * 220}ms` }}
              />
              <span
                aria-hidden="true"
                className="absolute left-0 -top-2 w-[18px] h-[18px] rounded-full bg-(--bg-surface-1) border-4 border-(--lime-hover)"
              />
              <span className="font-mono text-xs font-bold tracking-widest text-(--text-400)">
                {data.stepLabel} {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="m-0 font-mono text-[1.15rem] font-medium leading-[1.3] text-(--teal)">{step.title}</h3>
              <p className="m-0 text-[0.93rem] leading-relaxed text-(--text-300) text-pretty">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
