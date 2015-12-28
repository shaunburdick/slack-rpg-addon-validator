module.exports = {
  v1: {
    id: '/Names',
    type: 'object',
    properties: {
      pre: {
        type: 'array',
        items: { type: 'string' },
      },
      name: {
        type: 'array',
        items: { type: 'string' },
      },
      sur: {
        type: 'array',
        items: { type: 'string' },
      },
    },
    additionalProperties: false,
    required: ['pre', 'name', 'sur']
  }
};
