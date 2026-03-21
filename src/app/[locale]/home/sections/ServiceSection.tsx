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
import AppButton from "@/components/AppButton";
import { ServiceSectionType } from "./data/types/home-types";

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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const accentColors = [
    { border: "rgba(148,163,184,0.25)", glow: "rgba(148,163,184,0.08)", icon: "text-white-400" },
    { border: "rgba(59,130,246,0.25)", glow: "rgba(59,130,246,0.08)", icon: "text-blue-400" },
    { border: "rgba(236,72,153,0.25)", glow: "rgba(236,72,153,0.08)", icon: "text-pink-400" },
    { border: "rgba(6,182,212,0.25)", glow: "rgba(6,182,212,0.08)", icon: "text-cyan-400" },
    { border: "rgba(251,146,60,0.25)", glow: "rgba(251,146,60,0.08)", icon: "text-orange-400" },
  ];

  return (
    <section id="services" className="relative section-padding">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header with Title and Description */}
        <TitleHeader title={title} description={description} />

        {/* Services Grid with Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const animationMap: Record<string, unknown> = {
              "/animations/team-anim.json": teamAnim,
              "/animations/code-anim.json": codeAnim,
              "/animations/layer-anim.json": layerAnim,
              "/animations/click-anim.json": clickAnim,
              "/animations/pentool-anim.json": pentoolAnim,
            };
            const colors = accentColors[index] || accentColors[0];
            const animationData =
              animationMap[service.icon_images.icon_animation] as unknown as object;

            return (
              <div
                className={`group p-8 rounded-2xl card-dark hover-lift reveal-on-scroll flex flex-col h-full ${index === 0 ? "md:col-span-2" : ""}`}
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  borderColor: hoveredCard === index ? colors.border : undefined,
                  boxShadow: hoveredCard === index ? `0 0 40px ${colors.glow}` : undefined,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    background: colors.glow,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  {hoveredCard !== index && (
                    <IconLucide
                      iconName={service.icon_images.icon}
                      className={`w-6 h-6 ${colors.icon}`}
                    />
                  )}
                  {hoveredCard === index && animationData && (
                    <Lottie
                      animationData={animationData}
                      style={{ width: 50, height: 50 }}
                      loop={false}
                      autoplay={true}
                    />
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed text-md" style={{ color: "var(--text-secondary)" }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-auto pt-20">
          <AppButton btnText={btnText} packageName={title} fullWidth />
        </div>
      </div>
    </section>
  );
}