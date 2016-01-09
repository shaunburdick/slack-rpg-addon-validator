module.exports = {
  v1: {
    id: '/Races',
    type: 'object',
    properties: {
      races: {
        type: 'array',
        items: { type: '#/definitions/race' },
      },
    },
    additionalProperties: false,
    definitions: {
      race: {
        type: 'object',
        properties: {
          id: { type: 'string', minLength: 1 },
          name: { type: 'string', minLength: 1 },
          description: { type: 'string', minLength: 1 },
          statBonuses: {
            type: 'object',
            properties: {
              muscle: { type: 'integer', minimum: -10, maximum: 10 },
              speed:  { type: 'integer', minimum: -10, maximum: 10 },
              smarts: { type: 'integer', minimum: -10, maximum: 10 },
              charm:  { type: 'integer', minimum: -10, maximum: 10 },
            },
            required: [ 'muscle', 'speed', 'smarts', 'charm' ],
            additionalProperties: false,
          },
        },
        required: [ 'id', 'name', 'description', 'statBonuses' ],
        additionalProperties: false,
      },
    },
  },
};
