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
      },
      descriptions: {
        type: 'array',
        items: { type: 'string', minLength: 1, maxLength: 200 },
      },
      adjectives: {
        type: 'array',
        items: { type: 'string', minLength: 1, maxLength: 20 },
      },
    },
    additionalProperties: false,
  },
};
