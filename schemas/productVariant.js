export default {
  title: 'Product variant',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Color',
      name: 'color',
      type: 'color',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
    },
    {
      title: 'Discount Price',
      name: 'discountPrice',
      type: 'number',
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string',
    },
    // {
    //   title: 'Taxable',
    //   name: 'taxable',
    //   type: 'boolean'
    // },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
