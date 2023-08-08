import { getExtension, getImageDimensions } from '@sanity/asset-utils'
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
        }, validation: (rule) =>
            rule.custom((value) => {
                if (!value) {
                    return true
                }

                const filetype = getExtension(value.asset._ref)

                if (filetype !== 'jpg' && filetype !== 'png') {
                    return 'Image must be a JPG or PNG'
                }

                const { width, height } = getImageDimensions(value.asset._ref)

                if (width > 1280 || height > 720) {
                    return 'Image must be at less then 2.5MB or 1280*720px'
                }

                return true
            }),
    },
    {
        name: 'linkTo',
        title: 'Link To Url',
        type: 'url',

    },

    ],
};
