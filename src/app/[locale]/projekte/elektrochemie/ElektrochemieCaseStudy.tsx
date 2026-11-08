import CaseStudyShell, { CaseStudyNav } from "../components/CaseStudyShell";
import { ElektrochemieCaseStudyData } from "../data/case-studies-types";
import { funnelDisplay, funnelSans, jetBrainsMono } from "./elektrochemie-fonts";
import { mono } from "./elektrochemie-styles";
import ElektrochemieFactsSection from "./sections/ElektrochemieFactsSection";
import ElektrochemieHeroSection from "./sections/ElektrochemieHeroSection";
import ElektrochemieIntroSection from "./sections/ElektrochemieIntroSection";
import ElektrochemieNextSection from "./sections/ElektrochemieNextSection";
import ElektrochemieResultSection from "./sections/ElektrochemieResultSection";
import ElektrochemieScreenshotSection from "./sections/ElektrochemieScreenshotSection";
import ElektrochemieWorkSection from "./sections/ElektrochemieWorkSection";

interface ElektrochemieCaseStudyProps {
  data: ElektrochemieCaseStudyData;
  locale: string;
}

export default function ElektrochemieCaseStudy({ data, locale }: ElektrochemieCaseStudyProps) {
  return (
    <CaseStudyShell
      locale={locale}
      className={`${funnelDisplay.variable} ${funnelSans.variable} ${jetBrainsMono.variable} font-(family-name:--cs-body) text-[#0E2340] bg-[#F4F6F9]`}
    >
      <CaseStudyNav
        locale={locale}
        nav={data.nav}
        className={`bg-[#0E2340] text-white text-[13px] ${mono}`}
        backClassName="text-white"
        labelClassName="text-[#70C3D8]"
      />
      <ElektrochemieHeroSection hero={data.hero} />
      <ElektrochemieFactsSection facts={data.facts} />
      <ElektrochemieIntroSection intro={data.intro} />
      <ElektrochemieScreenshotSection domain={data.domain} screenshotAlt={data.screenshotAlt} />
      <ElektrochemieWorkSection work={data.work} />
      <ElektrochemieResultSection result={data.result} quote={data.quote} />
      <ElektrochemieNextSection next={data.next} contact={data.contact} locale={locale} />
    </CaseStudyShell>
  );
}
