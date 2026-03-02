"use client";
import { MessageCircle } from "lucide-react";

export default function AppButton({ btnText, packageName }: { btnText: string; packageName?: string }) {
  const handleClick = () => {
    if (packageName) {
      window.dispatchEvent(
        new CustomEvent("select-package", { detail: { packageName } })
      );
    }
  };

  return (
    <div className="animate-enter delay-300 flex justify-center">
      <a
        href="#contact"
        onClick={handleClick}
        className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-blue-600 rounded-full overflow-hidden transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
      >
        <span className="relative z-10 flex items-center gap-2">
          {btnText}
          <MessageCircle className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
    </div>
  )
}