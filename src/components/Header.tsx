import { Code2, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SwitchLanguage } from "./LanguageSwitcher";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto  flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
          <Image
            src="/genzy-logo.png"
            alt="GENZY logo"
            width={70}
            height={70}
            className="rounded-lg"
          />
         
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="#services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="#about" className="hover:text-white transition-colors">
            Hello World
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <SwitchLanguage />
        </div>
      </div>
    </nav>
  );
}
