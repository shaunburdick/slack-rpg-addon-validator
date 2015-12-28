module.exports = {
  v1: {
    id: '/Locations',
    type: 'object',
    properties: {
      names: {
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
      },
      descriptions: {
        type: 'array',
        items: { type: 'string' },
      },
      adjectives: {
        type: 'array',
        items: { type: 'string' },
      },
    },
    additionalProperties: false,
  },
};
