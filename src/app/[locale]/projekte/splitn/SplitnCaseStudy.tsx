import CaseStudyShell, { CaseStudyNav } from "../components/CaseStudyShell";
import { SplitnCaseStudyData } from "../data/case-studies-types";
import SplitnFactsSection from "./sections/SplitnFactsSection";
import SplitnFeaturesSection from "./sections/SplitnFeaturesSection";
import SplitnHeroSection from "./sections/SplitnHeroSection";
import SplitnIdeaSection from "./sections/SplitnIdeaSection";
import SplitnNextSection from "./sections/SplitnNextSection";
import SplitnSplitsSection from "./sections/SplitnSplitsSection";
import { plusJakartaSans } from "./splitn-font";

interface SplitnCaseStudyProps {
  data: SplitnCaseStudyData;
  locale: string;
}

export default function SplitnCaseStudy({ data, locale }: SplitnCaseStudyProps) {
  return (
    <CaseStudyShell locale={locale} className={`${plusJakartaSans.variable} font-(family-name:--cs-body) text-[#181411] bg-white`}>
      <CaseStudyNav
        locale={locale}
        nav={data.nav}
        className="bg-[#F8F7F6] border-b border-[#181411]/8 text-sm"
        backClassName="font-semibold text-[#181411]"
        labelClassName="text-[#6E5C49]"
      />
      <SplitnHeroSection hero={data.hero} mock={data.mock} locale={locale} />
      <SplitnFactsSection facts={data.facts} />
      <SplitnIdeaSection idea={data.idea} />
      <SplitnSplitsSection splits={data.splits} />
      <SplitnFeaturesSection features={data.features} architecture={data.architecture} />
      <SplitnNextSection next={data.next} contact={data.contact} locale={locale} />
    </CaseStudyShell>
  );
}
