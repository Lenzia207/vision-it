import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { HerzHirnHumorCaseStudyData } from "../../data/case-studies-types";
import { overline } from "../herzhirnhumor-styles";
import { HeroIllustration, HeroWaves } from "../illustrations";

export default function HerzHirnHumorHeroSection({ hero }: { hero: HerzHirnHumorCaseStudyData["hero"] }) {
  return (
    <header className={`relative overflow-hidden ${sectionX} pt-[clamp(88px,11vw,150px)] pb-[clamp(56px,7vw,88px)]`}>
      <HeroWaves />
      <div className="relative max-w-[960px] mx-auto flex flex-col items-center text-center gap-[22px]">
        <HeroIllustration label={hero.illustrationLabel} />
        <span className={overline}>{hero.eyebrow}</span>
        <h1 className="m-0 font-light text-[clamp(2.5rem,6vw,4.8rem)] leading-[1.04] tracking-[-0.025em]">
          {hero.titleStart}
          <span className="text-[#6F887A]">{hero.titleAccent}</span>
          {hero.titleEnd}
        </h1>
        <p className="m-0 max-w-[680px] text-[clamp(17px,1.6vw,19px)] leading-[1.7] text-[#605F58]">{hero.description}</p>
        <div className="flex flex-wrap justify-center gap-3 mt-1.5">
          <a
            href={hero.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center min-h-12 px-[26px] rounded-full bg-[#6F887A] text-white font-semibold no-underline"
          >
            {hero.websiteCta} ↗
          </a>
          <a href="#umsetzung" className="inline-flex items-center min-h-12 px-[26px] rounded-full border border-[#4C5D53] text-[#4C5D53] font-semibold no-underline">
            {hero.detailsCta}
          </a>
        </div>
      </div>
    </header>
  );
}
