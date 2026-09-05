import TitleHeader from "@/components/TitleHeader";
import { AngebotProcessStep } from "../../home/sections/data/types/home-types";
import WebsiteProcessSection from "../component/WebsiteProcessSection";
import WebsiteServiceSection from "../component/WebsiteServiceSection";
import WebsiteAudienceSection from "../component/WebsiteAudienceSection";
import WebsitePricingSection from "../component/WebsitePricingSection";
import WebsiteFaqSection from "../component/WebsiteFaqSection";
import { AngebotAudienceData, AngebotFaqData, AngebotPricingData, AngebotWebsiteService } from "../data/website-dev-types";


interface WebsiteDetailUIProps {
  badge: string;
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

export default function WebsiteDetailUI({ badge, title, description, servicesTitle, servicesDescription, processLabel, ctaLabel, services, audience, pricing, faq, process, locale }: WebsiteDetailUIProps) {
  return (
    <>
      <section className="section-dark relative section-padding" style={{ paddingTop: "8rem" }}>
        <TitleHeader as="h1" variant="badge" badge={badge} title={title} description={description} />
      </section>

      <WebsiteAudienceSection audience={audience} locale={locale} />
      <WebsiteServiceSection servicesTitle={servicesTitle} servicesDescription={servicesDescription} services={services} ctaLabel={ctaLabel} locale={locale} />

      <WebsitePricingSection pricing={pricing} locale={locale} />

      <WebsiteProcessSection processLabel={processLabel} process={process} />

      <WebsiteFaqSection faq={faq} locale={locale} />
    </>
  );
}
