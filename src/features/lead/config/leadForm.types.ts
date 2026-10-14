
export type FieldType =
    | "text"
    | "email"
    | "tel"
    | "select"
    | "textarea"
    | "checkbox";

export interface FieldOption {
    label: string;
    value: string;
}

export interface FieldConfig {
    name: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    hint?: string //change this from optional
    required?: boolean;
    autoComplete?: string;
    options?: FieldOption[];
    validation?: {
        pattern?: string;
        minLength?: number;
        maxLength?: number;
        message?: string;
    };
    condition?: {
        field: string;
        equals: string | boolean;
    };
    layout?: {
        span?: 1 | 2;
    };
}