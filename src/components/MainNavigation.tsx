"use client";

import { Link } from "@/app/i18n/routing";
import { usePathname } from "next/navigation";
import { SwitchLanguage } from "./LanguageSwitcher";
import { HomePageData } from "@/app/[locale]/home/sections/data/types/home-types";
import { useEffect, useState } from "react";

interface MainNavigationProps {
  data: HomePageData;
  locale: string;
}

export default function MainNavigation({ data, locale }: MainNavigationProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = data.main_navigation
      .map((item) => item.pageId.replace("#", ""))
      .filter(Boolean);

    const getActive = () => {
      const threshold = window.innerHeight * 0.4;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", getActive, { passive: true });
    getActive();
    return () => window.removeEventListener("scroll", getActive);
  }, [data.main_navigation]);

  return (
    <>
      {/* System Meta Bar — all screen sizes */}
      <div className="label-mono fixed top-0 left-0 w-full z-50 h-10 flex justify-between items-center px-4 md:px-8 bg-[rgba(11,12,16,0.9)] border-b border-(--border-faint) backdrop-blur-md">
        <span>SYS.VER // VISION.IT.28</span>
        <div className="flex items-center gap-4 md:gap-6">
          <span className="hidden sm:flex items-center gap-2">
            <span className="status-dot w-1.5 h-1.5 animate-none shadow-none" />
            {locale === "de" ? "VERFÜGBAR FÜR FREELANCE" : "AVAILABLE FOR FREELANCE"}
          </span>
          <SwitchLanguage />
        </div>
      </div>

      {/* Floating Pill Nav — desktop only (mobile uses BottomNavigation) */}
      <nav
        className={`hidden md:flex fixed z-40 top-11 left-1/2 -translate-x-1/2 items-center gap-1 p-1.5 mt-4 rounded-full bg-[rgba(26,29,39,0.75)] border border-white/10 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "shadow-none"
        }`}
      >
        {data.main_navigation.map((item, index) => {
          const isHomePage =
            pathname === "/" || pathname === "/en" || pathname === "/de";
          const linkHref = isHomePage
            ? `${item.pageId}`
            : (`/${item.pageId || item.page}` as string);
          const isLast = index === data.main_navigation.length - 1;
          const sectionId = item.pageId.replace("#", "");
          const isActive = sectionId === activeSection || (!activeSection && isLast);

          return (
            <Link
              key={index}
              href={linkHref}
              locale={locale}
              className={`text-sm font-medium rounded-full px-4 py-2 transition-all duration-300 ${
                isActive
                  ? "text-white bg-(--accent-purple) shadow-[0_0_16px_rgba(139,92,246,0.4)]"
                  : "text-(--text-300) bg-transparent hover:text-(--text-100) hover:bg-(--bg-surface-3)"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
