/*
Full name (text, required)
Email (email, required, valid email)
Lead type (select: Individual or Company, required)
Company name (text). Show this only when Lead type is Company. Required in that case.
Phone (text, required, 10 digits)
Notes (textarea, optional, max 200 characters)
Consent (checkbox, required)
*/

import type { FieldConfig } from "./leadForm.types";

export const leadFormConfig: FieldConfig[] = [
    {
        name: "fullName",
        label: "Full name",
        type: "text",
        placeholder: "e.g. Prathvin Pinto",
        required: true,
        validation: {
            minLength: 2,
            maxLength: 100,
            message: "Enter a valid full name.",
        },
    },
    {
        name: "email",
        label: "Work email",
        type: "email",
        placeholder: "prathvinpinto@company.com",
        required: true,
    },
    {
        name: "leadType",
        label: "I am enquiring as",
        type: "select",
        required: true,
        options: [
            { label: "Individual", value: "individual" },
            { label: "Company", value: "company" },
        ],
    },
    {
        name: "companyName",
        label: "Company name",
        type: "text",
        placeholder: "Your organization",
        required: true,
        condition: {
            field: "leadType",
            equals: "company",
        },
    },
    {
        name: "phone",
        label: "Phone number",
        type: "tel",
        placeholder: "10-digit mobile number",
        required: true,
        validation: {
            pattern: "^[0-9]{10}$",
            message: "Enter a valid 10-digit phone number.",
        },
    },
    {
        name: "notes",
        label: "How can we help?",
        type: "textarea",
        placeholder: "Tell us a little about your requirements...",
        validation: {
            maxLength: 200,
            message: "Keep your message within 200 characters.",
        },
        layout: {
            span: 2,
        },
    },
    {
        name: "consent",
        label: "I agree to be contacted regarding this enquiry.",
        type: "checkbox",
        required: true,
        layout: {
            span: 2,
        },
    },
];