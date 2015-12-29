module.exports = {
  v1: {
    id: '/Weapons',
    type: 'object',
    properties: {
      types: {
        type: 'array',
        items: { type: '#/definitions/types' },
      },
      weapons: {
        type: 'array',
        items: { type: '#/definitions/weapons' },
      }
    },
    additionalProperties: false,
    required: ['weapons'],
    definitions: {
      types: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          phrases: {
            type: 'object',
            properties: {
              attack: {
                type: 'array',
                items: { type: 'string', minLength: 1, maxLength: 20 }
              },
              break: {
                type: 'array',
                items: { type: 'string', minLength: 1, maxLength: 20 }
              },
            },
            required: ['attack', 'break'],
            additionalProperties: false,
          },
        },
      },
      weapons: {
        type: 'object',
        properties: {
          id: { type: 'string', minLength: 1 },
          name: { type: 'string', minLength: 1, maxLength: 40 },
          type: { type: 'string', minLength: 1 },
          hands: { enum: [1,2] },
          damage: { type: 'string', pattern: '^(\\d+)d(\\d+)([\\+\\-]\\d+)?$' },
          rarity: { type: 'integer', minimum: 1 },
          fragility: { type: 'integer', minimum: 1 },
          wear: { type: 'integer', minimum: 1 }
        },
        required: ['id', 'name', 'type', 'hands', 'damage', 'rarity', 'fragility', 'wear'],
        additionalProperties: false,
      },
    },
  },
};
