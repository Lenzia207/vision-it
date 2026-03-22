"use client";
import IconLucide from "@/components/IconsLucide";
import teamAnim from "@public/animations/team-anim.json";
import codeAnim from "@public/animations/code-anim.json";
import layerAnim from "@public/animations/layer-anim.json";
import clickAnim from "@public/animations/click-anim.json";
import pentoolAnim from "@public/animations/pentool-anim.json";
import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import { ServiceSectionType } from "../data/types/home-types";

interface ServiceCardProps {
  services: ServiceSectionType["services"];

}

export default function ServiceCard({ services }: ServiceCardProps) {
  const META_LABELS = ["SV-01", "SV-02", "SV-03", "SV-04", "SV-05"];
 

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollActive, setScrollActive] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Only activate scroll-based mode on touch / hover-incapable devices
    const isDesktop = window.matchMedia("(hover: none)").matches;
    if (!isDesktop) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx === -1) return;
          if (entry.isIntersecting) {
            setScrollActive(idx);
          } else {
            setScrollActive((prev) => (prev === idx ? null : prev));
          }
        });
      },
      {
        // Middle-third viewport zone
        rootMargin: "-33% 0px -33% 0px",
        threshold: 0,
      }
    );

    const refs = cardRefs.current;
    refs.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [services.length]);

  const animationMap: Record<string, unknown> = {
    "/animations/team-anim.json": teamAnim,
    "/animations/code-anim.json": codeAnim,
    "/animations/layer-anim.json": layerAnim,
    "/animations/click-anim.json": clickAnim,
    "/animations/pentool-anim.json": pentoolAnim,
  };

    return (
         <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ gridAutoRows: "minmax(240px, auto)" }}
        >
          {services.map((service, index) => {
            const animationData = animationMap[service.icon_images.icon_animation] as unknown as object;
            const isActive = hoveredCard === index || scrollActive === index;
            const isWide = index === 2 || index === 3;
            const isSingle = index === 0;
            const accentColor = service.icon_images.icon_color || "var(--accent-cyan)";

            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`card-dark relative flex flex-col gap-6 p-10 reveal-on-scroll${isWide ? " md:col-span-2" : isSingle ? " md:col-span-3" : ""}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Meta label */}
                <span className="label-mono absolute top-6 right-6">
                  {META_LABELS[index]}
                </span>

                {/* Icon box */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: isActive
                      ? `1px solid ${accentColor}4D`
                      : "1px solid var(--border-light)",
                    color: isActive ? accentColor : "var(--text-100)",
                  }}
                >
                  {!isActive && (
                    <IconLucide
                      iconName={service.icon_images.icon}
                      className="w-6 h-6"
                      style={{ color: accentColor}}
                    />
                  )}
                  {isActive && animationData && (
                    <Lottie
                      animationData={animationData}
                      style={{ width: 40, height: 40 }}
                      loop={false}
                      autoplay={true}
                    />
                  )}
                </div>

                <h3 className="text-xl font-bold text-(--text-100)">
                  {service.title}
                </h3>
                <p className="text-md leading-relaxed text-(--text-300)">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
    )
}