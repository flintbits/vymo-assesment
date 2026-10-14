import type { FieldOption } from "../../../features/lead/config/leadForm.types";
import styles from "./Select.module.css";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options?: FieldOption[];
}

export default function Select({ options = [], value = "", ...selectProps }: SelectProps) {
    return (
        <select
            {...selectProps}
            className={`${styles.select} ${selectProps.className ?? ""}`.trim()}
            value={value}
        >
            <option value="">Select</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
