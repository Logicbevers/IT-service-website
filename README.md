# Premium IT Services & Consulting Website

A modern, high-performance corporate website built with Next.js 14, Tailwind CSS, and Sanity CMS.

## Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS.
- **Dynamic Content**: Powered by Sanity CMS.
- **Responsive Design**: Mobile-first approach with a custom design system.
- **SEO Optimized**: Automatic sitemap, robots.txt, and comprehensive metadata.
- **Performance**: Optimized images, fonts, and code splitting.
- **Testing**: Unit tests (Jest) and E2E tests (Playwright).

## Getting Started

1.  **Install Dependencies**:
    \`\`\`bash
    npm install
    \`\`\`

2.  **Run Development Server**:
    \`\`\`bash
    npm run dev
    \`\`\`

3.  **Run Tests**:
    \`\`\`bash
    npm test          # Unit tests
    npx playwright test # E2E tests
    \`\`\`

## Documentation

Detailed documentation is available in the \`docs\` directory:

- [Architecture](docs/Architecture.md)
- [CMS Setup](docs/CMS-Setup.md)
- [SEO Strategy](docs/SEO.md)
- [Accessibility](docs/Accessibility.md)
- [Leads Workflow](docs/Leads-Workflow.md)

## Environment Variables

Copy \`.env.example\` to \`.env.local\` and fill in your Sanity credentials.

\`\`\`bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
\`\`\`
