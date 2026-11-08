import Image from "next/image";
import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { ElektrochemieCaseStudyData } from "../../data/case-studies-types";
import { mono } from "../elektrochemie-styles";

export default function ElektrochemieHeroSection({ hero }: { hero: ElektrochemieCaseStudyData["hero"] }) {
  return (
    <header className="relative overflow-hidden bg-[#0E2340] text-white">
      <Image src="/images/portfolio/case-egm.jpg" alt="" aria-hidden="true" fill priority sizes="100vw" className="object-cover opacity-55" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,35,64,.35)_0%,rgba(14,35,64,.92)_100%)]" />
      <div className={`relative max-w-[1240px] mx-auto ${sectionX} pt-[clamp(96px,12vw,168px)] pb-[clamp(64px,8vw,104px)] flex flex-col gap-6`}>
        <span className={`${mono} text-[13px] tracking-[.12em] uppercase text-[#70C3D8]`}>{hero.eyebrow}</span>
        <h1 className="m-0 max-w-[920px] font-semibold text-[clamp(2.6rem,6.4vw,5.4rem)] leading-[.98] tracking-[-0.035em]">{hero.title}</h1>
        <p className="m-0 max-w-[680px] text-[clamp(17px,1.6vw,20px)] leading-[1.6] text-white/85">{hero.description}</p>
        <div className="flex flex-wrap gap-3 mt-2">
          <a
            href={hero.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center min-h-12 px-6 rounded-[10px] bg-white text-[#0E2340] font-semibold no-underline"
          >
            {hero.websiteCta} ↗
          </a>
          <a href="#umsetzung" className="inline-flex items-center min-h-12 px-6 rounded-[10px] border border-white/40 text-white font-medium no-underline">
            {hero.detailsCta} ↓
          </a>
        </div>
      </div>
    </header>
  );
}
