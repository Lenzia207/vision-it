"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { HomePageData, MainNavigation as MainNavigationItem } from "@/app/[locale]/home/sections/data/types/home-types";
import { useEffect, useState, useCallback } from "react";
import { checkSectionLocation, createScrollRotationHandler, createScrollVisibilityHandler, navigate, setItemActive } from "./navigation-service";

interface MainNavigationProps {
  data: HomePageData;
  locale: string;
}

export default function MainNavigation({ data, locale }: MainNavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  const navigateToSection = useCallback(
    (sectionId: string) => {
      navigate(sectionId, locale, isHomePage, router);
    },
    [isHomePage, router, locale]
  );

  // On home page load, check if we need to scroll to a section (cross-page nav)
  useEffect(() => {
    checkSectionLocation(isHomePage);
  }, [isHomePage]);
  useEffect(() => createScrollVisibilityHandler(setScrolled), []);
  useEffect(() => setItemActive(data, setActiveSection), [data.main_navigation]);

  const handleNavigate = (sectionId: string) => {
    setOpenIndex(null);
    navigateToSection(sectionId);
  };

  const renderNavItem = (item: MainNavigationItem, index: number) => {
    const sectionId = item.pageId.replace("#", "");
    const isActive = sectionId === activeSection;
    const hasSubmenu = !!item.submenu?.length;
    const isOpen = openIndex === index;
    const isHighlighted = isActive || isOpen;
    const textColorClass = isHighlighted
      ? "text-(--lime-hover)"
      : scrolled
        ? "text-(--text-100)"
        : "text-white";
    const borderColorClass = isHighlighted ? "border-b-(--lime-hover)" : "border-b-transparent";
    const chevronColorClass = isHighlighted
      ? "border-(--lime-hover)"
      : scrolled
        ? "border-(--text-100)"
        : "border-white";

    if (!hasSubmenu) {
      return (
        <button
          key={index}
          type="button"
          className={`font-mono text-xs font-medium uppercase tracking-[0.16em] transition-colors py-2 border-b-2 cursor-pointer ${textColorClass} ${borderColorClass} hover:text-(--lime-hover) hover:border-b-(--lime-hover)`}
          onMouseEnter={() => setOpenIndex(null)}
          onClick={() => handleNavigate(sectionId)}
        >
          {item.name}
        </button>
      );
    }

    return (
      <div
        key={index}
        className={`group relative flex items-center gap-2 py-2 border-b-2 cursor-pointer ${borderColorClass}`}
        onMouseEnter={() => setOpenIndex(index)}
      >
        <span className={`font-mono text-xs font-medium uppercase tracking-[0.16em] transition-colors ${textColorClass} group-hover:text-(--lime-hover)`}>
          {item.name}
        </span>
        <span
          aria-hidden="true"
          className={`w-[5px] h-[5px] rotate-45 -translate-x-px -translate-y-px border-r-[1.5px] border-b-[1.5px] transition-colors ${chevronColorClass} group-hover:border-(--lime-hover)`}
        />
      </div>
    );
  };

  const openItem = openIndex !== null ? data.main_navigation[openIndex] : null;

  return (
    <div
      className="hidden sm:block fixed top-0 left-0 w-full z-50"
      onMouseLeave={() => setOpenIndex(null)}
    >
      <nav
        className={`grid grid-cols-[1fr_auto_1fr] items-center gap-8 px-4 md:px-8 py-4 transition-all duration-300 ${scrolled ? "bg-white shadow-[0_4px_24px_rgba(2,70,75,0.1)]" : "bg-transparent"
          }`}
      >
        <div className="flex items-center justify-end gap-6 md:gap-10">
          {data.main_navigation.slice(0, 2).map((item, index) => renderNavItem(item, index))}
        </div>

        <button
          type="button"
          aria-label={locale === "de" ? "Nach oben" : "Back to top"}
          onClick={() => handleNavigate("top")}
          className={`relative flex items-center justify-center shrink-0 transition-all duration-300 ${scrolled ? "w-9 h-9" : "w-14 h-9 px-2 py-1.5"
            }`}
        >
          <Image
            src="/images/logo-vision-it.svg"
            alt=""
            fill
            className="object-contain"
          />
        </button>

        <div className="flex items-center justify-start gap-6 md:gap-10">
          {data.main_navigation.slice(2).map((item, index) => renderNavItem(item, index + 2))}
        </div>
      </nav>

      {openItem?.submenu && (
        <div
          className="relative z-40 bg-white border-t border-[rgba(2,70,75,0.12)] shadow-[0_18px_40px_rgba(2,70,75,0.14)]"
        >
          <div className="grid grid-cols-[260px_1fr] gap-12 px-10 py-9 max-w-[1100px] mx-auto">
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-(--text-400)">
                {openItem.name}
              </span>
              {openItem.submenuDescription && (
                <p className="m-0 text-sm leading-relaxed text-(--text-300)">
                  {openItem.submenuDescription}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
              {openItem.submenu.map((sub, i) => (
                <button
                  key={i}
                  type="button"
                  className="grid grid-cols-[28px_1fr] items-baseline gap-3 px-4 py-3.5 -mx-4 border-b border-[rgba(2,70,75,0.08)] text-left transition-colors hover:bg-(--bg-surface-1)"
                  onClick={() => handleNavigate(sub.pageId.replace("#", ""))}
                >
                  <span className="font-mono text-[11px] font-bold tracking-[0.08em] text-(--text-400)">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="font-mono text-[15px] font-medium text-(--text-100)">
                      {sub.name}
                    </span>
                    {sub.description && (
                      <span className="text-[13px] text-(--text-300)">
                        {sub.description}
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* <div className="flex justify-end">
        <SwitchLanguage />
      </div> */}
    </div>
  );
}
