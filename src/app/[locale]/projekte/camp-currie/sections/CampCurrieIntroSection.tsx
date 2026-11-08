import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { CampCurrieCaseStudyData } from "../../data/case-studies-types";
import { hand, sectionHeading } from "../camp-currie-styles";

export default function CampCurrieIntroSection({ intro }: { intro: CampCurrieCaseStudyData["intro"] }) {
  return (
    <section className={`${sectionX} pt-[clamp(88px,10vw,128px)]`}>
      <div className="max-w-[1180px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[clamp(32px,6vw,96px)]">
        <div className="flex flex-col gap-2.5">
          <span className={`${hand} text-[28px] text-[#5D735F]`}>{intro.label}</span>
          <h2 className={sectionHeading}>{intro.title}</h2>
        </div>
        <div className="flex flex-col gap-[18px] text-[17px] leading-[1.75] text-[#3A3A3A]">
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph} className="m-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
