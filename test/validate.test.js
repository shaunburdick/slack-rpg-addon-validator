'use strict';

const fs = require('fs');
const test = require('tape');
const Validate = require(process.env.PWD + '/validate');

const sample = {
  locations: fs.readFileSync(process.env.PWD + '/sample/locations.json').toString(),
  monsters: fs.readFileSync(process.env.PWD + '/sample/monsters.json').toString(),
  names: fs.readFileSync(process.env.PWD + '/sample/names.json').toString(),
  weapons: fs.readFileSync(process.env.PWD + '/sample/weapons.json').toString(),
};

test('Validate Outer format', (assert) => {
  assert.throws(
    Validate.validateOuter.bind(null, 'foo'),
    /addon is not an object/,
    'Throw error if not an object'
  );

  assert.throws(
    Validate.validateOuter.bind(null, {}),
    /addon missing: type/,
    'Throw error if missing \'type\''
  );

  assert.throws(
    Validate.validateOuter.bind(null, {type: 'foo'}),
    /addon missing: version/,
    'Throw error if missing \'version\''
  );

  assert.throws(
    Validate.validateOuter.bind(null, {type: 'foo', version: 'v1'}),
    /addon missing: data/,
    'Throw error if missing \'data\''
  );

  assert.ok(
    Validate.validateOuter({type: 'foo', version: 'v1', data: {}}),
    'Return true for valid outer format'
  );

  assert.end();
});

test('Validate Inner Schema', (assert) => {
  for (let type in sample) {
    assert.ok(Validate.validateSchema(JSON.parse(sample[type])), `Sample: ${type}`);
  }

  assert.throws(
    Validate.validateSchema.bind(null, {type: 'foo', version: 'v1', data: {}}),
    /Unknown Schema Type: foo/,
    'Throw error if type is unknown'
  );

  assert.throws(
    Validate.validateSchema.bind(null, {type: 'locations', version: 'foo', data: {}}),
    /Unknown Schema Version: foo/,
    'Throw error if version is unknown'
  );

  assert.throws(
    Validate.validateSchema.bind(null, {type: 'locations', version: 'v1', data: { foo: 'bar' }}),
    /Schema Validation Errors/,
    'Throw error if JSON Schema fails to validate'
  );

  assert.end();
});

test('Check addon for errors', (assert) => {
  for (let type in sample) {
    assert.ok(Validate.check(sample[type]), `Sample as string: ${type}`);
    assert.ok(Validate.check(JSON.parse(sample[type])), `Sample as object: ${type}`);
  }

  assert.throws(
    Validate.check.bind(null, '{'),
    /Could not decode string into JSON/,
    'Throw error if unable to parse addon JSON'
  );

  assert.end();
});
