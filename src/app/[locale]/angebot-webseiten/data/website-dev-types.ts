
export interface AngebotWebsiteService {
  icon: string;
  title: string;
  description: string;

}

export interface AngebotAudienceRow {
  situation: string;
  solution: string;
}

export interface AngebotAudienceData {
  tag: string;
  title: string;
  description: string;
  situationLabel: string;
  solutionLabel: string;
  rows: AngebotAudienceRow[];
  ctaText: string;
  ctaLabel: string;
}

export interface AngebotPriceFactor {
  title: string;
  description: string;
}

export interface AngebotPricePackage {
  name: string;
  tagline: string;
  pricePrefix?: string;
  price: string;
  features: string[];
  ctaLabel: string;
  ctaVariant: "primary" | "secondary";
  badge?: string;
  highlighted?: boolean;
}

export interface AngebotPricingData {
  factorsTag: string;
  factorsTitle: string;
  factorsDescription: string;
  factors: AngebotPriceFactor[];
  note: string;
  packagesTag: string;
  packagesTitle: string;
  packages: AngebotPricePackage[];
}

export interface AngebotFaqItem {
  question: string;
  answer: string;
}

export interface AngebotFaqData {
  tag: string;
  title: string;
  description: string;
  items: AngebotFaqItem[];
  noteText: string;
  noteCta: string;
}

export interface AngebotWebsiteHeroData {
  tag: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
}

export interface AngebotWebsiteData {
  hero: AngebotWebsiteHeroData;
  title: string;
  description: string;
  servicesTitle: string;
  servicesDescription: string;
  services: AngebotWebsiteService[];
  audience: AngebotAudienceData;
  pricing: AngebotPricingData;
  faq: AngebotFaqData;
  ctaLabel: string;
}
