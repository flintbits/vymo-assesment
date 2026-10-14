import type { FieldConfig } from "../../features/lead/config/leadForm.types";
import styles from "./FormField.module.css";

type FormFieldProps = {
    field: FieldConfig;
    error?: string;
    children: React.ReactNode;
};

export default function FormField({
    field,
    error,
    children,
}: FormFieldProps) {
    return (
        <div
            className={`${styles.field} ${field.layout?.span === 2 ? styles.fullWidth : ""} ${field.type === "checkbox" ? styles.checkboxField : ""}`.trim()}>


            {field.type === "checkbox" ? (
                <div className={styles.checkboxRow}>
                    {children}
                    <label className={styles.label} htmlFor={field.name}>
                        {field.label}
                    </label>
                </div>
            ) : (
                <>
                    <label className={styles.label} htmlFor={field.name}>
                        {field.label}
                    </label>
                    {children}
                </>
            )}

            {field.hint && (
                <p className={styles.hint} id={`${field.name}-hint`}>
                    {field.hint}
                </p>
            )}

            {error && (
                <p className={styles.error} id={`${field.name}-error`} role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}