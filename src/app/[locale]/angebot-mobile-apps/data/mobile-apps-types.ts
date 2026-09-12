export interface AngebotMobileAppsHeroData {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  secondaryCtaLabel: string;
}

export interface AngebotMobileAppsUseCase {
  step: string;
  title: string;
  description: string;
}

export interface AngebotMobileAppsWhenAppData {
  label: string;
  title: string;
  description: string;
  items: AngebotMobileAppsUseCase[];
  note: string;
}

export interface AngebotMobileAppsComparisonColumn {
  title: string;
  items: string[];
}

export interface AngebotMobileAppsAppVsWebAppData {
  label: string;
  title: string;
  mobileApp: AngebotMobileAppsComparisonColumn;
  webApp: AngebotMobileAppsComparisonColumn;
  note: string;
}

export interface AngebotMobileAppsService {
  title: string;
  description: string;
  badgeLabel?: string;
  highlighted?: boolean;
}

export interface AngebotMobileAppsServicesData {
  label: string;
  title: string;
  items: AngebotMobileAppsService[];
}

export interface AngebotMobileAppsCrossPlatformItem {
  title: string;
  description: string;
}

export interface AngebotMobileAppsCrossPlatformData {
  label: string;
  title: string;
  description: string;
  items: AngebotMobileAppsCrossPlatformItem[];
  tools: string[];
}

export interface AngebotMobileAppsFeaturedProject {
  badgeLabel: string;
  title: string;
  description: string;
  image: string;
  roleLabel: string;
  roleItems: string[];
  highlightsLabel: string;
  highlightItems: string[];
  tags: string[];
}

export interface AngebotMobileAppsProject {
  badgeLabel: string;
  title: string;
  description: string;
  role?: string;
  image: string;
  tags: string[];
}

export interface AngebotMobileAppsProjectsData {
  label: string;
  title: string;
  featured: AngebotMobileAppsFeaturedProject;
  items: AngebotMobileAppsProject[];
}

export interface AngebotMobileAppsProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface AngebotMobileAppsProcessData {
  label: string;
  title: string;
  items: AngebotMobileAppsProcessStep[];
}

export interface AngebotMobileAppsMvpStep {
  step: string;
  label: string;
  highlighted?: boolean;
}

export interface AngebotMobileAppsMvpData {
  label: string;
  title: string;
  description: string;
  note: string;
  steps: AngebotMobileAppsMvpStep[];
}

export interface AngebotMobileAppsCostFactor {
  title: string;
  description: string;
}

export interface AngebotMobileAppsCostsData {
  label: string;
  title: string;
  description: string;
  factors: AngebotMobileAppsCostFactor[];
  note: string;
  ctaLabel: string;
}

export interface AngebotMobileAppsAfterLaunchData {
  label: string;
  title: string;
  paragraphs: string[];
  items: string[];
}

export interface AngebotMobileAppsTechCategory {
  category: string;
  items: string[];
}

export interface AngebotMobileAppsTechStackData {
  label: string;
  title: string;
  note: string;
  categories: AngebotMobileAppsTechCategory[];
}

export interface AngebotMobileAppsFaqItem {
  question: string;
  answer: string;
}

export interface AngebotMobileAppsFaqData {
  label: string;
  title: string;
  items: AngebotMobileAppsFaqItem[];
}

export interface AngebotMobileAppsFinalCtaData {
  title: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
}

export interface AngebotMobileAppsData {
  hero: AngebotMobileAppsHeroData;
  whenApp: AngebotMobileAppsWhenAppData;
  appVsWebApp: AngebotMobileAppsAppVsWebAppData;
  services: AngebotMobileAppsServicesData;
  crossPlatform: AngebotMobileAppsCrossPlatformData;
  projects: AngebotMobileAppsProjectsData;
  process: AngebotMobileAppsProcessData;
  mvp: AngebotMobileAppsMvpData;
  costs: AngebotMobileAppsCostsData;
  afterLaunch: AngebotMobileAppsAfterLaunchData;
  techStack: AngebotMobileAppsTechStackData;
  faq: AngebotMobileAppsFaqData;
  finalCta: AngebotMobileAppsFinalCtaData;
}
