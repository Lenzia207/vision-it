"use client";

import { useState } from "react";
import TitleHeader from "@/components/TitleHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Phase {
    name: string;
    description: string;
    details: string[];
}

interface ProjectPhasesProps {
    title: string;
    description?: string;
    phases: Phase[];
}

export default function ProjectPhases({ title, description, phases }: ProjectPhasesProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"right" | "left">("right");

    const navigate = (newIndex: number) => {
        if (newIndex === currentIndex || newIndex < 0 || newIndex >= phases.length) return;
        setDirection(newIndex > currentIndex ? "right" : "left");
        setCurrentIndex(newIndex);
    };

    const current = phases[currentIndex];

    return (
        <section id="projects-phases" className="py-24 md:py-32 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <TitleHeader title={title} description={description} />

                {/* Step indicator */}
                <div className="mb-14 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex items-center justify-start md:justify-center min-w-max mx-auto gap-0">
                        {phases.map((phase, index) => (
                            <div key={index} className="flex items-center">
                                <button
                                    onClick={() => navigate(index)}
                                    className={`flex items-center gap-2 px-1 py-1 transition-all duration-300 group ${
                                        index === currentIndex
                                            ? "text-white"
                                            : index < currentIndex
                                            ? "text-zinc-500 hover:text-zinc-300"
                                            : "text-zinc-700 hover:text-zinc-500"
                                    }`}
                                >
                                    <span
                                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-medium border transition-all duration-300 shrink-0 ${
                                            index === currentIndex
                                                ? "border-zinc-400 bg-white/10 text-white"
                                                : index < currentIndex
                                                ? "border-zinc-600 text-zinc-500"
                                                : "border-zinc-800 text-zinc-700"
                                        }`}
                                    >
                                        {index + 1}
                                    </span>
                                    <span className="text-sm font-medium whitespace-nowrap">{phase.name}</span>
                                </button>

                                {index < phases.length - 1 && (
                                    <span className="mx-2 text-zinc-800 text-sm select-none">→</span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Progress bar */}
                    <div className="mt-4 h-px bg-zinc-800 max-w-3xl mx-auto rounded-full overflow-hidden">
                        <div
                            className="h-full bg-zinc-400 rounded-full transition-all duration-500 ease-in-out"
                            style={{ width: `${((currentIndex + 1) / phases.length) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Card + navigation */}
                <div className="flex items-center gap-3 md:gap-6">
                    <button
                        onClick={() => navigate(currentIndex - 1)}
                        disabled={currentIndex === 0}
                        className="shrink-0 p-2 text-zinc-700 hover:text-white transition-colors duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
                        aria-label="Previous phase"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="flex-1 overflow-hidden">
                        <div
                            key={currentIndex}
                            className={direction === "right" ? "phase-slide-right" : "phase-slide-left"}
                        >
                            <div className="rounded-2xl border border-white/5 bg-zinc-900/40 p-8 md:p-12">
                                {/* Phase header */}
                                <div className="flex items-start gap-5 mb-8">
                                    <span className="font-serif text-6xl md:text-7xl text-zinc-800 font-medium leading-none select-none">
                                        {String(currentIndex + 1).padStart(2, "0")}
                                    </span>
                                    <div className="pt-1">
                                        <p className="text-zinc-600 text-xs uppercase tracking-widest mb-1.5">
                                            Phase {currentIndex + 1} / {phases.length}
                                        </p>
                                        <h3 className="font-serif text-2xl md:text-3xl font-medium text-white">
                                            {current.name}
                                        </h3>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-2xl">
                                    {current.description}
                                </p>

                                {/* Detail list */}
                                <ul className="space-y-3">
                                    {current.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-3 text-zinc-500 text-md">
                                            <span className="text-zinc-700 mt-0.5 shrink-0 select-none">—</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate(currentIndex + 1)}
                        disabled={currentIndex === phases.length - 1}
                        className="shrink-0 p-2 text-zinc-700 hover:text-white transition-colors duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
                        aria-label="Next phase"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Dot indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {phases.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => navigate(index)}
                            aria-label={`Go to phase ${index + 1}`}
                            className={`h-1 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? "w-8 bg-white"
                                    : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
