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
    // {
    //   title: 'Variant',
    //   name: 'variant',
    //   type: 'productVariant',
    // },
    {
      name: 'vendor',
      title: 'Vendor',
      type: 'reference',
      to: { type: 'vendor' },
    },
    // {
    //   name: 'blurb',
    //   title: 'Blurb',
    //   type: 'localeString',
    // },
    {
      name: 'device',
      title: 'Devices',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'device' }],
        },
      ],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeBlockContent',
    },
    {
      title: 'Variants',
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
      title: 'Shipping Cost',
      name: 'shippingCost',
      type: 'number',
    },
    {
      title: 'Rating',
      name: 'rating',
      type: 'number',
    },
    {
      title: 'Listing Order',
      name: 'listingOrder',
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
