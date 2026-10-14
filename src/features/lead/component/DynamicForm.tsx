import FormField from "../../../design-system/molecules/FormField";
import { leadFormConfig } from "../config/leadForm.config";
import TextInput from "../../../design-system/atoms/TextInput/TextInput";
import Select from "../../../design-system/atoms/Select/Select";
import Checkbox from "../../../design-system/atoms/Checkbox/Checkbox";
import TextArea from "../../../design-system/atoms/TextArea/TextArea";
import useFormvalidation from "../../../hooks/useFormvalidation";
import type { FormValue } from "../../../hooks/useFormvalidation";
import styles from "./DynamicForm.module.css";

export default function DynamicForm() {
    const { value, setValue, errors, validateField, clearFieldError, validateForm } = useFormvalidation(leadFormConfig);

    const handleChange = (name: string, fieldValue: FormValue) => {
        setValue((currentValues) => ({
            ...leadFormConfig.reduce((updatedValues, field) => {
                // Remove values of fields that are no longer visible.
                if (field.condition?.field === name && field.condition.equals !== fieldValue) {
                    delete updatedValues[field.name];
                }

                return updatedValues;
            }, { ...currentValues, [name]: fieldValue }),
        }));

        // Clear errors for fields that are no longer visible.
        for (const dependentField of leadFormConfig) {
            if (dependentField.condition?.field === name && dependentField.condition.equals !== fieldValue) {
                clearFieldError(dependentField.name);
            }
        }
    };


    // Validate all fields before displaying the submitted values.
    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Stop submission if any visible field is invalid.
        if (!validateForm(value)) {
            return;
        }

        alert(JSON.stringify(value));
    };


    //validation error checks to disable the submit button
    const hasVisibleErrors = leadFormConfig.some((field) => (
        (!field.condition || value[field.condition.field] === field.condition.equals) &&
        Boolean(errors[field.name])
    ));

    return (
        <form className={styles.form} noValidate onSubmit={handleSubmit}>
            {leadFormConfig.map((field) => {
                if (field.condition && value[field.condition.field] !== field.condition.equals) {
                    return null;
                }

                // Link the input to its available hint and validation error for accessibility.
                const describedBy = [field.hint ? `${field.name}-hint` : "", errors[field.name] ? `${field.name}-error` : "",].filter(Boolean).join(" ") || undefined;

                // Check whether the field has a validation error.
                const ariaInvalid = Boolean(errors[field.name]);

                // Get the field's current value.
                const currentValue = value[field.name];

                // check for non string values.
                const textValue = typeof currentValue === "string" ? currentValue : "";

                let fieldControl: React.ReactNode;

                switch (field.type) {
                    case "text":
                    case "email":
                    case "tel":
                        fieldControl = (
                            <TextInput
                                id={field.name}
                                name={field.name}
                                type={field.type}
                                field={field}
                                value={textValue}
                                aria-invalid={ariaInvalid}
                                aria-describedby={describedBy}
                                onChange={(event) => handleChange(field.name, event.target.value)}
                                onBlur={(event) => validateField(field.name, event.target.value)}
                            />
                        );
                        break;
                    case "select":
                        fieldControl = (
                            <Select
                                id={field.name}
                                name={field.name}
                                options={field.options}
                                value={textValue}
                                required={field.required}
                                aria-invalid={ariaInvalid}
                                aria-describedby={describedBy}
                                onChange={(event) => handleChange(field.name, event.target.value)}
                                onBlur={(event) => validateField(field.name, event.target.value)}
                            />
                        );
                        break;
                    case "textarea":
                        fieldControl = (
                            <TextArea
                                id={field.name}
                                name={field.name}
                                field={field}
                                value={textValue}
                                aria-invalid={ariaInvalid}
                                aria-describedby={describedBy}
                                onChange={(event) => handleChange(field.name, event.target.value)}
                                onBlur={(event) => validateField(field.name, event.target.value)}
                            />
                        );
                        break;
                    case "checkbox":
                        fieldControl = (
                            <Checkbox
                                id={field.name}
                                name={field.name}
                                field={field}
                                checked={value[field.name] === true}
                                aria-invalid={ariaInvalid}
                                aria-describedby={describedBy}
                                onChange={(event) => {
                                    handleChange(field.name, event.target.checked);
                                    validateField(field.name, event.target.checked);
                                }}
                                onBlur={(event) => validateField(field.name, event.target.checked)}
                            />
                        );
                        break;
                    default:
                        fieldControl = null;
                }

                return (
                    <FormField field={field} key={field.name} error={errors[field.name]}>
                        {fieldControl}
                    </FormField>
                );
            })}
            <button className={styles.submitButton} type="submit" disabled={hasVisibleErrors} >
                Submit enquiry
            </button>
        </form>
    );
}
