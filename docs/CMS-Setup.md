# CMS Setup (Sanity)

## Configuration

Sanity is configured in \`src/lib/sanity.ts\`.

- **Project ID**: Loaded from \`NEXT_PUBLIC_SANITY_PROJECT_ID\`.
- **Dataset**: Loaded from \`NEXT_PUBLIC_SANITY_DATASET\`.

## Schemas

Schemas are defined in \`src/sanity/schemas\`:

- \`globalSettings\`: Site-wide settings (name, contact info).
- \`service\`: Service offerings.
- \`solution\`: Industry solutions.
- \`caseStudy\`: Client success stories.
- \`job\`: Open career positions.
- \`blogPost\`: Insights and news.
- \`teamMember\`: Team profiles.
- \`testimonial\`: Client testimonials.

## Seeding Data

To seed the CMS with initial data:

1.  Ensure \`src/sanity/seed-content.json\` is up to date.
2.  (Optional) Create a script to import this JSON into Sanity using the Sanity CLI or API.
3.  Currently, the application falls back to this JSON file if the Sanity fetch fails, acting as a local "demo mode".
