import { SplitnCaseStudyData } from "../../data/case-studies-types";
import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { overline } from "../splitn-styles";

export default function SplitnIdeaSection({ idea }: { idea: SplitnCaseStudyData["idea"] }) {
  return (
    <section className={`${sectionX} pt-[clamp(88px,10vw,128px)]`}>
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[clamp(32px,6vw,96px)]">
        <div className="flex flex-col gap-3.5">
          <span className={overline}>{idea.label}</span>
          <h2 className="m-0 font-extrabold text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.08] tracking-[-0.02em]">{idea.title}</h2>
        </div>
        <div className="flex flex-col gap-[18px] text-[17px] leading-[1.7] text-[#4A4036]">
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
