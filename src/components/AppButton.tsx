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
    " btn btn-primary ";
  const anchorClass = fullWidth ? `flex w-full ${anchorBase}` : `inline-flex ${anchorBase}`;

  return (
    <div className={wrapperClass}>
      <a href="#contact" onClick={handleClick} className={anchorClass}>
        <span className="relative z-10 flex items-center gap-2">
          {btnText}
          <MessageCircle className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </span>
        {/* <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
      </a>
    </div>
  );
}