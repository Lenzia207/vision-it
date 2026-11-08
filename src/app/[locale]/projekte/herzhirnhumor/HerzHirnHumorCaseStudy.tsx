import CaseStudyShell, { CaseStudyNav } from "../components/CaseStudyShell";
import { HerzHirnHumorCaseStudyData } from "../data/case-studies-types";
import { figtree, hankenGrotesk } from "./herzhirnhumor-fonts";
import HerzHirnHumorChallengeSection from "./sections/HerzHirnHumorChallengeSection";
import HerzHirnHumorFactsSection from "./sections/HerzHirnHumorFactsSection";
import HerzHirnHumorHeroSection from "./sections/HerzHirnHumorHeroSection";
import HerzHirnHumorNextSection from "./sections/HerzHirnHumorNextSection";
import HerzHirnHumorQuoteSection from "./sections/HerzHirnHumorQuoteSection";
import HerzHirnHumorScreenshotSection from "./sections/HerzHirnHumorScreenshotSection";
import HerzHirnHumorWorkSection from "./sections/HerzHirnHumorWorkSection";

interface HerzHirnHumorCaseStudyProps {
  data: HerzHirnHumorCaseStudyData;
  locale: string;
}

export default function HerzHirnHumorCaseStudy({ data, locale }: HerzHirnHumorCaseStudyProps) {
  return (
    <CaseStudyShell
      locale={locale}
      className={`${figtree.variable} ${hankenGrotesk.variable} font-(family-name:--cs-body) text-[#37372F] bg-[#F6F3EC]`}
    >
      <CaseStudyNav
        locale={locale}
        nav={data.nav}
        className="bg-[#FFFDF8] border-b border-[#E8E3D7] text-sm"
        backClassName="font-medium text-[#4C5D53]"
        labelClassName="text-xs font-semibold tracking-[.14em] uppercase text-[#5F7468]"
      />
      <HerzHirnHumorHeroSection hero={data.hero} />
      <HerzHirnHumorScreenshotSection domain={data.domain} screenshotAlt={data.screenshotAlt} />
      <HerzHirnHumorFactsSection facts={data.facts} />
      <HerzHirnHumorChallengeSection challenge={data.challenge} />
      <HerzHirnHumorWorkSection work={data.work} />
      {data.quote && <HerzHirnHumorQuoteSection quote={data.quote} />}
      <HerzHirnHumorNextSection next={data.next} contact={data.contact} locale={locale} />
    </CaseStudyShell>
  );
}
