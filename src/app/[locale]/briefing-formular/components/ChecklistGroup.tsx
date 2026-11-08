import { ChangeEvent } from "react";
import CheckItem from "@/components/FormComponents/CheckItem";
import FieldGroup from "@/components/FormComponents/FieldGroup";
import InlineInput from "@/components/FormComponents/InlineInput";
import { BriefingFormState, CheckboxOption } from "../data/types/briefing-form-types";

/**
 * Renders a list of CheckItems from a CheckboxOption[] array.
 * onNestedCheck receives just (key, checked) — the caller binds the group via makeNestedCheck.
 */
export default function ChecklistGroup({
    options,
    groupValues,
    formState,
    onNestedCheck,
    onTextChange,
}: {
    options: CheckboxOption[];
    groupValues: Record<string, boolean>;
    formState: BriefingFormState;
    onNestedCheck: (key: string, checked: boolean) => void;
    onTextChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
    return (
        <FieldGroup>
            {options.map(opt => (
                <CheckItem
                    key={opt.key}
                    label={opt.label}
                    checked={!!groupValues[opt.key]}
                    onChange={v => onNestedCheck(opt.key, v)}
                >
                    {opt.inlineInputName && (
                        <InlineInput
                            name={opt.inlineInputName}
                            value={(formState as unknown as Record<string, string>)[opt.inlineInputName] ?? ""}
                            placeholder={opt.inlineInputPlaceholder}
                            onChange={onTextChange}
                        />
                    )}
                </CheckItem>
            ))}
        </FieldGroup>
    );
}
