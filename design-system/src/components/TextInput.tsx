import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Field label shown above the input. */
  label: string;
  /** Shows a required marker next to the label. */
  required?: boolean;
}

/** Labeled single-line text input in the VisionIT form style. */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, required, id, className, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="vids-field">
        <label className="vids-field-label" htmlFor={inputId}>
          {label}
          {required ? " *" : ""}
        </label>
        <input
          ref={ref}
          id={inputId}
          required={required}
          className={["vids-input", className].filter(Boolean).join(" ")}
          {...props}
        />
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
