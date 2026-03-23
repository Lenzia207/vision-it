"use client";

import { usePathname, useRouter } from "next/navigation";
import { HomePageData } from "@/app/[locale]/home/sections/data/types/home-types";
import { useState, useEffect, useCallback, useRef } from "react";
import { checkSectionLocation, createScrollVisibilityHandler, setItemActive } from "./AppNavigation/navigation-service";
interface BottomNavigationProps {
  data: HomePageData;
  locale: string;
}

export default function BottomNavigation({ data, locale }: BottomNavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
 
  const [activeSection, setActiveSection] = useState<string>("");
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  const navigateToSection = useCallback(
    (sectionId: string) => {
      if (isHomePage) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        sessionStorage.setItem("scrollTarget", sectionId);
        router.push(`/${locale}`);
      }
    },
    [isHomePage, router, locale]
  );

  // On home page load, check if we need to scroll to a section (cross-page nav)
  useEffect(() => {
    checkSectionLocation(isHomePage);
  }, [isHomePage]);
  useEffect(() => createScrollVisibilityHandler(setVisible), []);
  useEffect(() => setItemActive(data, setActiveSection), [data.main_navigation]);


  return (
    <div
      className={`md:hidden fixed z-50 bottom-10 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-[120%] opacity-0"
      }`}
    >
      <nav className="flex items-center gap-1 p-1.5 rounded-full bg-[rgba(26,29,39,0.9)] border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {data.main_navigation.map((item, index) => {
          const isFirst = index === 0;
          const sectionId = item.pageId.replace("#", "");
          const isActive = sectionId === activeSection || (!activeSection && isFirst);

          return (
            <button
              key={index}
              type="button"
              className={`inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[0.78rem] font-semibold whitespace-nowrap no-underline transition-all duration-200 ${
                isActive
                  ? "text-white bg-(--accent-purple) shadow-[0_0_12px_rgba(139,92,246,0.4)]"
                  : "text-(--text-300) bg-transparent hover:text-(--text-100) hover:bg-(--bg-surface-3)"
              }`}
              onClick={() => navigateToSection(sectionId)}
            >
              {item.name}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
