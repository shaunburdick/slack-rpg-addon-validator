module.exports = {
  v1: {
    id: '/Monsters',
    type: 'object',
    properties: {
      monsters: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string', minLength: 1 },
            name: { type: 'string', minLength: 1, maxLength: 40 },
            difficulty: { type: 'integer', minimum: 1, maximum: 20 },
            experience: { type: 'integer', minimum: 1 },
            hitpoints: { type: 'string', pattern: '^(\\d+)d(\\d+)([\\+\\-]\\d+)?$' },
            damage: { type: 'string', pattern: '^(\\d+)d(\\d+)([\\+\\-]\\d+)?$' },
            attacks: {
              type: 'array',
              items: { type: 'string', minLength: 1, maxLength: 20 },
            },
          },
          additionalProperties: false,
          required: ['id', 'name', 'difficulty', 'experience', 'hitpoints', 'damage'],
        },
      },
    },
    additionalProperties: false,
    required: ['monsters']
  },
};
