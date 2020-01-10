export default {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
      name: 'personName',
      title: 'Person Name',
      type: 'string',
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'markdown',
      options: {
        minRows: 20,
      },
    },
    {
      title: 'Rating',
      name: 'rating',
      type: 'number',
    },
    {
      name: 'image',
      title: 'image',
      type: 'image',
    },
    {
      name: 'product',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
    },
  ],
};
