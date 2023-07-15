export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [
        {
          type: 'image'
        },

      ],
      options: {
        hotspot: true,
      },

      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'listPrice',
      title: 'List Price',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      name: 'discountedPrice',
      title: 'Discounted Price',
      type: 'number',

    },

    {
      name: 'details',
      title: 'Details',
      type: 'string',

    },
    {
      name: 'featureProduct',
      title: 'Feature This Product',
      type: 'boolean',

    }
  ]
}