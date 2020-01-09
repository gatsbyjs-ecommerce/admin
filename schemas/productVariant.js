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
    // {
    //   title: 'Weight in grams',
    //   name: 'grams',
    //   type: 'number',
    // },
    {
      title: 'Color',
      name: 'color',
      type: 'string',
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
    // {
    //   title: 'Bar code',
    //   name: 'barcode',
    //   type: 'barcode'
    // }
  ],
};
