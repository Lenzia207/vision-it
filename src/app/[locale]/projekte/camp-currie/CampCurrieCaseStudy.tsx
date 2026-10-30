import Image from "next/image";
import { Annie_Use_Your_Telescope, Anton, Roboto_Flex } from "next/font/google";
import { Link } from "@/app/i18n/routing";
import { caseStudiesUrl } from "@/app/configs/configs";
import CaseStudyShell, { CaseStudyNav } from "../components/CaseStudyShell";
import { CampCurrieCaseStudyData } from "../data/case-studies-types";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--cs-display", display: "swap" });
const annie = Annie_Use_Your_Telescope({ subsets: ["latin"], weight: "400", variable: "--cs-hand", display: "swap" });
const robotoFlex = Roboto_Flex({ subsets: ["latin"], variable: "--cs-body", display: "swap" });

const display = "font-(family-name:--cs-display)";
const hand = "font-(family-name:--cs-hand)";
const sectionX = "px-[clamp(20px,5vw,64px)]";
const sectionHeading = "m-0 font-normal uppercase text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.05]";

interface CampCurrieCaseStudyProps {
  data: CampCurrieCaseStudyData;
  locale: string;
}

export default function CampCurrieCaseStudy({ data, locale }: CampCurrieCaseStudyProps) {
  return (
    <CaseStudyShell
      locale={locale}
      className={`${anton.variable} ${annie.variable} ${robotoFlex.variable} font-(family-name:--cs-body) text-[#171717] bg-[#F8F7F3]`}
    >
      <CaseStudyNav
        locale={locale}
        nav={data.nav}
        className="bg-white text-sm"
        backClassName="font-semibold text-[#171717]"
        labelClassName={`${display} tracking-[.04em] text-[#5D735F]`}
      />

      <header className="relative overflow-hidden text-white bg-[#2F6FA8] opacity-[.94]">
        <Image src="/images/portfolio/case-camp-currie.jpg" alt="" aria-hidden="true" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000DB_0%,#00000076_100%)]" />
        <div className={`relative max-w-[1100px] mx-auto ${sectionX} pt-[clamp(96px,12vw,170px)] pb-[clamp(88px,11vw,150px)] flex flex-col items-center text-center gap-[22px]`}>
          <span className={`${hand} text-[clamp(22px,2.4vw,30px)]`}>{data.hero.eyebrow}</span>
          <h1 className="m-0 font-normal uppercase text-[clamp(2.8rem,7vw,6rem)] leading-none tracking-[.01em] [text-shadow:0_4px_24px_rgba(0,0,0,.25)]">
            {data.hero.title}
          </h1>
          <svg aria-hidden="true" viewBox="0 0 400 30" className="w-[min(360px,70%)] h-[26px]">
            <path d="M4 6 L200 26 L396 6" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className={`m-0 max-w-[760px] font-(family-name:--cs-hand)! text-[clamp(26px,3vw,40px)] leading-[1.3] [text-shadow:0_2px_12px_rgba(0,0,0,.3)]`}>
            {data.hero.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-2.5">
            <a
              href={data.hero.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[50px] px-7 rounded-full bg-[#5D735F] text-white font-semibold no-underline"
            >
              {data.hero.websiteCta} ↗
            </a>
            <a href="#umsetzung" className="inline-flex items-center min-h-[50px] px-7 rounded-full bg-white/90 text-[#171717] font-semibold no-underline">
              {data.hero.detailsCta}
            </a>
          </div>
        </div>
      </header>

      <section className={sectionX}>
        <div className="relative max-w-[1180px] mx-auto -mt-10 grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-3">
          {data.facts.map((fact) => (
            <div key={fact.label} className="bg-white rounded-2xl px-[22px] py-5 flex flex-col gap-1.5 shadow-[0_10px_30px_rgba(23,23,23,.08)]">
              <span className={`${display} text-[13px] tracking-[.06em] text-[#5D735F]`}>{fact.label}</span>
              <span className="font-medium">{fact.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`${sectionX} pt-[clamp(88px,10vw,128px)]`}>
        <div className="max-w-[1180px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[clamp(32px,6vw,96px)]">
          <div className="flex flex-col gap-2.5">
            <span className={`${hand} text-[28px] text-[#5D735F]`}>{data.intro.label}</span>
            <h2 className={sectionHeading}>{data.intro.title}</h2>
          </div>
          <div className="flex flex-col gap-[18px] text-[17px] leading-[1.75] text-[#3A3A3A]">
            {data.intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="m-0">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionX} py-[clamp(64px,8vw,96px)]`}>
        <div className="max-w-[1180px] mx-auto rounded-[20px] overflow-hidden bg-white shadow-[0_30px_80px_rgba(23,23,23,.14)]">
          <div className="flex items-center gap-[7px] px-4 py-3 bg-[#EFEDE6]">
            {[0, 1, 2].map((dot) => (
              <span key={dot} className="size-2.5 rounded-full bg-[#D3CFC4]" />
            ))}
            <span className="ml-3 px-3.5 py-1 rounded-full bg-white text-xs text-[#5A5A5A]">{data.domain}</span>
          </div>
          <Image
            src="/images/portfolio/case-camp-currie.jpg"
            alt={data.screenshotAlt}
            width={1600}
            height={859}
            sizes="(min-width: 1308px) 1180px, 100vw"
            className="block w-full h-auto"
          />
        </div>
      </section>

      <section id="umsetzung" className={`${sectionX} pb-[clamp(88px,10vw,128px)]`}>
        <div className="max-w-[1180px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2.5 items-center text-center">
            <span className={`${hand} text-[28px] text-[#5D735F]`}>{data.work.label}</span>
            <h2 className={sectionHeading}>{data.work.title}</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
            {data.work.items.map((item, i) => (
              <article key={item.title} className="bg-white rounded-[20px] p-[30px] flex flex-col gap-3">
                <span className={`${display} text-[40px] text-[#E5A130] leading-none`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="m-0 font-normal text-2xl uppercase">{item.title}</h3>
                <p className="m-0 text-[15px] leading-[1.7] text-[#3A3A3A]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {data.quote && (
        <section className={`${sectionX} pb-[clamp(80px,10vw,120px)]`}>
          <div className="max-w-[1180px] mx-auto bg-[#5D735F] text-white rounded-[28px] p-[clamp(36px,6vw,72px)] flex flex-col items-center text-center gap-[18px]">
            <blockquote className={`m-0 max-w-[780px] ${hand} text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.3]`}>„{data.quote.text}“</blockquote>
            <span className={`${display} tracking-[.06em] text-sm text-[#F3E3C0]`}>{data.quote.author}</span>
          </div>
        </section>
      )}

      <section className={`${sectionX} pb-[clamp(72px,8vw,104px)]`}>
        <div className="max-w-[1180px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-4">
          <Link href={`${caseStudiesUrl}/pictolog`} locale={locale} className="flex flex-col gap-2.5 p-8 rounded-[20px] bg-white no-underline text-[#171717]">
            <span className="text-[13px] text-[#5A5A5A]">{data.next.label} →</span>
            <span className={`${display} text-[28px] uppercase`}>{data.next.title}</span>
          </Link>
          <Link href="/#contact" locale={locale} className="flex flex-col gap-2.5 p-8 rounded-[20px] bg-[#E5A130] no-underline text-[#171717]">
            <span className="text-[13px] font-semibold">{data.contact.label}</span>
            <span className={`${display} text-[28px] uppercase`}>{data.contact.title} →</span>
          </Link>
        </div>
      </section>
    </CaseStudyShell>
  );
}
