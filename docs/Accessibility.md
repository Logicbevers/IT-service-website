# Accessibility (a11y)

We are committed to making our website accessible to everyone.

## Standards

We aim for WCAG 2.1 AA compliance.

## Implementation Details

- **Semantic HTML**: We use proper semantic tags (\`<main>\`, \`<section>\`, \`<article>\`, \`<nav>\`, \`<footer>\`).
- **Keyboard Navigation**: All interactive elements are focusable and navigable via keyboard.
- **Color Contrast**: Our color palette in \`tokens.ts\` is designed to meet contrast ratios.
- **ARIA Labels**: Used where visual context is not enough (e.g., icon-only buttons).
- **Alt Text**: All images require alt text. Sanity schemas enforce alt text for uploaded images.

## Testing

- **Automated**: Linting with \`eslint-plugin-jsx-a11y\`.
- **Manual**: Keyboard navigation testing.
