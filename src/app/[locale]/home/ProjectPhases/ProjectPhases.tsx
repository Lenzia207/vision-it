"use client";

import { useState } from "react";
import TitleHeader from "@/components/TitleHeader";
import { ProjectPhase } from "../sections/data/types/home-types";

const PHASE_LABELS = ["PHASE_01", "PHASE_02", "PHASE_03", "PHASE_04", "PHASE_05"];

interface ProjectPhasesProps {
  title: string;
  description?: string;
  phases: ProjectPhase[];
  btnText: string;
}

export default function ProjectPhases({ title, phases }: ProjectPhasesProps) {
  const [active, setActive] = useState(0);

  return (
    <section id="projectPhases" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <TitleHeader title={title} tag="[ PIPELINE_FLOW ]" />

        {/* Scrollable pipeline */}
        <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="relative flex justify-between items-center gap-6 py-8 min-w-[900px] md:px-0">

            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-(--border-light) to-transparent z-1" />

            {phases.map((phase, index) => {
              const isActive = index === active;

              return (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className="relative z-2 flex flex-col items-center gap-4 w-48 shrink-0 cursor-pointer group"
                >
                  {/* Card */}
                  <div
                    className={`w-full rounded-2xl p-6 text-center transition-all duration-300 bg-(--bg-surface-1) border ${
                      isActive
                        ? "border-(--accent-purple) shadow-[inset_0_0_20px_rgba(139,92,246,0.1)]"
                        : "border-(--border-light) group-hover:border-(--border-accent)"
                    }`}
                  >
                    <span className="label-mono text-(--accent-cyan) block mb-2">
                      {PHASE_LABELS[index]}
                    </span>
                    <h4 className="text-(--text-100) text-base font-semibold m-0">
                      {phase.name}
                    </h4>
                  </div>

                  {/* Node dot */}
                  <div
                    className={`relative w-4 h-4 rounded-full bg-(--bg-base) border-2 transition-all duration-300 ${
                      isActive
                        ? "border-(--accent-purple) shadow-[0_0_20px_rgba(139,92,246,0.8)]"
                        
                        : "border-(--accent-cyan) shadow-[0_0_20px_rgba(66,245,233,0.7)]"
                        
                    }`}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-(--accent-cyan)" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active phase description */}
        <div className="mt-4 text-center">
          <p className="label-mono text-(--accent-cyan) mb-3">
            {PHASE_LABELS[active]} // {phases[active]?.name}
          </p>
          <p className="font-mono text-lg text-(--text-300) max-w-xl mx-auto leading-relaxed">
            {phases[active]?.description}
            {""}
            {/* {phases[active]?.details && (
              <ul className="list-disc list-inside mt-2 text-left text-sm max-w-xl mx-auto">
                {phases[active].details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul> 
            )} */}
          </p>
        </div>
      </div>
    </section>
  );
}
