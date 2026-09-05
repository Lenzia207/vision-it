import type { HTMLAttributes } from "react";

export type CardVariant = "glass" | "dark";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** `glass` is a soft light surface panel; `dark` is a bordered card that lifts on hover. */
  variant?: CardVariant;
}

/** Generic surface container - the base building block for content panels. */
export function Card({ variant = "glass", className, children, ...props }: CardProps) {
  const variantClass = variant === "dark" ? "vids-card-dark" : "vids-card-glass";
  const classes = ["vids-card", variantClass, className].filter(Boolean).join(" ");
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
