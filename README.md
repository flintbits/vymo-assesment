# Vymo Assessment

A responsive, config-driven lead capture form built with React, TypeScript, and CSS Modules.

### Features
- Form fields rendered from a typed configuration.
- Conditional Company name field based on lead type.
- Validation on blur and submit.
- Reusable inputs and shared design tokens.
- Responsive desktop and mobile layouts.

### Getting Started

```bash
npm install
npm run dev
```

### Project Structure

- `src/design-system/` - Design tokens, reusable inputs, and `FormField`.
- `src/features/lead/config/` - Field definitions and types.
- `src/features/lead/component/` - Dynamic form rendering and form styles.
- `src/features/lead/layout/` - Page layout and responsive styles.
- `src/features/lead/pages/` - Lead capture page.
- `src/hooks/` - Form state and validation logic.

## Component Architecture

```mermaid
flowchart TD
    A["App"] --> B["LeadPage"]
    B --> C["LeadLayout"]
    C --> D["DynamicForm"]

    D --> E["FormField · Molecule"]

    subgraph DS["Design System"]
        E --> F["TextInput · Atom"]
        E --> G["Select · Atom"]
        E --> H["TextArea · Atom"]
        E --> I["Checkbox · Atom"]
    end

    J["Form Config"] -.-> D
    K["Validation Hook"] -.-> D
    L["Design Tokens"] -.-> DS
    L -.-> C

    classDef page fill:#E6EEFF,stroke:#6886C5,color:#172B4D
    classDef feature fill:#DDF4E4,stroke:#5B9B70,color:#173D25
    classDef shared fill:#FFF0CC,stroke:#C39B43,color:#573B08

    class A,B,C page
    class D,J,K feature
    class E,F,G,H,I,L shared
