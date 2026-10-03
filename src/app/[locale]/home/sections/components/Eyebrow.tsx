interface EyebrowProps {
  children: React.ReactNode;
  /** "lime" on teal sections, "teal" on light sections. */
  tone?: "teal" | "lime";
}

/** Small mono uppercase label above a section title. */
export default function Eyebrow({ children, tone = "teal" }: EyebrowProps) {
  return (
    <span
      className={`font-mono text-[0.78rem] font-medium uppercase tracking-[0.2em] ${
        tone === "lime" ? "text-(--lime)" : "text-(--teal-hover)"
      }`}
    >
      {children}
    </span>
  );
}
