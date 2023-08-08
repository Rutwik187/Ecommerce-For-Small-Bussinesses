import { getExtension, getImageDimensions } from '@sanity/asset-utils'

export default {
    name: 'banner',
    title: 'Banner',
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
        validation: (rule) =>
            rule.custom((value) => {
                if (!value) {
                    return true
                }

                const filetype = getExtension(value.asset._ref)

                if (filetype !== 'jpg' && filetype !== 'png') {
                    return 'Image must be a JPG or PNG'
                }

                const { width, height } = getImageDimensions(value.asset._ref)

                if (width > 1280 || height > 960) {
                    return 'Image must be at less then 4.7MB or 1280*960px'
                }

                return true
            }),
    },
    {
        name: 'linkTo',
        title: 'Link to Url',
        type: 'url'
    }






    ],
};
