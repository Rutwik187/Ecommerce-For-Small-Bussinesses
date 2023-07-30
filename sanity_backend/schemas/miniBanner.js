export default {
    name: 'miniBanner',
    title: 'Mini Banner',
    type: 'document',
    fields: [{
        name: 'title',
        title: 'Title',
        type: 'string',

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
    {
        name: 'linkTo',
        title: 'Link To Url',
        type: 'url',

    },

    ],
};
