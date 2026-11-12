import Image from "next/image";
import { SplitnCaseStudyData } from "../../data/case-studies-types";
import GroupPhone from "../mockups/GroupPhone";
import HomePhone from "../mockups/HomePhone";
import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import StoreBadges from "../../components/StoreBadges";

interface SplitnHeroSectionProps {
  hero: SplitnCaseStudyData["hero"];
  mock: SplitnCaseStudyData["mock"];
  locale: string;
}

export default function SplitnHeroSection({ hero, mock, locale }: SplitnHeroSectionProps) {
  return (
    <header className={`relative overflow-hidden ${sectionX} pt-[clamp(64px,8vw,112px)] pb-[clamp(56px,7vw,96px)]`}>
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-[clamp(40px,6vw,80px)] items-center">
        <div className="flex flex-col gap-6">
          <Image
            src="/images/portfolio/logo-splitn.png"
            alt={hero.logoAlt}
            width={240}
            height={240}
            priority
            className="w-60 h-auto -mt-10 -mb-[50px] -ml-[30px]"
          />
          <h1 className="m-0 font-extrabold italic text-[clamp(2.6rem,5.6vw,4.6rem)] leading-none tracking-[-0.03em] transform-[skewY(-3deg)] origin-left">
            {hero.titleStart}
            <span className="bg-[#EFAC39] px-[.15em]">{hero.titleAccent}</span>
          </h1>
          <p className="m-0 max-w-[540px] text-[19px] leading-[1.6] text-[#4A4036]">{hero.description}</p>
          <div className="flex flex-wrap items-center gap-3">
            <StoreBadges stores={hero.stores} locale={locale} />
            <a href="#split" className="inline-flex items-center min-h-[50px] px-[26px] rounded-[14px] border border-[#181411]/25 text-[#181411] font-semibold no-underline">
              {hero.detailsCta}
            </a>
          </div>
        </div>
        <div className="flex justify-center items-end gap-5">
          <HomePhone mock={mock.home} />
          <GroupPhone mock={mock.group} />
        </div>
      </div>
    </header>
  );
}
