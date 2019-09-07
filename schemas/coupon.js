export default {
  name: 'coupon',
  title: 'Coupon',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'code',
      title: 'Code',
      type: 'string',
      options: {
        maxLength: 10
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'image',
      title: 'image',
      type: 'image'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['active', 'expired'],
        layout: 'dropdown'
      }
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'expiryDate',
      title: 'Expiry Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
  ]
}
