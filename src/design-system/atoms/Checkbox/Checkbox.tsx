import type { InputHTMLAttributes } from "react";
import type { FieldConfig } from "../../../features/lead/config/leadForm.types";
import styles from "./Checkbox.module.css";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "checked" | "value"> {
    field?: FieldConfig;
    checked?: boolean;
}

export default function Checkbox({ field, checked = false, ...inputProps }: CheckboxProps) {
    return (
        <input
            {...inputProps}
            className={`${styles.checkbox} ${inputProps.className ?? ""}`.trim()}
            type="checkbox"
            checked={checked}
            required={inputProps.required ?? field?.required}
        />
    );
}
