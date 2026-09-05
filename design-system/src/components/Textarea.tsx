import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Field label shown above the textarea. */
  label: string;
  /** Shows a required marker next to the label. */
  required?: boolean;
}

/** Labeled multi-line text field in the VisionIT form style. */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, required, id, className, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="vids-field">
        <label className="vids-field-label" htmlFor={inputId}>
          {label}
          {required ? " *" : ""}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          required={required}
          className={["vids-textarea", className].filter(Boolean).join(" ")}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
