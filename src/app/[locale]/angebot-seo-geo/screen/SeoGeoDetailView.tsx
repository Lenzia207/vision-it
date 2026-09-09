
import { AngebotArea } from "../../home/sections/data/types/home-types";
import { AngebotSeoGeoData } from "../data/seo-geo-types";
import SeoGeoDetailUI from "./SeoGeoDetailUI";


interface SeoGeoDetailViewProps {
  seoGeoPage: AngebotSeoGeoData;
  area: AngebotArea;
  locale: string;
}

export default function SeoGeoDetailView({ seoGeoPage, area, locale }: SeoGeoDetailViewProps) {
  return (
    <SeoGeoDetailUI
      hero={seoGeoPage.hero}
      situation={seoGeoPage.situation}
      audit={seoGeoPage.audit}
      findings={seoGeoPage.findings}
      prioritization={seoGeoPage.prioritization}
      roadmap={seoGeoPage.roadmap}
      collaboration={seoGeoPage.collaboration}
      monitoring={seoGeoPage.monitoring}
      geo={seoGeoPage.geo}
      servicesTitle={seoGeoPage.servicesTitle}
      servicesDescription={seoGeoPage.servicesDescription}
      // services={area.services}
      faq={seoGeoPage.faq}
      processLabel={area.processLabel}
      ctaLabel={seoGeoPage.ctaLabel}
      process={area.process}
      locale={locale}
    />
  );
}
