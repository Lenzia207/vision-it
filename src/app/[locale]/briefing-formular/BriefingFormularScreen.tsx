"use client";

import { useState, FormEvent } from "react";
import BriefingFormularView from "./BriefingFormularView";
import { initialBriefingState } from "./data/briefing-initial-state";
import { BriefingFormData, BriefingFormState } from "./data/types/briefing-form-types";

interface BriefingFormularScreenProps {
    data: BriefingFormData;
    locale: string;
}

export default function BriefingFormularScreen({ data, locale }: BriefingFormularScreenProps) {
    const [formState, setFormState] = useState<BriefingFormState>(initialBriefingState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
    const [statusMessage, setStatusMessage] = useState("");

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleNestedCheck = <G extends keyof BriefingFormState>(
        group: G,
        key: string,
        checked: boolean
    ) => {
        setFormState(prev => ({
            ...prev,
            [group]: { ...(prev[group] as Record<string, boolean>), [key]: checked },
        }));
    };

    const handleRadio = (name: keyof BriefingFormState, value: string) => {
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleBoolCheck = (name: keyof BriefingFormState, checked: boolean) => {
        setFormState(prev => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const res = await fetch("/api/briefing", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formState),
            });
            const json = await res.json();
            if (json.success) {
                setSubmitStatus("success");
                setStatusMessage(data.successMessage);
                setFormState(initialBriefingState);
            } else {
                setSubmitStatus("error");
                setStatusMessage(data.errorMessage);
            }
        } catch {
            setSubmitStatus("error");
            setStatusMessage(data.errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <BriefingFormularView
            data={data}
            formState={formState}
            isSubmitting={isSubmitting}
            submitStatus={submitStatus}
            statusMessage={statusMessage}
            onTextChange={handleTextChange}
            onNestedCheck={handleNestedCheck}
            onRadio={handleRadio}
            onBoolCheck={handleBoolCheck}
            onSubmit={handleSubmit}
        />
    );
}