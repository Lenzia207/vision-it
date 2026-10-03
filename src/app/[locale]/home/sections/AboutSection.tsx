import Image from "next/image";
import { AboutSection as AboutData } from "./data/types/home-types";
import Eyebrow from "./components/Eyebrow";

interface AboutSectionProps {
  data: AboutData;
}

export default function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="ueber-mich" className="bg-white px-[clamp(20px,5vw,64px)] py-[clamp(88px,10vw,144px)]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-[clamp(48px,6vw,96px)] items-center">
        <div className="reveal-on-scroll relative w-full max-w-[480px] justify-self-center">
          <span aria-hidden="true" className="absolute -right-4 -bottom-4 w-[42%] h-[42%] bg-(--lime)" />
          <span aria-hidden="true" className="absolute -left-4 top-7 w-[22px] h-[22px] bg-(--teal)" />
          <div className="relative w-full aspect-4/5 bg-(--bg-surface-3)">
            <Image
              src="/images/lena-zy-about-me.jpg"
              alt={data.imageAlt}
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[22px]">
          <div className="reveal-on-scroll flex flex-col gap-5">
            <Eyebrow>{data.tag}</Eyebrow>
            <h2 className="m-0 font-mono font-medium text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.08] tracking-[-0.03em] text-(--teal) text-balance">
              {data.title}
            </h2>
            <div className="font-mono text-[1.15rem] font-medium text-(--teal)">
              {data.name}{" "}
              <span className="text-[0.8rem] font-semibold tracking-widest text-(--text-400)">{data.degree}</span>
            </div>
          </div>

          <div className="reveal-on-scroll flex flex-col gap-3.5 max-w-[580px]" style={{ transitionDelay: "100ms" }}>
            {data.paragraphs.map((paragraph) => (
              <p key={paragraph} className="m-0 text-base leading-[1.75] text-(--text-300) text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          <dl
            className="reveal-on-scroll m-0 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-px bg-(--border-light) border border-(--border-light)"
            style={{ transitionDelay: "160ms" }}
          >
            {data.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 px-4 py-3.5 bg-white">
                <dt className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-(--text-400)">
                  {fact.label}
                </dt>
                <dd className="m-0 font-mono text-[0.95rem] font-medium text-(--teal)">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="reveal-on-scroll flex flex-wrap gap-3" style={{ transitionDelay: "200ms" }}>
            {data.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary whitespace-nowrap px-[1.3rem]! py-[0.7rem]!"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
