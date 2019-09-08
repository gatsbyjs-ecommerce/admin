export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
      readOnly: true
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
      title: 'Customer',
      name: 'customer',
      type: 'reference',
      to: [{type: 'customer'}]
    },
    {
      title: 'Shipping Address',
      name: 'shippinAddress',
      type: 'address'
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
      type: 'string',
      readOnly: true
    },
  ]
}
