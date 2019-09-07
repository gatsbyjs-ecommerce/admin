export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'string'
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'product'}
        }
      ]
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['pending', 'paid', 'failed'],
        layout: 'dropdown'
      }
    },
    {
      name: 'subTotal',
      title: 'Sub Total',
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
      type: 'string'
    },
  ]
}
