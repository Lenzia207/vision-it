"use client";
import IconLucide from "@/components/IconsLucide";
import Lottie from "lottie-react";
import { useRef, useState } from "react";
import codeAnim from "@public/animations/code-anim.json";
import layerAnim from "@public/animations/layer-anim.json";
import clickAnim from "@public/animations/click-anim.json";
import pentoolAnim from "@public/animations/pentool-anim.json";

interface ServiceSectionProps {
  title: string;
  description: string;
  services: {
    title: string;
    description: string;
    icon_images: {
      icon: string;
      icon_color: string;
      icon_animation: string;
    };
  }[];
}

export default function ServiceSection({
  title,
  description,
  services,
}: ServiceSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 reveal-on-scroll">
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-zinc-500 whitespace-pre-line">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const animationMap: { [key: string]: any } = {
              "/animations/code-anim.json": codeAnim,
              "/animations/layer-anim.json": layerAnim,
              "/animations/click-anim.json": clickAnim,
              "/animations/pentool-anim.json": pentoolAnim,
            };
            const bgColors = [
              "bg-blue-500/10 border-blue-500/20",
              "bg-pink-500/10 border-pink-500/20",
              "bg-cyan-500/10 border-cyan-500/20",
              "bg-orange-500/10 border-orange-500/20",
            ];
            
            const animationData =
              animationMap[service.icon_images.icon_animation];

            return (
              <div
                className="group p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover-lift reveal-on-scroll"
                key={index}
                onMouseEnter={() => {
                  setHoveredCard(index);
                }}
                onMouseLeave={() => {
                  setHoveredCard(null);
                }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border ${
                    bgColors[index] || bgColors[0]
                  }`}
                >
                  {hoveredCard !== index && (
                    <IconLucide
                      iconName={service.icon_images.icon}
                      className={`w-6 h-6 text-${service.icon_images.icon_color}`}
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

                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}