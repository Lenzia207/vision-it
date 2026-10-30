import Image from "next/image";
import { Funnel_Display, Funnel_Sans, JetBrains_Mono } from "next/font/google";
import { Link } from "@/app/i18n/routing";
import { caseStudiesUrl } from "@/app/configs/configs";
import CaseStudyShell, { CaseStudyNav } from "../components/CaseStudyShell";
import { ElektrochemieCaseStudyData } from "../data/case-studies-types";

const funnelDisplay = Funnel_Display({ subsets: ["latin"], variable: "--cs-display", display: "swap" });
const funnelSans = Funnel_Sans({ subsets: ["latin"], variable: "--cs-body", display: "swap" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--cs-mono", display: "swap" });

const mono = "font-(family-name:--cs-mono)";
const display = "font-(family-name:--cs-display)";
const sectionX = "px-[clamp(20px,5vw,64px)]";
const sectionHeading = "m-0 font-semibold text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.05] tracking-[-0.025em]";

const symbolClassNames = [
  "bg-[#1F4F83] text-white",
  "bg-[#70C3D8] text-[#0E2340]",
  "bg-[#765F95] text-white",
  "bg-[#0E2340] text-white",
  "bg-[#1F4F83] text-white",
  "bg-[#70C3D8] text-[#0E2340]",
];

interface ElektrochemieCaseStudyProps {
  data: ElektrochemieCaseStudyData;
  locale: string;
}

export default function ElektrochemieCaseStudy({ data, locale }: ElektrochemieCaseStudyProps) {
  return (
    <CaseStudyShell
      locale={locale}
      className={`${funnelDisplay.variable} ${funnelSans.variable} ${jetBrainsMono.variable} font-(family-name:--cs-body) text-[#0E2340] bg-[#F4F6F9]`}
    >
      <CaseStudyNav
        locale={locale}
        nav={data.nav}
        className={`bg-[#0E2340] text-white text-[13px] ${mono}`}
        backClassName="text-white"
        labelClassName="text-[#70C3D8]"
      />

      <header className="relative overflow-hidden bg-[#0E2340] text-white">
        <Image src="/images/portfolio/case-egm.jpg" alt="" aria-hidden="true" fill priority sizes="100vw" className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,35,64,.35)_0%,rgba(14,35,64,.92)_100%)]" />
        <div className={`relative max-w-[1240px] mx-auto ${sectionX} pt-[clamp(96px,12vw,168px)] pb-[clamp(64px,8vw,104px)] flex flex-col gap-6`}>
          <span className={`${mono} text-[13px] tracking-[.12em] uppercase text-[#70C3D8]`}>{data.hero.eyebrow}</span>
          <h1 className="m-0 max-w-[920px] font-semibold text-[clamp(2.6rem,6.4vw,5.4rem)] leading-[.98] tracking-[-0.035em]">
            {data.hero.title}
          </h1>
          <p className="m-0 max-w-[680px] text-[clamp(17px,1.6vw,20px)] leading-[1.6] text-white/85">{data.hero.description}</p>
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href={data.hero.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-12 px-6 rounded-[10px] bg-white text-[#0E2340] font-semibold no-underline"
            >
              {data.hero.websiteCta} ↗
            </a>
            <a href="#umsetzung" className="inline-flex items-center min-h-12 px-6 rounded-[10px] border border-white/40 text-white font-medium no-underline">
              {data.hero.detailsCta} ↓
            </a>
          </div>
        </div>
      </header>

      <section className={sectionX}>
        <div className="max-w-[1240px] mx-auto -mt-px grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-px bg-[#D9DFE7] border border-[#D9DFE7] rounded-b-xl overflow-hidden">
          {data.facts.map((fact) => (
            <div key={fact.label} className="bg-white p-[22px] flex flex-col gap-1.5">
              <span className={`${mono} text-[11px] tracking-[.1em] uppercase text-[#5B6B80]`}>{fact.label}</span>
              <span className="font-semibold">{fact.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`${sectionX} pt-[clamp(80px,10vw,128px)]`}>
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[clamp(32px,6vw,96px)]">
          <div className="flex flex-col gap-4">
            <span className={`${mono} text-[13px] text-[#765F95]`}>{data.intro.label}</span>
            <h2 className={sectionHeading}>{data.intro.title}</h2>
          </div>
          <div className="flex flex-col gap-[18px] text-[17px] leading-[1.7] text-[#33465E]">
            {data.intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="m-0">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionX} py-[clamp(64px,8vw,96px)]`}>
        <div className="max-w-[1240px] mx-auto rounded-[14px] overflow-hidden bg-white shadow-[0_30px_80px_rgba(14,35,64,.18)] border border-[#D9DFE7]">
          <div className="flex items-center gap-[7px] px-4 py-3 bg-[#EEF1F5] border-b border-[#D9DFE7]">
            {[0, 1, 2].map((dot) => (
              <span key={dot} className="size-2.5 rounded-full bg-[#C9D0DA]" />
            ))}
            <span className={`ml-3 px-3.5 py-1 rounded-md bg-white ${mono} text-xs text-[#5B6B80]`}>{data.domain}</span>
          </div>
          <Image
            src="/images/portfolio/case-egm.jpg"
            alt={data.screenshotAlt}
            width={1600}
            height={804}
            sizes="(min-width: 1368px) 1240px, 100vw"
            className="block w-full h-auto"
          />
        </div>
      </section>

      <section id="umsetzung" className={`${sectionX} pb-[clamp(80px,10vw,128px)]`}>
        <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-[760px]">
            <span className={`${mono} text-[13px] text-[#765F95]`}>{data.work.label}</span>
            <h2 className={sectionHeading}>{data.work.title}</h2>
            <p className="m-0 text-[17px] leading-[1.7] text-[#33465E]">{data.work.description}</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-4">
            {data.work.items.map((item, i) => (
              <article
                key={item.title}
                className="bg-white border border-[#D9DFE7] rounded-xl p-[26px] flex flex-col gap-3.5 transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(14,35,64,.12)]"
              >
                <div className="flex justify-between items-start">
                  <span className={`size-16 rounded-[10px] flex items-center justify-center ${display} text-[28px] font-semibold ${symbolClassNames[i]}`}>
                    {item.symbol}
                  </span>
                  <span className={`${mono} text-xs text-[#5B6B80]`}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="m-0 text-[22px] font-semibold">{item.title}</h3>
                <p className="m-0 text-[15px] leading-[1.65] text-[#33465E]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-[#0E2340] text-white ${sectionX} py-[clamp(80px,10vw,128px)]`}>
        <div className="max-w-[1240px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[760px]">
            <span className={`${mono} text-[13px] text-[#70C3D8]`}>{data.result.label}</span>
            <h2 className={sectionHeading}>{data.result.title}</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-px bg-white/15 border border-white/15 rounded-xl overflow-hidden">
            {data.result.stats.map((stat) => (
              <div key={stat.label} className="bg-[#0E2340] p-7 flex flex-col gap-1.5">
                <span className={`${display} text-[56px] font-semibold leading-none text-[#70C3D8]`}>{stat.value}</span>
                <span className="text-[15px] text-white/80">{stat.label}</span>
              </div>
            ))}
          </div>
          {data.quote && (
            <figure className="m-0 flex flex-col gap-[18px] max-w-[860px] pt-2">
              <blockquote className={`m-0 ${display} text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.3] font-medium`}>„{data.quote.text}“</blockquote>
              <figcaption className={`${mono} text-[13px] text-white/70`}>{data.quote.author}</figcaption>
            </figure>
          )}
        </div>
      </section>

      <section className={`${sectionX} py-[clamp(64px,8vw,96px)]`}>
        <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-4">
          <Link
            href={`${caseStudiesUrl}/herzhirnhumor`}
            locale={locale}
            className="flex flex-col gap-2.5 p-8 rounded-xl bg-white border border-[#D9DFE7] no-underline text-[#0E2340]"
          >
            <span className={`${mono} text-xs text-[#5B6B80]`}>{data.next.label} →</span>
            <span className={`${display} text-[28px] font-semibold`}>{data.next.title}</span>
          </Link>
          <Link href="/#contact" locale={locale} className="flex flex-col gap-2.5 p-8 rounded-xl bg-[#1F4F83] no-underline text-white">
            <span className={`${mono} text-xs text-[#70C3D8]`}>{data.contact.label}</span>
            <span className={`${display} text-[28px] font-semibold`}>{data.contact.title} →</span>
          </Link>
        </div>
      </section>
    </CaseStudyShell>
  );
}
