# Architecture Overview

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io
- **Database**: Supabase (Demo Mode)
- **Email**: SendGrid (Demo Mode)
- **Testing**: Jest (Unit), Playwright (E2E)
- **Deployment**: Vercel (Recommended)

## Directory Structure

- \`src/app\`: App Router pages and API routes.
- \`src/components\`: Reusable UI components.
  - \`ui\`: Base design system components (Button, Card, etc.).
  - \`layout\`: Global layout components (Header, Footer).
  - \`shared\`: Feature-specific shared components.
- \`src/lib\`: Utility functions and configurations (Sanity, Utils).
- \`src/sanity\`: Sanity schemas and seed data.
- \`packages/design-system\`: Design tokens and constants.
- \`docs\`: Project documentation.

## Data Flow

1.  **Content**: Fetched from Sanity CMS using GROQ queries in \`src/lib/sanity.ts\`. Fallback to \`seed-content.json\` if fetch fails (resilience pattern).
2.  **Forms**: Submitted to Next.js API routes (\`/api/leads\`, \`/api/careers/apply\`).
3.  **State**: Local state management with React Hooks. No global state library (Redux/Zustand) needed for this scope.

## Design System

The design system is built on Tailwind CSS, using a set of tokens defined in \`packages/design-system/tokens.ts\`. These tokens map to Tailwind's theme configuration, ensuring consistency across the application.
