"use client";

import Link from "next/link";
import { Wrench, Contact, Monitor, Hand } from "lucide-react";
import { ElementType } from "react";
import { HomePageData } from "@/app/[locale]/home/sections/data/types/home-types";

interface BottomNavigationProps {
  data: HomePageData;
}

export default function BottomNavigation({ data }: BottomNavigationProps) {
  const iconMap: Record<string, ElementType> = {
    services: Wrench,
    projects: Monitor,
    about: Hand,
    contact: Contact,
  };

  const getIcon = (href: string): ElementType | null => {
    const key = href.toLowerCase();
    for (const k of Object.keys(iconMap)) {
      if (key.includes(k)) return iconMap[k];
    }
    return null;
  };

  return (
    <div className="md:hidden flex w-full fixed bottom-6 left-1/2 justify-items-center transform -translate-x-1/2 z-50">
      <div className="flex justify-center items-center w-full gap-6 mx-2 px-4 py-2 bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-full shadow-2xl shadow-black/50">
         {data.main_navigation.map((item, index) => {
            const Icon = getIcon(item.href);
            return (
              <Link
                key={index}
                href={item.href}
                className="flex flex-col items-center text-zinc-400 text-[12px] justify-center hover:text-white transition-colors"
              >
                {Icon && <Icon className="w-4 h-4 mb-0.5" />}
                <span className="leading-none">{item.name}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
