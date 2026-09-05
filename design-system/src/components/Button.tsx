import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style: lime-filled primary CTA, or outlined secondary. */
  variant?: ButtonVariant;
}

/** VisionIT call-to-action button, in the brand's lime/teal styles. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, children, ...props }, ref) => {
    const variantClass = variant === "secondary" ? "vids-btn-secondary" : "vids-btn-primary";
    const classes = ["vids-btn", variantClass, className].filter(Boolean).join(" ");
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
