import TitleHeader from "@/components/TitleHeader";
import { AngebotArea } from "../data/types/home-types";
import AngebotCard from "./AngebotCard";
import { hiddenAngebotIds } from "@/app/configs/configs";

interface AngebotSectionProps {
  title: string;
  description: string;
  areas: AngebotArea[];
  locale: string;
}

export default function AngebotSection({ title, description, areas, locale }: AngebotSectionProps) {
  const visibleAreas = areas.filter((area) => !hiddenAngebotIds.includes(area.id));

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <TitleHeader tag="ANGEBOT" title={title} description={description} />

        <div className="flex flex-wrap justify-center gap-6">
          {visibleAreas.map((area, index) => (
            <AngebotCard key={area.id} area={area} locale={locale} index={index} />
          ))}
        </div>
      </div>
    </section>
  );  
}
