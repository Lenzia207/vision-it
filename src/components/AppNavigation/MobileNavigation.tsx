"use client";

import { MouseEvent, useEffect } from "react";
import { MainNavigation as MainNavigationItem, NavigationLabels } from "@/app/[locale]/home/sections/data/types/home-types";

interface MobileNavigationProps {
  id: string;
  open: boolean;
  items: MainNavigationItem[];
  labels: NavigationLabels;
  locale: string;
  activeSection: string;
  onNavigate: (e: MouseEvent<HTMLAnchorElement>, pageId: string) => void;
  onClose: () => void;
}

/**
 * Fullscreen menu for compact layouts, opened from the toggle in MainNavigation.
 * Sits directly beneath the fixed header so the header's toggle stays usable.
 */
export default function MobileNavigation({
  id,
  open,
  items,
  labels,
  locale,
  activeSection,
  onNavigate,
  onClose,
}: MobileNavigationProps) {
  // Lock body scroll and allow Escape to close while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label={labels.menu}
      className="section-dark fixed inset-0 z-49 flex flex-col justify-between gap-8 px-6 pt-24 pb-8 overflow-auto min-[1060px]:hidden"
    >
      <nav aria-label={labels.mobileNav} className="flex flex-col">
        {items.map((item, i) => {
          const isActive = item.pageId.replace("#", "") === activeSection;
          return (
            <a
              key={item.pageId}
              href={`/${locale}${item.pageId}`}
              aria-current={isActive ? "location" : undefined}
              onClick={(e) => onNavigate(e, item.pageId)}
              className={`flex items-baseline gap-4 py-4 border-b border-white/12 font-mono text-[1.9rem] font-medium tracking-[-0.02em] no-underline ${
                isActive ? "text-(--lime)" : "text-white"
              }`}
            >
              <span className="text-xs font-bold tracking-widest text-(--lime)">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.name}
            </a>
          );
        })}
      </nav>

      <div className="flex flex-col gap-4">
        <a
          href={`/${locale}${labels.ctaPageId}`}
          onClick={(e) => onNavigate(e, labels.ctaPageId)}
          className="btn btn-primary whitespace-nowrap"
        >
          {labels.cta}
        </a>
        <a href={`mailto:${labels.email}`} className="font-mono text-[0.9rem] text-(--text-300)">
          {labels.email}
        </a>
      </div>
    </div>
  );
}
