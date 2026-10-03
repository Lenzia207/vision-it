import HomeHero from "./sections/Hero/HomeHero";
import InterplaySection from "./sections/InterplaySection";
import ServicesSection from "./sections/Services/ServicesSection";
import PrincipleSection from "./sections/PrincipleSection";
import AudienceSection from "./sections/AudienceSection";
import CollaborationSection from "./sections/CollaborationSection";
import ProjectsSection from "./sections/ProjectsSection";
import VisionSeoSection from "./sections/VisionSeoSection";
import AboutSection from "./sections/AboutSection";
import KontaktSection from "./sections/Kontakt/KontaktSection";
import { HomePageData } from "./sections/data/types/home-types";

interface HomeScreenProps {
  data: HomePageData;
  locale: string;
}

export default function HomeScreen({ data, locale }: HomeScreenProps) {
  return (
    <div className="overflow-x-clip">
      <HomeHero data={data.hero} />
      <InterplaySection data={data.interplay_section} />
      <ServicesSection data={data.services_section} locale={locale} />
      <PrincipleSection data={data.principle_section} />
      <AudienceSection data={data.audience_section} />
      <CollaborationSection data={data.collaboration_section} />
      <ProjectsSection data={data.projects_section} />
      <VisionSeoSection data={data.visionseo_section} />
      <AboutSection data={data.about_section} />
      <KontaktSection data={data.kontakt_section} locale={locale} />
    </div>
  );
}
