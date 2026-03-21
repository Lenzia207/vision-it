"use client";
import IconLucide from "@/components/IconsLucide";
import Lottie from "lottie-react";
import { useState } from "react";
import teamAnim from "@public/animations/team-anim.json";
import codeAnim from "@public/animations/code-anim.json";
import layerAnim from "@public/animations/layer-anim.json";
import clickAnim from "@public/animations/click-anim.json";
import pentoolAnim from "@public/animations/pentool-anim.json";
import TitleHeader from "@/components/TitleHeader";
import { ServiceSectionType } from "./data/types/home-types";

interface ServiceSectionProps {
  title: string;
  description: string;
  services: ServiceSectionType["services"];
  btnText: string;
}

const META_LABELS = ["SV-01", "SV-02", "SV-03", "SV-04", "SV-05"];

export default function ServiceSection({
  title,
  description,
  services,
  btnText,
}: ServiceSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const animationMap: Record<string, unknown> = {
    "/animations/team-anim.json": teamAnim,
    "/animations/code-anim.json": codeAnim,
    "/animations/layer-anim.json": layerAnim,
    "/animations/click-anim.json": clickAnim,
    "/animations/pentool-anim.json": pentoolAnim,
  };

  return (
    <section id="services" className="relative section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <TitleHeader tag="[ SRV_MATRX ]" title={title} description={description} />

        {/* Bento grid: col 1 and 4 span 2 on md+ */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ gridAutoRows: "minmax(240px, auto)" }}
        >
          {services.map((service, index) => {
            const animationData = animationMap[service.icon_images.icon_animation] as unknown as object;
            const isHovered = hoveredCard === index;
            const isWide = index === 2 || index === 3;
            const isSingle = index === 0;

            return (
              <div
                key={index}
                className={`card-dark relative flex flex-col gap-6 p-10 reveal-on-scroll${isWide ? " md:col-span-2" : isSingle ? " md:col-span-3" : ""}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Meta label */}
                <span
                  className="label-mono absolute top-6 right-6"
                >
                  {META_LABELS[index]}
                </span>

                {/* Icon box */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: isHovered
                      ? "1px solid rgba(66, 245, 233, 0.3)"
                      : "1px solid var(--border-light)",
                    color: isHovered ? "var(--accent-cyan)" : "var(--text-100)",
                  }}
                >
                  {!isHovered && (
                    <IconLucide iconName={service.icon_images.icon} className="w-6 h-6" />
                  )}
                  {isHovered && animationData && (
                    <Lottie
                      animationData={animationData}
                      style={{ width: 40, height: 40 }}
                      loop={false}
                      autoplay={true}
                    />
                  )}
                </div>

                <h3 className="text-xl font-bold" style={{ color: "var(--text-100)" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-300)" }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="#contact" className="btn btn-primary">
            {btnText}
          </a>
        </div>
      </div>
    </section>
  );
}
