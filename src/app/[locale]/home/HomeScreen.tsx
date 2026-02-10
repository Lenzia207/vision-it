import Header from "@/components/MainNavigation";
import HeroSection from "./sections/HeroSection";
import ServiceSection from "./sections/ServiceSection";
import PortfolioSection from "./sections/PortfolioSection";
import TechStackSection from "./sections/TechStackSection";
import AboutMeSection from "./sections/AboutMeSection";
import ContactSection from "./sections/ContactSection";
import { HomePageData } from "./sections/data/types/home-types";

interface HomeScreenProps {
  data: HomePageData;
}
export default function HomeScreen({ data }: HomeScreenProps) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        titleLine1={data.hero_section.title_line1}
        description={data.hero_section.description}
        btnText={data.hero_section.btn_text}
      />

      {/* Services Section */}
      <ServiceSection
        title={data.service_section.title}
        description={data.service_section.description}
        services={data.service_section.services}
      />

      {/* Portfolio Section */}
      <PortfolioSection
        title={data.portfolio_section.title}
        description={data.portfolio_section.description}
        categories={data.portfolio_section.categories}
        projects={data.portfolio_section.projects}
      />

      {/* Tech Stack Section */}
      <TechStackSection
        title={data.tech_stack_section.title}
        description={data.tech_stack_section.description}
        stacks={data.tech_stack_section.stacks}
      />

      {/* About Me Section */}
      <AboutMeSection
        title={data.about_me_section.title}
        description={data.about_me_section.description}
        social_media={data.about_me_section.social_media}
        fullname={data.about_me_section.name}
      />

      {/* Contact Section */}
      <ContactSection
        title={data.contact_section.title}
        description={data.contact_section.description}
        nameLabel={data.contact_section.nameLabel}
        namePlaceholder={data.contact_section.namePlaceholder}
        companyLabel={data.contact_section.companyLabel}
        companyPlaceholder={data.contact_section.companyPlaceholder}
        emailLabel={data.contact_section.emailLabel}
        emailPlaceholder={data.contact_section.emailPlaceholder}
        messageLabel={data.contact_section.messageLabel}
        messagePlaceholder={data.contact_section.messagePlaceholder}
        btn_text={data.contact_section.btn_text}
      />
    </>
  );
}
