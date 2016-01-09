module.exports = {
  v1: {
    id: '/Classes',
    type: 'object',
    properties: {
      classes: {
        type: 'array',
        items: { type: '#/definitions/class' },
      },
    },
    additionalProperties: false,
    definitions: {
      class: {
        type: 'object',
        properties: {
          id: { type: 'string', minLength: 1 },
          name: { type: 'string', minLength: 1 },
          description: { type: 'string', minLength: 1 },
          importantStat: { enum: [ 'muscle', 'speed', 'smarts', 'charm' ] },
        },
        required: [ 'id', 'name', 'description', 'statBonuses' ],
        additionalProperties: false,
      },
    },
  },
};
