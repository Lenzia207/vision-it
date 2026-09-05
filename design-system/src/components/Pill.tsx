import type { HTMLAttributes } from "react";

export type PillVariant = "default" | "accent";

export interface PillProps extends HTMLAttributes<HTMLSpanElement> {
  /** Neutral surface pill, or a lime-accented one for highlighted tags. */
  variant?: PillVariant;
}

/** Rounded pill used for tags, tech-stack chips, and filter labels. */
export function Pill({ variant = "default", className, children, ...props }: PillProps) {
  const variantClass = variant === "accent" ? "vids-pill-accent" : "";
  const classes = ["vids-pill", variantClass, className].filter(Boolean).join(" ");
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
