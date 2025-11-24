export default {
    name: 'globalSettings',
    title: 'Global Settings',
    type: 'document',
    fields: [
        {
            name: 'siteName',
            title: 'Site Name',
            type: 'string',
        },
        {
            name: 'siteDescription',
            title: 'Site Description',
            type: 'text',
        },
        {
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string',
        },
        {
            name: 'contactPhone',
            title: 'Contact Phone',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'text',
        },
        {
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'platform', type: 'string', title: 'Platform' },
                        { name: 'url', type: 'url', title: 'URL' },
                    ],
                },
            ],
        },
    ],
};
