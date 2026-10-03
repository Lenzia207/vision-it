import { AudienceSection as AudienceData } from "./data/types/home-types";
import Eyebrow from "./components/Eyebrow";

interface AudienceSectionProps {
  data: AudienceData;
}

export default function AudienceSection({ data }: AudienceSectionProps) {
  return (
    <section className="bg-white px-[clamp(20px,5vw,64px)] py-[clamp(80px,9vw,120px)]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-x-12 gap-y-10 items-start">
        <div className="reveal-on-scroll flex flex-col gap-3.5">
          <Eyebrow>{data.tag}</Eyebrow>
          <h2 className="m-0 font-mono font-medium text-[clamp(1.6rem,2.8vw,2.2rem)] leading-[1.1] tracking-[-0.03em] text-(--teal)">
            {data.title}
          </h2>
        </div>

        {data.items.map((item, i) => (
          <div
            key={item.title}
            className="reveal-on-scroll flex flex-col gap-3 pt-5 border-t-2 border-(--teal)"
            style={{ transitionDelay: `${(i + 1) * 100}ms` }}
          >
            <span className="font-mono text-xs font-bold tracking-widest text-(--text-400)">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="m-0 font-mono text-[1.2rem] font-medium leading-tight text-(--teal)">{item.title}</h3>
            <p className="m-0 text-[0.93rem] leading-[1.55] text-(--text-300) text-pretty">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
