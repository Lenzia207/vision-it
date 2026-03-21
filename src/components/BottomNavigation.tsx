"use client";

import { Link } from "@/app/i18n/routing";
import { HomePageData } from "@/app/[locale]/home/sections/data/types/home-types";
import { useState, useEffect } from "react";

interface BottomNavigationProps {
  data: HomePageData;
}

export default function BottomNavigation({ data }: BottomNavigationProps) {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <div
      className={`md:hidden fixed z-50 bottom-10 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-[120%] opacity-0"
      }`}
    >
      <nav className="flex items-center gap-1 p-1.5 rounded-full bg-[rgba(26,29,39,0.9)] border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {data.main_navigation.map((item, index) => {
          const isLast = index === data.main_navigation.length - 1;
          return (
            <Link
              key={index}
              href={item.pageId}
              className={`inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[0.78rem] font-semibold whitespace-nowrap no-underline transition-all duration-200 ${
                isLast
                  ? "text-white bg-(--accent-purple) shadow-[0_0_12px_rgba(139,92,246,0.4)]"
                  : "text-(--text-300) bg-transparent hover:text-(--text-100) hover:bg-(--bg-surface-3)"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
