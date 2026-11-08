import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { PictologCaseStudyData } from "../../data/case-studies-types";
import { overline, sectionHeading } from "../pictolog-styles";

export default function PictologIdeaSection({ idea }: { idea: PictologCaseStudyData["idea"] }) {
  return (
    <section className={`${sectionX} pt-[clamp(88px,10vw,128px)]`}>
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[clamp(32px,6vw,96px)]">
        <div className="flex flex-col gap-3.5">
          <span className={overline}>{idea.label}</span>
          <h2 className={sectionHeading}>{idea.title}</h2>
        </div>
        <div className="flex flex-col gap-[18px] text-[17px] leading-[1.7] text-[#3A3E43]">
          {idea.paragraphs.map((paragraph) => (
            <p key={paragraph} className="m-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
