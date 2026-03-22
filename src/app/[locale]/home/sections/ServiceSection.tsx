import TitleHeader from "@/components/TitleHeader";
import { ServiceSectionType } from "./data/types/home-types";
import ServiceCard from "./ServiceSection/ServiceCard";
import AppButton from "@/components/AppButton";

interface ServiceSectionProps {
  title: string;
  description: string;
  services: ServiceSectionType["services"];
  btnText: string;
}

export default function ServiceSection({
  title,
  description,
  services,
  btnText,
}: ServiceSectionProps) {

  return (
    <section id="services" className="relative section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <TitleHeader tag="[ SRV_MATRX ]" title={title} description={description} />

        {/* Bento grid*/}
        <ServiceCard
          services={services}
        />

        {/* CTA */}
        <div className="mt-16 text-center">
          <AppButton btnText={btnText} />
        </div>
      </div>
    </section>
  );
}
