import type { HTMLAttributes } from "react";

export type BadgeVariant = "solid" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Solid lime-tinted fill, or a transparent outline. */
  variant?: BadgeVariant;
}

/** Small uppercase status/category label. */
export function Badge({ variant = "solid", className, children, ...props }: BadgeProps) {
  const variantClass = variant === "outline" ? "vids-badge-outline" : "";
  const classes = ["vids-badge", variantClass, className].filter(Boolean).join(" ");
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
