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
                items: { type: 'string' }
              },
              break: {
                type: 'array',
                items: { type: 'string' }
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
          id: { type: 'string' },
          name: { type: 'string' },
          type: { type: 'string' },
          hands: { enum: [1,2] },
          damage: { type: 'string' },
          rarity: { type: 'integer' },
          fragility: { type: 'integer' },
          wear: { type: 'integer' }
        },
        required: ['id', 'name', 'type', 'hands', 'damage', 'rarity', 'fragility', 'wear'],
        additionalProperties: false,
      },
    },
  },
};
