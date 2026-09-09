import { AngebotProcessStep } from "../../home/sections/data/types/home-types";

export interface AngebotSeoGeoService {
  icon: string;
  title: string;
  description: string;

}

export interface AngebotSeoGeoHeroData {
  tag: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  processLabel: string;
  processSteps: string[];
}

export interface AngebotSeoGeoSituationData {
  tag: string;
  title: string;
  paragraphs: string[];
  problems: string[];
  note: string;
}

export interface AngebotSeoGeoAuditCategory {
  title: string;
  description: string;
  tags: string[];
  highlighted?: boolean;
}

export interface AngebotSeoGeoAuditData {
  tag: string;
  title: string;
  description: string;
  categories: AngebotSeoGeoAuditCategory[];
}

export interface AngebotSeoGeoFindingStat {
  label: string;
  value: string;
}

export interface AngebotSeoGeoFindingExample {
  badgeLabel: string;
  badgeSubtitle: string;
  title: string;
  stats: AngebotSeoGeoFindingStat[];
  recommendationLabel: string;
  recommendation: string;
}

export interface AngebotSeoGeoFindingsData {
  tag: string;
  title: string;
  description: string;
  questionsTitle: string;
  questions: string[];
  example: AngebotSeoGeoFindingExample;
}

export interface AngebotSeoGeoPriorityTab {
  code: string;
  label: string;
  description: string;
  items: string[];
}

export interface AngebotSeoGeoPrioritizationData {
  tag: string;
  title: string;
  description: string;
  tabs: AngebotSeoGeoPriorityTab[];
  footnote: string;
}

export interface AngebotSeoGeoRoadmapPhase {
  phaseLabel: string;
  navLabel: string;
  title: string;
  items: string[];
}

export interface AngebotSeoGeoRoadmapData {
  tag: string;
  title: string;
  description: string;
  phases: AngebotSeoGeoRoadmapPhase[];
  note: string;
}

export interface AngebotSeoGeoCycleStep {
  label: string;
  index: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface AngebotSeoGeoMonth {
  label: string;
  progress: number;
  description: string;
  tags: string[];
  highlighted?: boolean;
}

export interface AngebotSeoGeoMonitoringData {
  tag: string;
  title: string;
  description: string;
  cycleTitle: string;
  cycleSubtitle: string;
  cycleSteps: AngebotSeoGeoCycleStep[];
  cycleNote: string;
  monthsTitle: string;
  monthsSubtitle: string;
  months: AngebotSeoGeoMonth[];
  monthsNote: string;
  metricsLabel: string;
  metrics: string[];
  metricsAccent: string;
  metricsNote: string;
}

export interface AngebotSeoGeoPricePlan {
  name: string;
  badgeLabel: string;
  badgeVariant: "solid" | "outline";
  description: string;
  price: string;
  includedNote?: string;
  features: string[];
  ctaLabel: string;
  ctaVariant: "primary" | "secondary";
  footnote?: string;
  highlighted?: boolean;
}

export interface AngebotSeoGeoGrowthMonth {
  label: string;
  description: string;
}

export interface AngebotSeoGeoCollaborationData {
  tag: string;
  title: string;
  description: string;
  plans: AngebotSeoGeoPricePlan[];
  growthLabel: string;
  growthMonths: AngebotSeoGeoGrowthMonth[];
  growthNote: string;
}

export interface AngebotSeoGeoGeoData {
  tag: string;
  title: string;
  description: string;
  note: string;
  signals: string[];
}

export interface AngebotFaqItem {
  question: string;
  answer: string;
}

export interface AngebotSeoFaqData {
  tag: string;
  title: string;
  description: string;
  items: AngebotFaqItem[];
  noteText: string;
  noteCta: string;
}

export interface AngebotSeoGeoFinalCtaData {
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

export interface AngebotSeoGeoData {
  title: string;
  description: string;
  servicesTitle: string;
  servicesDescription: string;
  services: AngebotSeoGeoService[];
  hero: AngebotSeoGeoHeroData;
  situation: AngebotSeoGeoSituationData;
  audit: AngebotSeoGeoAuditData;
  findings: AngebotSeoGeoFindingsData;
  prioritization: AngebotSeoGeoPrioritizationData;
  roadmap: AngebotSeoGeoRoadmapData;
  collaboration: AngebotSeoGeoCollaborationData;
  monitoring: AngebotSeoGeoMonitoringData;
  geo: AngebotSeoGeoGeoData;
  faq: AngebotSeoFaqData;
  finalCta: AngebotSeoGeoFinalCtaData;
  ctaLabel: string;
}
