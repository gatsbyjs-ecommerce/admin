export default {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string'
    },
    {
      name: 'resetPasswordToken',
      title: 'Reset Password Token',
      type: 'string'
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
  ]
}
