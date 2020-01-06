export default {
  name: 'product',
  title: 'Product',
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
      title: 'Is Featured',
      name: 'isFeatured',
      type: 'boolean',
    },
    {
      title: 'Variant',
      name: 'variant',
      type: 'productVariant',
    },
    {
      title: 'Other Variants',
      name: 'otherVariants',
      type: 'array',
      of: [
        {
          title: 'Variant',
          type: 'productVariant',
        },
      ],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'vendor',
      title: 'Vendor',
      type: 'reference',
      to: { type: 'vendor' },
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'localeString',
    },
    {
      name: 'device',
      title: 'Device',
      type: 'reference',
      to: { type: 'device' },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'category' },
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeBlockContent',
    },
    {
      title: 'Listing Order',
      name: 'listingOrder',
      type: 'number',
    },
    {
      title: 'Rating',
      name: 'rating',
      type: 'number',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['active', 'notActive'],
        layout: 'dropdown',
      },
    },
    {
      name: 'internalNotes',
      title: 'Internal Notes',
      type: 'text',
    },
  ],

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'defaultProductVariant.images[0]',
    },
  },
};
