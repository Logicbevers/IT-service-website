export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        {
            name: 'quote',
            title: 'Quote',
            type: 'text',
            rows: 4,
        },
        {
            name: 'author',
            title: 'Author Name',
            type: 'string',
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Author Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
};
