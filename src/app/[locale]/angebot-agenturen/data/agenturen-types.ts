export interface AngebotAgenturenHeroData {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  secondaryCtaLabel: string;
}

export interface AngebotAgenturenUseCase {
  step: string;
  title: string;
  description: string;
}

export interface AngebotAgenturenUseCasesData {
  label: string;
  title: string;
  description: string;
  items: AngebotAgenturenUseCase[];
}

export interface AngebotAgenturenService {
  icon: string;
  title: string;
  description: string;
}

export interface AngebotAgenturenServicesData {
  label: string;
  title: string;
  description?: string;
  items: AngebotAgenturenService[];
}

export interface AngebotAgenturenWorkflowData {
  label: string;
  title: string;
  description: string;
  toolsLabel: string;
  tools: string[];
  toolsNote: string;
  statement: string;
}

export interface AngebotAgenturenExperienceFact {
  value: string;
  label: string;
}

export interface AngebotAgenturenExperienceData {
  label: string;
  title: string;
  paragraphs: string[];
  facts: AngebotAgenturenExperienceFact[];
}

export interface AngebotAgenturenProject {
  title: string;
  role: string;
  description: string;
  image: string;
  tags: string[];
}

export interface AngebotAgenturenProjectsData {
  label: string;
  title: string;
  items: AngebotAgenturenProject[];
}

export interface AngebotAgenturenProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface AngebotAgenturenProcessData {
  label: string;
  title: string;
  items: AngebotAgenturenProcessStep[];
}

export interface AngebotAgenturenModel {
  step: string;
  title: string;
  description: string;
  rate: string;
}

export interface AngebotAgenturenModelsData {
  label: string;
  title: string;
  items: AngebotAgenturenModel[];
  note: string;
  ctaLabel: string;
}

export interface AngebotAgenturenExpectation {
  title: string;
  description: string;
}

export interface AngebotAgenturenExpectationsData {
  label: string;
  title: string;
  items: AngebotAgenturenExpectation[];
}

export interface AngebotAgenturenTechCategory {
  category: string;
  items: string[];
}

export interface AngebotAgenturenTechStackData {
  label: string;
  title: string;
  note: string;
  categories: AngebotAgenturenTechCategory[];
}

export interface AngebotAgenturenFaqItem {
  question: string;
  answer: string;
}

export interface AngebotAgenturenFaqData {
  label: string;
  title: string;
  items: AngebotAgenturenFaqItem[];
}

export interface AngebotAgenturenFinalCtaData {
  title: string;
  description: string;
  ctaLabel: string;
  note: string;
}

export interface AngebotAgenturenData {
  hero: AngebotAgenturenHeroData;
  useCases: AngebotAgenturenUseCasesData;
  services: AngebotAgenturenServicesData;
  workflow: AngebotAgenturenWorkflowData;
  experience: AngebotAgenturenExperienceData;
  projects: AngebotAgenturenProjectsData;
  process: AngebotAgenturenProcessData;
  models: AngebotAgenturenModelsData;
  expectations: AngebotAgenturenExpectationsData;
  techStack: AngebotAgenturenTechStackData;
  faq: AngebotAgenturenFaqData;
  finalCta: AngebotAgenturenFinalCtaData;
}
