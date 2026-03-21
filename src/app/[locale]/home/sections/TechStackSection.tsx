"use client";

import React, { useState } from "react";
import { TechStackSection as TechStackSectionType } from "./data/types/home-types";
import TitleHeader from "@/components/TitleHeader";

interface TechStackSectionProps {
  title: string;
  stacks: TechStackSectionType["stacks"];
}

function StackBubble({ stack }: { stack: TechStackSectionType["stacks"][0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group w-40 h-40 flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Bubble */}
      <div className={`relative z-20 w-full h-full rounded-full glass-elevated flex items-center justify-center transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}
        style={{ boxShadow: isHovered ? '0 0 40px var(--accent-glow)' : undefined }}
      >
        <div className="text-center">
          <span className="block text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
            {stack.category}
          </span>
          <span className="text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
            Stack
          </span>
        </div>
      </div>

      {/* Chips */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {stack.items.map((item, index) => {
          const totalItems = stack.items.length;
          const angleStep = 360 / totalItems;
          const angle = index * angleStep - 10;
          const radian = (angle * Math.PI) / 180;

          const initialRadius = 100;
          const expandedRadius = 140;

          const x = Math.cos(radian) * expandedRadius;
          const y = Math.sin(radian) * expandedRadius;

          const initialX = Math.cos(radian) * initialRadius;
          const initialY = Math.sin(radian) * initialRadius;

          return (
            <div
              key={item}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${
                isHovered ? "scale-[0.9] md:scale-[1.2]" : "scale-[0.65] md:scale-[0.8]"
              }`}
              style={{
                transform: isHovered
                  ? `translate(calc(0% + ${x}px), calc(0% + ${y}px))`
                  : `translate(calc(30% + ${initialX}px), calc(0% + ${initialY}px))`,
                opacity: 1,
                transitionDelay: `${index * 30}ms`,
              }}
            >
              <div
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap backdrop-blur-md ${!isHovered ? "animate-subtle-shake" : ""}`}
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: `${3 + (index % 3)}s`,
                }}
              >
                {item}
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative background glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl -z-10 transition-colors duration-500`}
        style={{ background: isHovered ? 'rgba(59,130,246,0.15)' : 'rgba(59,130,246,0.08)' }}
      />
    </div>
  );
}

export default function TechStackSection({
  title,
  stacks,
}: TechStackSectionProps) {
  return (
    <section className="pb-10 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 pb-10">
        <TitleHeader title={title} />

        <div className="flex flex-col md:flex-row justify-center items-center gap-32 md:gap-60 p-10">
          {stacks.map((stack) => (
            <StackBubble key={stack.category} stack={stack} />
          ))}
        </div>
      </div>
    </section>
  );
}
