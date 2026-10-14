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

### Other Commands

```bash
npm run build
npm run lint
```
