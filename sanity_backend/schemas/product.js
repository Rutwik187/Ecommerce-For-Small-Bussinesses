import { getExtension, getImageDimensions } from '@sanity/asset-utils'
import { createImageField } from "sanity-pills"

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
      name: 'quantityMass',
      title: 'quantity [also mention unit eg. kg, gm, liters]',
      type: 'string',

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
      title: 'List Price [MRP of Product]',
      type: 'number',

    },
    {
      name: 'discountedPrice',
      title: 'Discounted Price [Price after discounting]',
      type: 'number',
      validation: Rule => Rule.max(Rule.valueOfField('listPrice'))
    },

    {
      name: 'description',
      type: 'blockContent',
      title: 'Description',

    },
    {
      name: 'featureProduct',
      title: 'Feature This Product',
      type: 'boolean',

    }
  ]
}