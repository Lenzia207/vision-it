"use client";
import { MessageCircle } from "lucide-react";

interface AppButtonProps {
  btnText: string;
  packageName?: string;
  fullWidth?: boolean;
}

export default function AppButton({ btnText, packageName, fullWidth = false }: AppButtonProps) {
  const handleClick = () => {
    if (packageName) {
      window.dispatchEvent(new CustomEvent("select-package", { detail: { packageName } }));
    }
  };

  const wrapperClass = fullWidth
    ? "animate-enter delay-300"
    : "animate-enter delay-300 flex justify-center";
  const anchorBase =
    "group relative items-center justify-center px-8 py-3.5 text-base font-medium text-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95";
  const anchorClass = fullWidth ? `flex w-full ${anchorBase}` : `inline-flex ${anchorBase}`;

  return (
    <div className={wrapperClass}>
      <a href="#contact" onClick={handleClick} className={anchorClass} style={{ background: "var(--accent)", boxShadow: "0 0 24px var(--accent-glow)" }}>
        <span className="relative z-10 flex items-center gap-2">
          {btnText}
          <MessageCircle className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
    </div>
  );
}