module.exports = {
  v1: {
    id: '/Names',
    type: 'object',
    properties: {
      pre: {
        type: 'array',
        items: { type: 'string', maxLength: 20 },
      },
      name: {
        type: 'array',
        items: { type: 'string', minLength: 1, maxLength: 20 },
      },
      sur: {
        type: 'array',
        items: { type: 'string', maxLength: 20 },
      },
    },
    additionalProperties: false,
    required: ['pre', 'name', 'sur']
  }
};
