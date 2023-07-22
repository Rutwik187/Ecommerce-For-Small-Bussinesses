export default {
    name: 'brand',
    title: 'Brands',
    type: 'document',
    fields: [{
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required(),
    },
    {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
        },
        validation: Rule => Rule.required(),
    },





    ],
};
