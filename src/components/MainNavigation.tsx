"use client";

import { Link } from "@/app/i18n/routing";
import { usePathname } from "next/navigation";
import { SwitchLanguage } from "./LanguageSwitcher";
import { HomePageData } from "@/app/[locale]/home/sections/data/types/home-types";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

interface MainNavigationProps {
  data: HomePageData;
  locale: string;
}

export default function MainNavigation({ data, locale }: MainNavigationProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8" style={{ height: "var(--nav-height)" }}>
        {/* Logo */}
        <Link
          href="/"
          locale={locale}
          className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
        >
          <h1 className="font-prompt font-bold text-xl" style={{ color: "var(--text-primary)" }}>
            Vision<span className="text-gradient-logo-IT">IT</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {data.main_navigation.map((item, index) => {
            const isHomePage =
              pathname === "/" || pathname === "/en" || pathname === "/de";
            const linkHref = isHomePage
              ? `${item.pageId}`
              : (`/${item.pageId || item.page}` as string);

            return (
              <Link
                key={index}
                href={linkHref}
                locale={locale}
                className="text-sm font-medium transition-colors cursor-pointer"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {item.name}
              </Link>
            );
          })}

          <SwitchLanguage />

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white rounded-full transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
            style={{
              background: "var(--accent)",
              boxShadow: "0 0 20px var(--accent-glow)",
            }}
          >
            {locale === "de" ? "Projekt starten" : "Start a Project"}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
