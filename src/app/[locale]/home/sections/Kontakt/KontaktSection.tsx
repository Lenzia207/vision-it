import { KontaktSection as KontaktData } from "../data/types/home-types";
import Eyebrow from "../components/Eyebrow";
import KontaktForm from "./KontaktForm";

interface KontaktSectionProps {
  data: KontaktData;
  locale: string;
}

const cardLabel = "font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-(--text-400)";

export default function KontaktSection({ data, locale }: KontaktSectionProps) {
  return (
    <section id="contact" className="section-dark px-[clamp(20px,5vw,64px)] py-[clamp(88px,10vw,144px)]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-[clamp(48px,6vw,88px)] items-start">
        <div className="reveal-on-scroll flex flex-col gap-[22px]">
          <Eyebrow tone="lime">{data.tag}</Eyebrow>
          <h2 className="m-0 font-mono font-medium text-[clamp(2.2rem,5vw,4rem)] leading-none tracking-[-0.04em] text-white text-balance">
            {data.title}
          </h2>
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph} className="m-0 text-[1.05rem] leading-[1.7] text-(--text-300) text-pretty lg:text-justify">
              {paragraph}
            </p>
          ))}

          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-px mt-3 bg-(--border-light) border border-(--border-light)">
            <a
              href={`mailto:${data.email}`}
              className="flex flex-col gap-1.5 p-5 bg-(--teal) no-underline transition-colors duration-250 hover:bg-(--teal-2)"
            >
              <span className={cardLabel}>{data.emailLabel}</span>
              <span className="font-mono text-base font-medium text-(--lime)">{data.email}</span>
            </a>
            <div className="flex flex-col gap-1.5 p-5 bg-(--teal)">
              <span className={cardLabel}>{data.personalLabel}</span>
              <span className="text-[0.98rem] leading-normal text-white">{data.personalText}</span>
            </div>
          </div>
        </div>

        <div
          className="reveal-on-scroll p-[clamp(24px,3.5vw,40px)] bg-(--bg-surface-1) border border-(--border-light)"
          style={{ transitionDelay: "120ms" }}
        >
          <KontaktForm data={data.form} locale={locale} />
        </div>
      </div>
    </section>
  );
}
