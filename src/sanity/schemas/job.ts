export default {
    name: 'job',
    title: 'Job Posting',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Job Title',
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
            name: 'department',
            title: 'Department',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'type',
            title: 'Employment Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Full-time', value: 'full-time' },
                    { title: 'Part-time', value: 'part-time' },
                    { title: 'Contract', value: 'contract' },
                    { title: 'Freelance', value: 'freelance' },
                ],
            },
        },
        {
            name: 'description',
            title: 'Job Description',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'requirements',
            title: 'Requirements',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'responsibilities',
            title: 'Responsibilities',
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
