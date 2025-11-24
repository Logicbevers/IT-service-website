export default {
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'client',
            title: 'Client Name',
            type: 'string',
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text',
            rows: 3,
        },
        {
            name: 'challenge',
            title: 'The Challenge',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'solution',
            title: 'The Solution',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'results',
            title: 'The Results',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{ type: 'image' }],
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
    ],
};
