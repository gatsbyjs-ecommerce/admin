export default {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      hidden: true
    },
    {
      name: 'resetPasswordToken',
      title: 'Reset Password Token',
      type: 'string',
      hidden: true
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['active', 'notActive', 'banned'],
        layout: 'dropdown'
      }
    },
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string'
    },
    {
      title: 'Address',
      name: 'address',
      type: 'address'
    },
  ]
}
