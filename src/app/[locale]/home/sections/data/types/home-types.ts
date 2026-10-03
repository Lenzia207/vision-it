/**
 * Type declarations for the home page.
 */
export interface HomePageData {
  main_navigation: MainNavigation[];
  navigation_labels: NavigationLabels;
  hero: HomeHero;
  interplay_section: InterplaySection;
  services_section: ServicesSection;
  principle_section: PrincipleSection;
  audience_section: AudienceSection;
  collaboration_section: CollaborationSection;
  projects_section: ProjectsSection;
  visionseo_section: VisionSeoSection;
  about_section: AboutSection;
  kontakt_section: KontaktSection;
  hero_section: HeroSection;
  angebot_section: AngebotSection;
  portfolio_section: PortfolioSection;
  tech_stack_section: TechStackSection;
  about_me_info_section: AboutMeInfoSection;
  about_me_section: AboutMeSection;
  contact_section: ContactSection;
  price_packages_section: PricePackagesSection;
}

export interface PricePackage {
  name: string;
  price: string;
  for: string;
  features: string[];
}

export interface PricePackagesSection {
  title: string;
  btnText: string;
  packages: PricePackage[];
}

export interface NavigationLabels {
  cta: string;
  ctaPageId: string;
  home: string;
  mainNav: string;
  mobileNav: string;
  menu: string;
  close: string;
  openMenu: string;
  closeMenu: string;
  email: string;
}

export interface TitleText {
  title: string;
  text: string;
}

export interface PageLink {
  label: string;
  pageId: string;
}

export interface HeroNode {
  title: string;
  /** Compact uppercase label rendered inside the braid node. */
  label: string;
  text: string;
  /** Sub-topics fanned out around the node while it is active. */
  satellites: string[];
}

export interface HomeHero {
  eyebrow: string;
  titleLines: string[];
  text: string;
  primaryCta: PageLink;
  secondaryCta: PageLink;
  keywords: string[];
  tagline: string;
  braidLabel: string;
  nodes: HeroNode[];
}

export interface InterplaySection {
  tag: string;
  title: string;
  text: string;
  pillars: TitleText[];
}

export interface ServiceCardData {
  /** "web" | "seo" | "agency" – selects the card's header glyph. */
  key: string;
  title: string;
  description: string;
  link: string;
  items: string[];
  process: AngebotProcessStep[];
}

export interface ServicesSection {
  tag: string;
  title: string;
  description: string;
  areaLabel: string;
  servicesTab: string;
  processTab: string;
  linkLabel: string;
  cards: ServiceCardData[];
}

export interface PrincipleItem extends TitleText {
  ringLabel: string;
}

export interface PrincipleSection {
  tag: string;
  title: string;
  text: string;
  cta: PageLink;
  statusComplete: string;
  items: PrincipleItem[];
}

export interface AudienceSection {
  tag: string;
  title: string;
  items: TitleText[];
}

export interface CollaborationSection {
  tag: string;
  title: string;
  stepLabel: string;
  steps: TitleText[];
}

export interface ProjectTeaser {
  image: string;
  title: string;
  subtitle: string;
  tags: string[];
  url: string;
}

export interface ProjectsSection {
  tag: string;
  title: string;
  description: string;
  articlesTitle: string;
  articlesBadge: string;
  articleStatus: string;
  projects: ProjectTeaser[];
  articles: string[];
}

export interface VisionSeoSection {
  badge: string;
  statusBadge: string;
  title: string;
  text: string;
  windowAriaLabel: string;
  windowTitle: string;
  windowLabel: string;
  analyzing: string;
  tree: { path: string; check: string; done: boolean }[];
}

export interface AboutSection {
  tag: string;
  title: string;
  name: string;
  degree: string;
  imageAlt: string;
  paragraphs: string[];
  facts: { label: string; value: string }[];
  links: { name: string; url: string }[];
}

export interface KontaktForm {
  nameLabel: string;
  namePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  topicLabel: string;
  topics: { value: string; label: string }[];
  messageLabel: string;
  messagePlaceholder: string;
  privacyText: string;
  submit: string;
  sending: string;
  error: string;
  successTitle: string;
  successText: string;
  reset: string;
}

export interface KontaktSection {
  tag: string;
  title: string;
  paragraphs: string[];
  emailLabel: string;
  email: string;
  personalLabel: string;
  personalText: string;
  form: KontaktForm;
}

export interface MainNavigationSubItem {
  name: string;
  pageId: string;
  description?: string;
}

export interface MainNavigation {
  name: string;
  page: string;
  pageId: string;
  submenu?: MainNavigationSubItem[];
  submenuDescription?: string;
}

export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroSection {
  title_line1: string;
  sub_text: string;
  stats: HeroStat[];
}

export interface AngebotProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface AngebotArea {
  id: string;
  badge: string;
  title: string;
  servicesLabel: string;
  processLabel: string;
  linkLabel: string;
  link: string;
  services: string[];
  process: AngebotProcessStep[];
}

export interface AngebotSection {
  title: string;
  description: string;
  areas: AngebotArea[];
}

export interface PortfolioSection {
  title: string;
  description: string;
  categories: string[];
  projects: Project[];
}

export interface Project {
  title: string;
  description: string;
  category: string;
  image: string | null;
  url?: string;
  tags: string[];
}

export interface TechStackSection {
  title: string;
  description: string;
  stacks: {
    category: string;
    items: string[];
  }[];
}

export interface AboutMeInfoSection {
  subTitle: string;
  title: string;
  description: string;
}

export interface AboutMeSection {
  title: string;
  name: string;
  description: string;
  social_media: {
    name: string;
    icon: string;
    url: string;
  }[];
}
export interface ContactSection {
  title: string;
  description: string;
  nameLabel: string;
  namePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  btn_text: string;
  interestLabel: string;
  interestWebsite: string;
  interestGeneral: string;
  packageLabel: string;
}
