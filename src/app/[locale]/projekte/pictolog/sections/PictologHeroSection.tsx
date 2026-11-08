import Image from "next/image";
import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { PictologCaseStudyData } from "../../data/case-studies-types";
import PreviewPhone from "../mockups/PreviewPhone";
import ProjectPhone from "../mockups/ProjectPhone";

interface PictologHeroSectionProps {
  hero: PictologCaseStudyData["hero"];
  mock: PictologCaseStudyData["mock"];
}

export default function PictologHeroSection({ hero, mock }: PictologHeroSectionProps) {
  return (
    <header className={`${sectionX} pt-[clamp(72px,9vw,120px)] pb-[clamp(56px,7vw,88px)]`}>
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-[clamp(40px,6vw,80px)] items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3.5">
            <Image src="/images/portfolio/icon-pictolog.png" alt={hero.iconAlt} width={64} height={64} priority className="size-16" />
            <span className="text-xl font-bold">{hero.appName}</span>
          </div>
          <h1 className="m-0 font-bold text-[clamp(2.6rem,5.6vw,4.6rem)] leading-[1.02] tracking-[-0.03em]">
            {hero.titleStart}
            <span className="bg-[#C0E859] px-[.12em]">{hero.titleAccent}</span>
          </h1>
          <p className="m-0 max-w-[540px] text-[19px] leading-[1.6] text-[#3A3E43]">{hero.description}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={hero.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[50px] px-[26px] rounded-[14px] bg-black text-white font-bold no-underline"
            >
              {hero.storeCta} ↗
            </a>
            <a href="#features" className="inline-flex items-center min-h-[50px] px-[26px] rounded-[14px] bg-white border border-[#C4C8CC] text-black font-bold no-underline">
              {hero.featuresCta}
            </a>
          </div>
        </div>
        <div className="flex justify-center items-end gap-5">
          <ProjectPhone mock={mock} />
          <PreviewPhone mock={mock} />
        </div>
      </div>
    </header>
  );
}
