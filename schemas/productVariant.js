export default {
  title: 'Product Variant',
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
      title: 'Pricing',
      name: 'pricing',
      type: 'array',
      of: [
        {
          title: 'Pricing',
          type: 'productPricing',
        },
      ],
    },
    {
      title: 'SKU',
      description: 'https://www.zoho.com/in/inventory/sku-generator/',
      name: 'sku',
      type: 'string',
    },
    {
      title: 'Quantity',
      name: 'quantity',
      type: 'number',
    },
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
