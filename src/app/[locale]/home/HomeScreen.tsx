
import AboutMeInfo from "./sections/AboutMeInfo";
import AngebotSection from "./sections/AngebotSection/AngebotSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import { HomePageData } from "./sections/data/types/home-types";
import TechStackBanner from "./sections/HeroSection/components/TechStackBanner";
import HeroSection from "./sections/HeroSection/HeroSection";

interface HomeScreenProps {
  data: HomePageData;
  locale: string;
}

export default function HomeScreen({ data, locale }: HomeScreenProps) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        titleLine1={data.hero_section.title_line1}
        subText={data.hero_section.sub_text}
        stacks={data.tech_stack_section.stacks}
      />

      <TechStackBanner stacks={data.tech_stack_section.stacks} />

      {/* About Me Info */}
      <AboutMeInfo
        subTitle={data.about_me_info_section.subTitle}
        title={data.about_me_info_section.title}
        description={data.about_me_info_section.description}
      />

      {/* Angebot Section */}
      <AngebotSection
        title={data.angebot_section.title}
        description={data.angebot_section.description}
        areas={data.angebot_section.areas}
        locale={locale}
      />


      {/* Contact / Footer */}
      <ContactSection
        contactData={data.contact_section}
        packages={data.price_packages_section.packages}
        locale={locale}
      />
    </>
  );
}
