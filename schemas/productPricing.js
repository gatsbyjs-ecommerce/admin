export default {
  title: 'Product Pricing',
  name: 'productPricing',
  type: 'object',
  fields: [
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
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: ['India', 'United Kingdom', 'Canada'],
        layout: 'dropdown',
      },
    },
  ],
};
