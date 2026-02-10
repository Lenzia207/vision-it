"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wrench, Heart, Contact, Monitor, Hand } from "lucide-react";

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <div className="md:hidden flex w-full fixed bottom-6 left-1/2 justify-items-center transform -translate-x-1/2 z-50">
      <div className="flex justify-center items-center w-full gap-6 mx-2 px-8 py-2 bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-full shadow-2xl shadow-black/50">
        <Link
          href="#services"
          className="text-zinc-400 text-[12px]  justify-items-center text-center hover:text-white transition-colors"
        >
          <Wrench className="w-3 h-3" />
          Service
        </Link>
        <Link
          href="#projects"
          className="text-zinc-400 text-[12px] justify-items-center text-center hover:text-white transition-colors"
        >
          <Monitor className="w-3 h-3" />
          Projects
        </Link>
        <Link
          href="#about"
          className="text-zinc-400 text-[12px] justify-items-center text-center hover:text-white transition-colors"
        >
          <Hand className="w-3 h-3" />
          Hello World
        </Link>
        <Link
          href="#contact"
          className="text-zinc-400 text-[12px] justify-items-center text-center hover:text-white transition-colors"
        >
          <Contact className="w-3 h-3" />
          Contact
        </Link>
      </div>
    </div>
  );
}
