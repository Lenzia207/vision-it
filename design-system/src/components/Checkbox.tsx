import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Label content shown next to the checkbox, can include links. */
  label: ReactNode;
}

/** Checkbox with an inline label - used for consent/privacy acceptance rows. */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label, id, className, ...props }, ref) => {
  const inputId = id ?? "checkbox";
  return (
    <div className={["vids-checkbox-row", className].filter(Boolean).join(" ")}>
      <input ref={ref} type="checkbox" id={inputId} {...props} />
      <label className="vids-checkbox-label" htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
});

Checkbox.displayName = "Checkbox";
