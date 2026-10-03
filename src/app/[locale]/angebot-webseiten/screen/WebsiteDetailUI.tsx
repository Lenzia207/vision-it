import { AngebotProcessStep } from "../../home/sections/data/types/home-types";
import WebsiteHeroSection from "../component/WebsiteHeroSection";
import WebsiteProcessSection from "../component/WebsiteProcessSection";
import WebsiteServiceSection from "../component/WebsiteServiceSection";
import WebsiteAudienceSection from "../component/WebsiteAudienceSection";
import WebsitePricingSection from "../component/WebsitePricingSection";
import WebsiteFaqSection from "../component/WebsiteFaqSection";
import { AngebotAudienceData, AngebotWebsiteHeroData, AngebotFaqData, AngebotPricingData, AngebotWebsiteService } from "../data/website-dev-types";


interface WebsiteDetailUIProps {
  hero: AngebotWebsiteHeroData;
  title: string;
  description: string;
  servicesTitle: string;
  servicesDescription?: string;
  processLabel: string;
  ctaLabel: string;
  services: AngebotWebsiteService[];
  audience: AngebotAudienceData;
  pricing: AngebotPricingData;
  faq: AngebotFaqData;
  process: AngebotProcessStep[];
  locale: string;
}

export default function WebsiteDetailUI({ hero, title, description, servicesTitle, servicesDescription, processLabel, ctaLabel, services, audience, pricing, faq, process, locale }: WebsiteDetailUIProps) {
  return (
    <>
      <WebsiteHeroSection
        hero={hero}
        title={title}
        description={description}
        processLabel={processLabel}
        processSteps={process.map((step) => step.title)}
      />

      <WebsiteAudienceSection audience={audience} locale={locale} />
      <WebsiteServiceSection servicesTitle={servicesTitle} servicesDescription={servicesDescription} services={services} ctaLabel={ctaLabel} locale={locale} />

      <WebsitePricingSection pricing={pricing} locale={locale} />

      <WebsiteProcessSection processLabel={processLabel} process={process} />

      <WebsiteFaqSection faq={faq} locale={locale} />
    </>
  );
}
