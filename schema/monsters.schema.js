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
            id: { type: 'string' },
            name: { type: 'string' },
            difficulty: { type: 'integer' },
            experience: { type: 'integer' },
            hitpoints: { type: 'string' },
            damage: { type: 'string' },
            attacks: {
              type: 'array',
              items: { type: 'string' },
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
