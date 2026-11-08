import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { ElektrochemieCaseStudyData } from "../../data/case-studies-types";
import { mono, sectionHeading } from "../elektrochemie-styles";

export default function ElektrochemieIntroSection({ intro }: { intro: ElektrochemieCaseStudyData["intro"] }) {
  return (
    <section className={`${sectionX} pt-[clamp(80px,10vw,128px)]`}>
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[clamp(32px,6vw,96px)]">
        <div className="flex flex-col gap-4">
          <span className={`${mono} text-[13px] text-[#765F95]`}>{intro.label}</span>
          <h2 className={sectionHeading}>{intro.title}</h2>
        </div>
        <div className="flex flex-col gap-[18px] text-[17px] leading-[1.7] text-[#33465E]">
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
