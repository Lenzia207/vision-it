export interface RadioGroupOption<T extends string = string> {
  label: string;
  value: T;
}

export interface RadioGroupProps<T extends string = string> {
  /** Available options, rendered as pill-style buttons. */
  options: RadioGroupOption<T>[];
  /** Currently selected value. */
  value: T;
  /** Called with the newly selected value. */
  onChange: (value: T) => void;
  /** Accessible name for the group. */
  name?: string;
}

/** Single-select group of pill-shaped buttons - a lighter-weight alternative to native radios. */
export function RadioGroup<T extends string = string>({ options, value, onChange, name }: RadioGroupProps<T>) {
  return (
    <div className="vids-radio-group" role="radiogroup" aria-label={name}>
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            className={["vids-radio-option", selected ? "is-selected" : ""].filter(Boolean).join(" ")}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
