"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { HomePageData } from "@/app/[locale]/home/sections/data/types/home-types";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import { checkSectionLocation, createScrollVisibilityHandler, navigate, setItemActive } from "./navigation-service";
import MobileNavigation from "./MobileNavigation";

interface MainNavigationProps {
  data: HomePageData;
  locale: string;
}

// Below this width the inline links collapse into the fullscreen menu.
const WIDE_NAV_QUERY = "(min-width: 1060px)";

export default function MainNavigation({ data, locale }: MainNavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
  const labels = data.navigation_labels;

  // On home page load, check if we need to scroll to a section (cross-page nav)
  useEffect(() => {
    checkSectionLocation(isHomePage);
  }, [isHomePage]);
  useEffect(() => createScrollVisibilityHandler(setScrolled), []);
  useEffect(() => setItemActive(data, setActiveSection), [data]);

  // The fullscreen menu only exists on compact layouts — close it when widening.
  useEffect(() => {
    const mq = window.matchMedia(WIDE_NAV_QUERY);
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const handleNavigate = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, pageId: string) => {
      e.preventDefault();
      setMenuOpen(false);
      navigate(pageId.replace("#", ""), locale, isHomePage, router);
    },
    [isHomePage, router, locale]
  );

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
          solid ? "bg-(--teal)" : "bg-transparent"
        } ${scrolled && !menuOpen ? "border-white/10" : "border-transparent"}`}
      >
        <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-6 px-[clamp(20px,4vw,48px)] py-3.5">
          <a
            href={`/${locale}#top`}
            aria-label={labels.home}
            onClick={(e) => handleNavigate(e, "#top")}
            className="flex items-center px-3 py-1.5 bg-white"
          >
            <Image src="/images/logo-mark.svg" alt="VisionIT" width={31} height={28} className="block h-7 w-auto" priority />
          </a>

          <nav aria-label={labels.mainNav} className="hidden min-[1060px]:flex items-center gap-[30px] whitespace-nowrap">
            {data.main_navigation.map((item) => {
              const isActive = item.pageId.replace("#", "") === activeSection;
              return (
                <a
                  key={item.pageId}
                  href={`/${locale}${item.pageId}`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={(e) => handleNavigate(e, item.pageId)}
                  className={`font-mono text-xs font-medium uppercase tracking-[0.14em] no-underline py-1.5 border-b-2 transition-colors hover:text-(--lime) hover:border-(--lime) ${
                    isActive ? "text-(--lime) border-(--lime)" : "text-white border-transparent"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <a
              href={`/${locale}${labels.ctaPageId}`}
              onClick={(e) => handleNavigate(e, labels.ctaPageId)}
              className="btn btn-primary whitespace-nowrap px-[1.1rem]! py-[0.65rem]! text-xs!"
            >
              {labels.cta}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? labels.closeMenu : labels.openMenu}
            className="min-[1060px]:hidden flex items-center gap-3 min-h-11 px-1 py-2 bg-transparent border-0 cursor-pointer text-white font-mono text-[11px] font-semibold uppercase tracking-[0.16em]"
          >
            <span>{menuOpen ? labels.close : labels.menu}</span>
            <span aria-hidden="true" className="relative block w-[26px] h-3.5">
              <span
                className={`absolute left-0 top-0.5 w-[26px] h-0.5 bg-white transition-transform duration-300 ${
                  menuOpen ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute right-0 top-2.5 h-0.5 bg-(--lime) transition-[transform,width] duration-300 ${
                  menuOpen ? "w-[26px] -translate-y-1 -rotate-45" : "w-[18px]"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <MobileNavigation
        id="mobile-navigation"
        open={menuOpen}
        items={data.main_navigation}
        labels={labels}
        locale={locale}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onClose={closeMenu}
      />
    </>
  );
}
