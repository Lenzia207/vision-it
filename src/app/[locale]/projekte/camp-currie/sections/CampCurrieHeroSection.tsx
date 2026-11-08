import Image from "next/image";
import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { CampCurrieCaseStudyData } from "../../data/case-studies-types";
import { hand } from "../camp-currie-styles";

export default function CampCurrieHeroSection({ hero }: { hero: CampCurrieCaseStudyData["hero"] }) {
  return (
    <header className="relative overflow-hidden text-white bg-[#2F6FA8] opacity-[.94]">
      <Image src="/images/portfolio/case-camp-currie.jpg" alt="" aria-hidden="true" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000DB_0%,#00000076_100%)]" />
      <div className={`relative max-w-[1100px] mx-auto ${sectionX} pt-[clamp(96px,12vw,170px)] pb-[clamp(88px,11vw,150px)] flex flex-col items-center text-center gap-[22px]`}>
        <span className={`${hand} text-[clamp(22px,2.4vw,30px)]`}>{hero.eyebrow}</span>
        <h1 className="m-0 font-normal uppercase text-[clamp(2.8rem,7vw,6rem)] leading-none tracking-[.01em] [text-shadow:0_4px_24px_rgba(0,0,0,.25)]">
          {hero.title}
        </h1>
        <svg aria-hidden="true" viewBox="0 0 400 30" className="w-[min(360px,70%)] h-[26px]">
          <path d="M4 6 L200 26 L396 6" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="m-0 max-w-[760px] font-(family-name:--cs-hand)! text-[clamp(26px,3vw,40px)] leading-[1.3] [text-shadow:0_2px_12px_rgba(0,0,0,.3)]">
          {hero.description}
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-2.5">
          <a
            href={hero.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center min-h-[50px] px-7 rounded-full bg-[#5D735F] text-white font-semibold no-underline"
          >
            {hero.websiteCta} ↗
          </a>
          <a href="#umsetzung" className="inline-flex items-center min-h-[50px] px-7 rounded-full bg-white/90 text-[#171717] font-semibold no-underline">
            {hero.detailsCta}
          </a>
        </div>
      </div>
    </header>
  );
}
