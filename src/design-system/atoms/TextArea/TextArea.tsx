import type { TextareaHTMLAttributes } from "react";
import type { FieldConfig } from "../../../features/lead/config/leadForm.types";
import styles from "./TextArea.module.css";

interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "value"> {
    field?: FieldConfig;
    value?: string;
}

export default function TextArea({ field, value = "", ...textareaProps }: TextAreaProps) {
    return (
        <textarea
            {...textareaProps}
            className={`${styles.textarea} ${textareaProps.className ?? ""}`.trim()}
            value={value}
            placeholder={textareaProps.placeholder ?? field?.placeholder}
            maxLength={textareaProps.maxLength ?? field?.validation?.maxLength}
        />
    );
}
