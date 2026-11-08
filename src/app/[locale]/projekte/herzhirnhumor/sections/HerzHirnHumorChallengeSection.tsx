import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { HerzHirnHumorCaseStudyData } from "../../data/case-studies-types";
import { overline } from "../herzhirnhumor-styles";

export default function HerzHirnHumorChallengeSection({ challenge }: { challenge: HerzHirnHumorCaseStudyData["challenge"] }) {
  return (
    <section className={`${sectionX} pt-[clamp(88px,10vw,128px)]`}>
      <div className="max-w-[820px] mx-auto flex flex-col items-center text-center gap-5">
        <span className={overline}>{challenge.label}</span>
        <h2 className="m-0 font-light text-[clamp(2rem,3.8vw,3rem)] leading-[1.12] tracking-[-0.02em]">{challenge.title}</h2>
        <p className="m-0 text-lg leading-[1.75] text-[#605F58]">{challenge.description}</p>
      </div>
    </section>
  );
}
