export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description:
        'Describe your portfolio for search engines and social media.',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your portfolio.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'homeHeroTitle',
      type: 'text',
      title: 'Home Hero Title',
    },
    {
      name: 'homeHeroSubTitle',
      type: 'text',
      title: 'Home Hero SubTitle',
    },
    {
      name: 'homeHeroImage',
      title: 'Home Hero Image',
      type: 'image',
    },
    {
      title: 'Home Hero Text Color',
      name: 'homeHeroTextColor',
      type: 'color',
    },
    {
      title: 'Home Hero Link',
      name: 'homeHeroLink',
      type: 'string',
    },
    {
      name: 'homeAboutUs',
      type: 'text',
      title: 'Home About Us',
    },
    {
      name: 'facebook',
      type: 'string',
      title: 'Facebook URL',
    },
    {
      name: 'twitter',
      type: 'string',
      title: 'Twitter URL',
    },
    {
      name: 'instagram',
      type: 'string',
      title: 'Instagram URL',
    },
    {
      name: 'pinterest',
      type: 'string',
      title: 'Pinterest URL',
    },
    {
      name: 'telephone',
      type: 'string',
      title: 'Telephone',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'productDeliveryInfo',
      title: 'Product Delivery Info',
      type: 'markdown',
      options: {
        minRows: 20,
      },
    },
    {
      name: 'productShippingReturns',
      title: 'Product Shipping Returns',
      type: 'markdown',
      options: {
        minRows: 20,
      },
    },
  ],
};
