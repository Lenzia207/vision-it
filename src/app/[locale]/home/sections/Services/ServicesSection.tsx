import { ServicesSection as ServicesData } from "../data/types/home-types";
import Eyebrow from "../components/Eyebrow";
import ServiceCard from "./ServiceCard";

interface ServicesSectionProps {
  data: ServicesData;
  locale: string;
}

export default function ServicesSection({ data, locale }: ServicesSectionProps) {
  return (
    <section
      id="leistungen"
      className="bg-(--bg-surface-1) px-[clamp(20px,5vw,64px)] py-[clamp(88px,10vw,136px)]"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col gap-14">
        <div className="reveal-on-scroll flex flex-col gap-3">
          <Eyebrow>{data.tag}</Eyebrow>
          <h2 className="m-0 font-mono font-medium text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-(--teal)">
            {data.title}
          </h2>
          <p className="m-0 mt-1.5 max-w-2xl text-base leading-relaxed text-(--text-300)">{data.description}</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-6 items-stretch">
          {data.cards.map((card, i) => (
            <ServiceCard
              key={card.key}
              card={card}
              index={i}
              areaLabel={data.areaLabel}
              servicesTab={data.servicesTab}
              processTab={data.processTab}
              linkLabel={data.linkLabel}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
