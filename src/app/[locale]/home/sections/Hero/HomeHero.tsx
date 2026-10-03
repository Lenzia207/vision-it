import { HomeHero as HomeHeroData } from "../data/types/home-types";
import HeroBraid from "./HeroBraid";

interface HomeHeroProps {
  data: HomeHeroData;
}

// Entrance delays (ms) — headline lines stagger first, supporting blocks follow.
const lineDelay = (i: number) => `${120 + i * 120}ms`;
const enterDelay = (step: number) => `${350 + step * 120}ms`;

export default function HomeHero({ data }: HomeHeroProps) {
  return (
    <section
      id="top"
      className="section-dark relative overflow-hidden min-h-svh flex flex-col justify-center pt-[clamp(104px,11vw,136px)] pb-[clamp(40px,5vw,64px)]"
    >
      <div className="relative z-1 w-full max-w-7xl mx-auto px-[clamp(20px,5vw,64px)] flex flex-col gap-[clamp(24px,3vw,36px)]">
        <span
          className="hero-enter font-mono text-[0.78rem] font-medium uppercase tracking-[0.2em] text-(--lime)"
          style={{ animationDelay: enterDelay(0) }}
        >
          {data.eyebrow}
        </span>

        <div className="flex flex-wrap justify-between items-end gap-x-14 gap-y-7">
          <h1 className="m-0 flex flex-col flex-none max-w-full whitespace-nowrap font-mono font-medium text-[clamp(2.4rem,6vw,5.2rem)] leading-none tracking-[-0.04em] text-white">
            {data.titleLines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <span
                  className={`hero-line ${i === 1 ? "italic text-(--lime)" : ""}`}
                  style={{ animationDelay: lineDelay(i) }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <div
            className="hero-enter flex flex-col gap-10 basis-[440px] shrink"
            style={{ animationDelay: enterDelay(2) }}
          >
            <p className="m-0 text-[1.02rem] leading-[1.7] text-(--text-300) lg:text-justify">
              {data.text}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={data.primaryCta.pageId} className="btn btn-primary whitespace-nowrap">
                {data.primaryCta.label}
              </a>
              <a href={data.secondaryCta.pageId} className="btn btn-secondary whitespace-nowrap">
                {data.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>

        <div
          className="hero-enter flex flex-wrap justify-between gap-x-6 gap-y-2 pt-5 border-t border-(--border-light) font-mono text-[0.74rem] font-medium uppercase tracking-[0.16em]"
          style={{ animationDelay: enterDelay(3) }}
        >
          <span className="text-(--text-200)">{data.tagline}</span>
        </div>

        <HeroBraid
          nodes={data.nodes}
          label={data.braidLabel}
          braidDelay={enterDelay(4)}
          captionDelay={enterDelay(5)}
        />
      </div>

      <p className="sr-only">{data.keywords.join(", ")}</p>
    </section>
  );
}
