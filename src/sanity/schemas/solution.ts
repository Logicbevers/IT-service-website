export default {
    name: 'solution',
    title: 'Solution',
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
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            rows: 3,
        },
        {
            name: 'description',
            title: 'Full Description',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'icon',
            title: 'Icon Name',
            type: 'string',
            description: 'Lucide icon name (e.g., "Briefcase", "Globe")',
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
            name: 'features',
            title: 'Key Features',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'benefits',
            title: 'Benefits',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
        },
    ],
};
