import { AngebotMobileAppsData } from "../data/mobile-apps-types";
import MobileAppsHeroSection from "../sections/MobileAppsHeroSection";
import MobileAppsWhenAppSection from "../sections/MobileAppsWhenAppSection";
import MobileAppsAppVsWebAppSection from "../sections/MobileAppsAppVsWebAppSection";
import MobileAppsServicesSection from "../sections/MobileAppsServicesSection";
import MobileAppsCrossPlatformSection from "../sections/MobileAppsCrossPlatformSection";
import MobileAppsProjectsSection from "../sections/MobileAppsProjectsSection";
import MobileAppsProcessSection from "../sections/MobileAppsProcessSection";
import MobileAppsMvpSection from "../sections/MobileAppsMvpSection";
import MobileAppsCostsSection from "../sections/MobileAppsCostsSection";
import MobileAppsAfterLaunchSection from "../sections/MobileAppsAfterLaunchSection";
import MobileAppsTechStackSection from "../sections/MobileAppsTechStackSection";
import MobileAppsFaqSection from "../sections/MobileAppsFaqSection";
import MobileAppsFinalCtaSection from "../sections/MobileAppsFinalCtaSection";

type MobileAppsDetailUIProps = AngebotMobileAppsData;

export default function MobileAppsDetailUI({
  hero,
  whenApp,
  appVsWebApp,
  services,
  crossPlatform,
  projects,
  process,
  mvp,
  costs,
  afterLaunch,
  techStack,
  faq,
  finalCta,
}: MobileAppsDetailUIProps) {
  return (
    <>
      <MobileAppsHeroSection hero={hero} />
      <MobileAppsWhenAppSection whenApp={whenApp} />
      <MobileAppsAppVsWebAppSection appVsWebApp={appVsWebApp} />
      <MobileAppsServicesSection services={services} />
      <MobileAppsCrossPlatformSection crossPlatform={crossPlatform} />
      <MobileAppsProjectsSection projects={projects} />
      <MobileAppsProcessSection process={process} />
      <MobileAppsMvpSection mvp={mvp} />
      <MobileAppsCostsSection costs={costs} />
      <MobileAppsAfterLaunchSection afterLaunch={afterLaunch} />
      <MobileAppsTechStackSection techStack={techStack} />
      <MobileAppsFaqSection faq={faq} />
      <MobileAppsFinalCtaSection finalCta={finalCta} />
    </>
  );
}
