
import { useState } from "react";
import type { FieldConfig } from "../features/lead/config/leadForm.types";

export type FormValue = string | boolean;
type FormValues = Record<string, FormValue>;
type FormErrors = Record<string, string>;

function getFieldError(field: FieldConfig, value: FormValue): string | undefined {
    const rules = field.validation;
    const text = typeof value === "string" ? value : "";

    if (field.required && (typeof value === "boolean" ? !value : !text.trim())) {
        return rules?.message ?? "This field is required.";
    }

    if (field.type === "email" && text && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
        return rules?.message ?? "Enter a valid email address.";
    }

    if (rules?.minLength && text.length < rules.minLength) {
        return rules.message ?? `Enter at least ${rules.minLength} characters.`;
    }

    if (rules?.maxLength && text.length > rules.maxLength) {
        return rules.message ?? `Enter no more than ${rules.maxLength} characters.`;
    }

    if (rules?.pattern && !new RegExp(rules.pattern).test(text)) {
        return rules.message ?? "Enter a valid value.";
    }

    return undefined;
}

export default function useFormValidation(config: FieldConfig[]) {
    const [value, setValue] = useState<FormValues>({});
    const [errors, setErrors] = useState<FormErrors>({});

    function validateField(name: string, fieldValue: FormValue) {
        const field = config.find((item) => item.name === name);
        if (!field) return;

        const error = getFieldError(field, fieldValue);

        setErrors((previous) => {
            const next = { ...previous };
            if (error) {
                next[name] = error;
            }
            else {
                delete next[name];
            }
            return next;
        });

        return error;
    }

    function clearFieldError(name: string) {
        setErrors((previous) => {
            if (!(name in previous)) return previous;
            const next = { ...previous };
            delete next[name];
            return next;
        });
    }

    function validateForm(values: FormValues) {
        const newErrors: FormErrors = {};

        for (const field of config) {
            if (
                field.condition &&
                values[field.condition.field] !== field.condition.equals
            ) continue;

            const fieldValue = values[field.name] ?? (field.type === "checkbox" ? false : "");
            const error = getFieldError(field, fieldValue);

            if (error) newErrors[field.name] = error;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    return { value, setValue, errors, validateField, clearFieldError, validateForm };
}
