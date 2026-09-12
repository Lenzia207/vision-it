import { AngebotAgenturenData } from "../data/agenturen-types";
import AgenturenHeroSection from "../sections/AgenturenHeroSection";
import AgenturenUseCasesSection from "../sections/AgenturenUseCasesSection";
import AgenturenServicesSection from "../sections/AgenturenServicesSection";
import AgenturenWorkflowSection from "../sections/AgenturenWorkflowSection";
import AgenturenExperienceSection from "../sections/AgenturenExperienceSection";
import AgenturenProjectsSection from "../sections/AgenturenProjectsSection";
import AgenturenProcessSection from "../sections/AgenturenProcessSection";
import AgenturenModelsSection from "../sections/AgenturenModelsSection";
import AgenturenExpectationsSection from "../sections/AgenturenExpectationsSection";
import AgenturenTechStackSection from "../sections/AgenturenTechStackSection";
import AgenturenFaqSection from "../sections/AgenturenFaqSection";
import AgenturenFinalCtaSection from "../sections/AgenturenFinalCtaSection";

type AgenturenDetailUIProps = AngebotAgenturenData;

export default function AgenturenDetailUI({
  hero,
  useCases,
  services,
  workflow,
  experience,
  projects,
  process,
  models,
  expectations,
  techStack,
  faq,
  finalCta,
}: AgenturenDetailUIProps) {
  return (
    <>
      <AgenturenHeroSection hero={hero} />
      <AgenturenUseCasesSection useCases={useCases} />
      <AgenturenServicesSection services={services} />
      <AgenturenWorkflowSection workflow={workflow} />
      <AgenturenExperienceSection experience={experience} />
      <AgenturenProjectsSection projects={projects} />
      <AgenturenProcessSection process={process} />
      <AgenturenModelsSection models={models} />
      <AgenturenExpectationsSection expectations={expectations} />
      <AgenturenTechStackSection techStack={techStack} />
      <AgenturenFaqSection faq={faq} />
      <AgenturenFinalCtaSection finalCta={finalCta} />
    </>
  );
}
