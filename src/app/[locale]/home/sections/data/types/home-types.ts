/**
 * Type declarations for the home page.
 */
export interface HomePageData {
  main_navigation: MainNavigation;
  hero_section: HeroSection;
  service_section: ServiceSection;
  portfolio_section: PortfolioSection;
  tech_stack_section: TechStackSection;
  about_me_section: AboutMeSection;
  contact_section: ContactSection;
}

interface MainNavigation {
  name: string;
  href: string;
}

export interface HeroSection {
  title_line1: string;
  description: string;
  btn_text: string;
}
export interface ServiceSection {
  title: string;
  description: string;
  services: {
    title: string;
    description: string;
    icon_images: {
      icon: string;
      icon_color: string;
      icon_animation: string;
    };
  }[];
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
}
