import IconLucide from "@/components/IconsLucide";

interface OverlayOnHoverProps {
  text: string;
  url?: string;
}

export default function OverlayOnHover({ text, url }: OverlayOnHoverProps) {
  return (
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[3px]" style={{ background: "rgba(6,7,10,0.7)" }}>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          style={{ background: "var(--accent)", boxShadow: "0 0 20px var(--accent-glow)" }}
        >
            {text}
        <IconLucide iconName="ArrowUpRight" className="w-4 h-4" />
      </a>) : null }
    </div>
  );
}
