export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'product' },
        },
      ],
    },
    {
      name: 'skus',
      title: 'SKUs',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Customer',
      name: 'customer',
      type: 'reference',
      to: [{ type: 'customer' }],
    },
    {
      title: 'Shipping Address',
      name: 'shippingAddress',
      type: 'address',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['pending', 'paid', 'failed', 'shipped', 'delivered'],
        layout: 'dropdown',
      },
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
    },
    {
      name: 'shipping',
      title: 'Shipping',
      type: 'number',
    },
    {
      name: 'tax',
      title: 'Tax',
      type: 'number',
    },
    {
      name: 'total',
      title: 'Total',
      type: 'number',
    },
    {
      name: 'paymentId',
      title: 'Payment ID',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'deliveryNotes',
      title: 'Delivery Notes',
      type: 'text',
    },
    {
      name: 'internalNotes',
      title: 'Internal Notes',
      type: 'text',
    },
  ],
};
