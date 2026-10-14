import type { FieldConfig } from "../../../features/lead/config/leadForm.types";
import styles from "./TextInput.module.css";

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> {
    field?: FieldConfig;
    value?: string;
}

export default function TextInput({ field, value = "", ...inputProps }: TextInputProps) {
    return (
        <input
            {...inputProps}
            className={`${styles.input} ${inputProps.className ?? ""}`.trim()}
            id={inputProps.id}
            type={inputProps.type ?? "text"}
            name={inputProps.name}
            value={value}
            placeholder={field?.placeholder}
            required={field?.required}
            onChange={inputProps.onChange}
            onBlur={inputProps.onBlur}
        />
    );
}
