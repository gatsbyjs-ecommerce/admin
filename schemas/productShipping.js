export default {
  title: 'Product Shipping',
  name: 'productShipping',
  type: 'object',
  fields: [
    {
      title: 'Price',
      name: 'price',
      type: 'number',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: ['India', 'United Kingdom', 'United States of America'],
        layout: 'dropdown',
      },
    },
  ],
};
