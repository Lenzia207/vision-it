import { ReactNode } from "react";
import Image from "next/image";
import { Figtree, Hanken_Grotesk } from "next/font/google";
import { Link } from "@/app/i18n/routing";
import { caseStudiesUrl } from "@/app/configs/configs";
import CaseStudyShell, { CaseStudyNav } from "../components/CaseStudyShell";
import { HerzHirnHumorCaseStudyData } from "../data/case-studies-types";

const figtree = Figtree({ subsets: ["latin"], variable: "--cs-display", display: "swap" });
const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"], variable: "--cs-body", display: "swap" });

const display = "font-(family-name:--cs-display)";
const sectionX = "px-[clamp(20px,5vw,64px)]";
const overline = "text-xs font-semibold tracking-[.16em] uppercase text-[#5F7468]";

const workIcons: ReactNode[] = [
  <path key="heart" d="M12 21c-4-3-8-6-8-11a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 5-4 8-8 11z" />,
  <>
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
    <path d="M7 12h3M14 12h3" />
  </>,
  <>
    <rect x="4" y="3" width="16" height="18" rx="3" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </>,
  <>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <path d="M3 10h18M8 3v4M16 3v4M9 15l2 2 4-4" />
  </>,
  <path key="phone" d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </>,
];

interface HerzHirnHumorCaseStudyProps {
  data: HerzHirnHumorCaseStudyData;
  locale: string;
}

export default function HerzHirnHumorCaseStudy({ data, locale }: HerzHirnHumorCaseStudyProps) {
  return (
    <CaseStudyShell
      locale={locale}
      className={`${figtree.variable} ${hankenGrotesk.variable} font-(family-name:--cs-body) text-[#37372F] bg-[#F6F3EC]`}
    >
      <CaseStudyNav
        locale={locale}
        nav={data.nav}
        className="bg-[#FFFDF8] border-b border-[#E8E3D7] text-sm"
        backClassName="font-medium text-[#4C5D53]"
        labelClassName="text-xs font-semibold tracking-[.14em] uppercase text-[#5F7468]"
      />

      <header className={`relative overflow-hidden ${sectionX} pt-[clamp(88px,11vw,150px)] pb-[clamp(56px,7vw,88px)]`}>
        <svg aria-hidden="true" viewBox="0 0 1440 400" preserveAspectRatio="none" className="absolute left-0 top-10 w-full h-[400px]">
          <path d="M0 220 C 240 120, 480 320, 720 220 S 1200 120, 1440 220" fill="none" stroke="#D9D4C7" strokeWidth="1.2" />
          <path d="M0 300 C 300 200, 560 380, 860 280 S 1260 220, 1440 300" fill="none" stroke="#E2DED2" strokeWidth="1" />
        </svg>
        <div className="relative max-w-[960px] mx-auto flex flex-col items-center text-center gap-[22px]">
          <svg role="img" aria-label={data.hero.illustrationLabel} viewBox="0 0 220 80" className="w-[200px] h-[72px]">
            <path d="M20 60 C 40 70, 60 40, 75 52 C 85 60, 95 66, 110 58 C 125 50, 140 66, 160 56 C 175 48, 190 64, 205 58" fill="none" stroke="#37372F" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="48" cy="30" r="20" fill="none" stroke="#37372F" strokeWidth="1.6" />
            <path d="M36 26 q6 -8 12 0 q6 8 12 0 M38 36 q8 -6 16 2" fill="none" stroke="#37372F" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M102 42 q8 8 16 0" fill="none" stroke="#37372F" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M172 44 C 150 28, 158 10, 172 22 C 186 10, 194 28, 172 44 Z" fill="none" stroke="#37372F" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
          <span className={overline}>{data.hero.eyebrow}</span>
          <h1 className="m-0 font-light text-[clamp(2.5rem,6vw,4.8rem)] leading-[1.04] tracking-[-0.025em]">
            {data.hero.titleStart}
            <span className="text-[#6F887A]">{data.hero.titleAccent}</span>
            {data.hero.titleEnd}
          </h1>
          <p className="m-0 max-w-[680px] text-[clamp(17px,1.6vw,19px)] leading-[1.7] text-[#605F58]">{data.hero.description}</p>
          <div className="flex flex-wrap justify-center gap-3 mt-1.5">
            <a
              href={data.hero.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-12 px-[26px] rounded-full bg-[#6F887A] text-white font-semibold no-underline"
            >
              {data.hero.websiteCta} ↗
            </a>
            <a href="#umsetzung" className="inline-flex items-center min-h-12 px-[26px] rounded-full border border-[#4C5D53] text-[#4C5D53] font-semibold no-underline">
              {data.hero.detailsCta}
            </a>
          </div>
        </div>
      </header>

      <section className={sectionX}>
        <div className="max-w-[1120px] mx-auto rounded-3xl overflow-hidden bg-[#FFFDF8] border border-[#E8E3D7] shadow-[0_30px_80px_rgba(55,55,47,.10)]">
          <div className="flex items-center gap-[7px] px-[18px] py-3.5 bg-[#F6F3EC] border-b border-[#E8E3D7]">
            {[0, 1, 2].map((dot) => (
              <span key={dot} className="size-2.5 rounded-full bg-[#D9D4C7]" />
            ))}
            <span className="ml-3 px-4 py-1 rounded-full bg-[#FFFDF8] text-xs text-[#6A6960]">{data.domain}</span>
          </div>
          <Image
            src="/images/portfolio/case-herzhirnhumor.jpg"
            alt={data.screenshotAlt}
            width={800}
            height={500}
            priority
            sizes="(min-width: 1248px) 1120px, 100vw"
            className="block w-full h-auto"
          />
        </div>
      </section>

      <section className={`${sectionX} pt-[clamp(48px,6vw,72px)]`}>
        <div className="max-w-[1120px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3">
          {data.facts.map((fact) => (
            <div key={fact.label} className="bg-[#FFFDF8] rounded-[18px] px-[22px] py-5 flex flex-col gap-1.5">
              <span className="text-[11px] font-semibold tracking-[.14em] uppercase text-[#5F7468]">{fact.label}</span>
              <span className="font-medium">{fact.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`${sectionX} pt-[clamp(88px,10vw,128px)]`}>
        <div className="max-w-[820px] mx-auto flex flex-col items-center text-center gap-5">
          <span className={overline}>{data.challenge.label}</span>
          <h2 className="m-0 font-light text-[clamp(2rem,3.8vw,3rem)] leading-[1.12] tracking-[-0.02em]">{data.challenge.title}</h2>
          <p className="m-0 text-lg leading-[1.75] text-[#605F58]">{data.challenge.description}</p>
        </div>
      </section>

      <section id="umsetzung" className={`${sectionX} py-[clamp(72px,8vw,104px)]`}>
        <div className="max-w-[1120px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col items-center text-center gap-3.5">
            <span className={overline}>{data.work.label}</span>
            <h2 className="m-0 font-light text-[clamp(2rem,3.8vw,3rem)] leading-[1.1] tracking-[-0.02em]">{data.work.title}</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
            {data.work.items.map((item, i) => (
              <article
                key={item.title}
                className="bg-[#FFFDF8] rounded-3xl p-8 flex flex-col gap-3.5 transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(55,55,47,.08)]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-9" fill="none" stroke="#6F887A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {workIcons[i]}
                </svg>
                <h3 className="m-0 font-normal text-2xl">{item.title}</h3>
                <p className="m-0 text-[15px] leading-[1.7] text-[#605F58]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {data.quote && (
        <section className={`${sectionX} pb-[clamp(80px,10vw,120px)]`}>
          <div className="max-w-[1120px] mx-auto bg-[#E6ECE8] rounded-[32px] p-[clamp(36px,6vw,72px)] flex flex-col items-center text-center gap-5">
            <span aria-hidden="true" className={`${display} text-[64px] font-light leading-[.6] text-[#6F887A]`}>“</span>
            <blockquote className={`m-0 max-w-[760px] ${display} font-light text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.35]`}>{data.quote.text}</blockquote>
            <span className="text-sm font-semibold text-[#4C5D53]">{data.quote.author}</span>
          </div>
        </section>
      )}

      <section className={`${sectionX} pb-[clamp(72px,8vw,104px)]`}>
        <div className="max-w-[1120px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-4">
          <Link href={`${caseStudiesUrl}/camp-currie`} locale={locale} className="flex flex-col gap-2.5 p-8 rounded-3xl bg-[#FFFDF8] no-underline text-[#37372F]">
            <span className="text-xs font-semibold tracking-[.14em] uppercase text-[#5F7468]">{data.next.label} →</span>
            <span className={`${display} text-[28px] font-normal`}>{data.next.title}</span>
          </Link>
          <Link href="/#contact" locale={locale} className="flex flex-col gap-2.5 p-8 rounded-3xl bg-[#4C5D53] no-underline text-white">
            <span className="text-xs font-semibold tracking-[.14em] uppercase text-[#E6ECE8]">{data.contact.label}</span>
            <span className={`${display} text-[28px] font-normal`}>{data.contact.title} →</span>
          </Link>
        </div>
      </section>
    </CaseStudyShell>
  );
}
