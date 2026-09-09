import { AngebotProcessStep } from "../../home/sections/data/types/home-types";
import SeoGeoFaqSection from "../sections/SeoGeoFaqSection";
import SeoGeoHeroSection from "../sections/SeoGeoHeroSection";
import SeoGeoSituationSection from "../sections/SeoGeoSituationSection";
import SeoGeoAuditSection from "../sections/SeoGeoAuditSection";
import SeoGeoFindingsSection from "../sections/SeoGeoFindingsSection";
import SeoGeoPrioritizationSection from "../sections/SeoGeoPrioritizationSection";
import SeoGeoRoadmapSection from "../sections/SeoGeoRoadmapSection";
import SeoGeoCollaborationSection from "../sections/SeoGeoCollaborationSection";
import SeoGeoMonitoringSection from "../sections/SeoGeoMonitoringSection";
import SeoGeoGeoSection from "../sections/SeoGeoGeoSection";
import SeoGeoFinalCtaSection from "../sections/SeoGeoFinalCtaSection";
import { AngebotSeoFaqData, AngebotSeoGeoAuditData, AngebotSeoGeoCollaborationData, AngebotSeoGeoFindingsData, AngebotSeoGeoFinalCtaData, AngebotSeoGeoGeoData, AngebotSeoGeoHeroData, AngebotSeoGeoMonitoringData, AngebotSeoGeoPrioritizationData, AngebotSeoGeoRoadmapData, AngebotSeoGeoSituationData } from "../data/seo-geo-types";


interface SeoGeoDetailUIProps {
  hero: AngebotSeoGeoHeroData;
  situation: AngebotSeoGeoSituationData;
  audit: AngebotSeoGeoAuditData;
  findings: AngebotSeoGeoFindingsData;
  prioritization: AngebotSeoGeoPrioritizationData;
  roadmap: AngebotSeoGeoRoadmapData;
  collaboration: AngebotSeoGeoCollaborationData;
  monitoring: AngebotSeoGeoMonitoringData;
  geo: AngebotSeoGeoGeoData;
  finalCta: AngebotSeoGeoFinalCtaData;
  servicesTitle: string;
  servicesDescription?: string;
  processLabel: string;
  ctaLabel: string;
  // services: AngebotWebsiteService[];
  faq: AngebotSeoFaqData;
  process: AngebotProcessStep[];
  locale: string;
}

export default function SeoGeoDetailUI({ hero, situation, audit, findings, prioritization, roadmap, collaboration, monitoring, geo, finalCta, faq, servicesTitle, servicesDescription, processLabel, ctaLabel, // services,
  process, locale }: SeoGeoDetailUIProps) {
  return (
    <>
      <SeoGeoHeroSection hero={hero} />

      <SeoGeoSituationSection situation={situation} />

      <SeoGeoAuditSection audit={audit} />
      <SeoGeoFinalCtaSection finalCta={finalCta} locale={locale} />

      <SeoGeoFindingsSection findings={findings} />

      <SeoGeoPrioritizationSection prioritization={prioritization} />

      <SeoGeoRoadmapSection roadmap={roadmap} />

      <SeoGeoMonitoringSection monitoring={monitoring} />

      <SeoGeoGeoSection geo={geo} />

      <SeoGeoCollaborationSection collaboration={collaboration} locale={locale} />

      <SeoGeoFaqSection faq={faq} locale={locale} />


      {/* <WebsiteServiceSection servicesTitle={servicesTitle} servicesDescription={servicesDescription} services={services} ctaLabel={ctaLabel} locale={locale} /> */}
      {/* Website Pakete in white BG */}

      {/* <Link href="/#contact" locale={locale} className="btn btn-primary">
            {linkLabel}
          </Link> */}


      {/* <WebsiteProcessSection processLabel={processLabel} process={process} /> */}
    </>
  );
}
