import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { PictologCaseStudyData } from "../../data/case-studies-types";
import { overline, sectionHeading } from "../pictolog-styles";

export default function PictologFeaturesSection({ features }: { features: PictologCaseStudyData["features"] }) {
  return (
    <section id="features" className={`${sectionX} pb-[clamp(88px,10vw,128px)]`}>
      <div className="max-w-[1240px] mx-auto flex flex-col gap-9">
        <div className="flex flex-col gap-3.5 max-w-[720px]">
          <span className={overline}>{features.label}</span>
          <h2 className={sectionHeading}>{features.title}</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,270px),1fr))] gap-3">
          {features.items.map((feature) => (
            <div key={feature.title} className="bg-white rounded-[20px] p-[26px] flex flex-col gap-2.5">
              <b className="text-[17px]">{feature.title}</b>
              <span className="text-sm leading-[1.6] text-[#3A3E43]">{feature.description}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {features.stack.map((tech) => (
            <span key={tech} className="rounded-full bg-black text-white px-3.5 py-[7px] text-[13px]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
