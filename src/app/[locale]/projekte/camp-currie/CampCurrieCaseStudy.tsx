import CaseStudyShell, { CaseStudyNav } from "../components/CaseStudyShell";
import { CampCurrieCaseStudyData } from "../data/case-studies-types";
import { annie, anton, robotoFlex } from "./camp-currie-fonts";
import { display } from "./camp-currie-styles";
import CampCurrieFactsSection from "./sections/CampCurrieFactsSection";
import CampCurrieHeroSection from "./sections/CampCurrieHeroSection";
import CampCurrieIntroSection from "./sections/CampCurrieIntroSection";
import CampCurrieNextSection from "./sections/CampCurrieNextSection";
import CampCurrieQuoteSection from "./sections/CampCurrieQuoteSection";
import CampCurrieScreenshotSection from "./sections/CampCurrieScreenshotSection";
import CampCurrieWorkSection from "./sections/CampCurrieWorkSection";

interface CampCurrieCaseStudyProps {
  data: CampCurrieCaseStudyData;
  locale: string;
}

export default function CampCurrieCaseStudy({ data, locale }: CampCurrieCaseStudyProps) {
  return (
    <CaseStudyShell
      locale={locale}
      className={`${anton.variable} ${annie.variable} ${robotoFlex.variable} font-(family-name:--cs-body) text-[#171717] bg-[#F8F7F3]`}
    >
      <CaseStudyNav
        locale={locale}
        nav={data.nav}
        className="bg-white text-sm"
        backClassName="font-semibold text-[#171717]"
        labelClassName={`${display} tracking-[.04em] text-[#5D735F]`}
      />
      <CampCurrieHeroSection hero={data.hero} />
      <CampCurrieFactsSection facts={data.facts} />
      <CampCurrieIntroSection intro={data.intro} />
      <CampCurrieScreenshotSection domain={data.domain} screenshotAlt={data.screenshotAlt} />
      <CampCurrieWorkSection work={data.work} />
      {data.quote && <CampCurrieQuoteSection quote={data.quote} />}
      <CampCurrieNextSection next={data.next} contact={data.contact} locale={locale} />
    </CaseStudyShell>
  );
}
