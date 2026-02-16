"use client";

// import Image from "next/image";
import { Link } from "@/app/i18n/routing";
import { usePathname } from "next/navigation";
import { SwitchLanguage } from "./LanguageSwitcher";
import { HomePageData } from "@/app/[locale]/home/sections/data/types/home-types";

interface MainNavigationProps {
  data: HomePageData;
  locale: string;
}

export default function MainNavigation({ data, locale }: MainNavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-end justify-end my-4">
        {/* <Link
          href="/"
          locale={locale}
          className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
        >
          <Image
            src="/genzy-logo.png"
            alt="GENZY logo"
            width={70}
            height={70}
            className="rounded-lg"
          />
        </Link> */}

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {data.main_navigation.map((item, index) => {
            // Check if we're on the home page (/ or /en or /de)
            const isHomePage = pathname === "/" || pathname === "/en" || pathname === "/de";
            // On home page, use anchor links (#services). On other pages, use full path (e.g., /#services)
            // The Link component will automatically handle locale routing based on routing.ts
            const linkHref = isHomePage 
              ? `${item.pageId}` 
              : `/${item.pageId || item.page}` as string;
            
            return (
              <Link
                key={index}
                href={linkHref}
                locale={locale}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            );
          })}
          <SwitchLanguage />
        </div>
      </div>
    </nav>
  );
}
