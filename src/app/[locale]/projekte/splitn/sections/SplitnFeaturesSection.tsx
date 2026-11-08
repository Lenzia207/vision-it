import { Fragment } from "react";
import { SplitnCaseStudyData } from "../../data/case-studies-types";
import { caseStudySectionX as sectionX } from "../../components/case-study-styles";
import { overline } from "../splitn-styles";

interface SplitnFeaturesSectionProps {
  features: SplitnCaseStudyData["features"];
  architecture: SplitnCaseStudyData["architecture"];
}

function FeatureList({ features }: { features: SplitnCaseStudyData["features"] }) {
  return (
    <div className="flex flex-col gap-5">
      <span className={overline}>{features.label}</span>
      <ul className="m-0 p-0 list-none flex flex-col border-t border-[#181411]/12">
        {features.items.map((feature, i) => (
          <li key={feature.title} className="py-4 border-b border-[#181411]/12 flex gap-4">
            <b className="text-[#9A6510] min-w-7">{String(i + 1).padStart(2, "0")}</b>
            <span>
              <b>{feature.title}</b>
              <br />
              <span className="text-[#4A4036] text-[15px]">{feature.description}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArchitectureDiagram({ architecture }: { architecture: SplitnCaseStudyData["architecture"] }) {
  return (
    <div className="flex flex-col gap-5">
      <span className={overline}>{architecture.label}</span>
      <div className="bg-[#F8F7F6] rounded-3xl p-7 flex flex-col gap-3">
        {architecture.nodes.map((node, i) => (
          <Fragment key={node.title}>
            {i > 0 && (
              <span aria-hidden="true" className="text-center text-[#9A6510]">
                {"↓"}
              </span>
            )}
            <div className="bg-white border border-[#EFAC39]/50 rounded-[14px] p-4">
              <b>{node.title}</b>
              <br />
              <span className="text-sm text-[#4A4036]">{node.description}</span>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default function SplitnFeaturesSection({ features, architecture }: SplitnFeaturesSectionProps) {
  return (
    <section className={`${sectionX} pb-[clamp(88px,10vw,128px)]`}>
      <div className="max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-[clamp(32px,5vw,64px)]">
        <FeatureList features={features} />
        <ArchitectureDiagram architecture={architecture} />
      </div>
    </section>
  );
}
