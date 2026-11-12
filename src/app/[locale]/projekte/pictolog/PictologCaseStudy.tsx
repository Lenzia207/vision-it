import CaseStudyShell, { CaseStudyNav } from "../components/CaseStudyShell";
import { PictologCaseStudyData } from "../data/case-studies-types";
import { istokWeb } from "./pictolog-font";
import PictologFactsSection from "./sections/PictologFactsSection";
import PictologFeaturesSection from "./sections/PictologFeaturesSection";
import PictologHeroSection from "./sections/PictologHeroSection";
import PictologIdeaSection from "./sections/PictologIdeaSection";
import PictologNextSection from "./sections/PictologNextSection";
import PictologStepsSection from "./sections/PictologStepsSection";

interface PictologCaseStudyProps {
  data: PictologCaseStudyData;
  locale: string;
}

export default function PictologCaseStudy({ data, locale }: PictologCaseStudyProps) {
  return (
    <CaseStudyShell locale={locale} className={`${istokWeb.variable} font-(family-name:--cs-body) text-black bg-[#F2F4F5]`}>
      <CaseStudyNav
        locale={locale}
        nav={data.nav}
        className="bg-white border-b border-black/5 text-sm"
        backClassName="font-bold text-black"
        labelClassName="text-[#686D74]"
      />
      <PictologHeroSection hero={data.hero} mock={data.mock} locale={locale} />
      <PictologFactsSection facts={data.facts} />
      <PictologIdeaSection idea={data.idea} />
      <PictologStepsSection steps={data.steps} />
      <PictologFeaturesSection features={data.features} />
      <PictologNextSection next={data.next} contact={data.contact} locale={locale} />
    </CaseStudyShell>
  );
}
