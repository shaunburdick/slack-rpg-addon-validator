'use strict';

const JSONValidator = require('jsonschema').Validator;

const schema = {
  names: require('./schema/names.schema'),
  weapons: require('./schema/weapons.schema'),
  locations: require('./schema/locations.schema'),
  monsters: require('./schema/monsters.schema'),
};

/**
 * Validate Common outer structure.
 *
 * @param {object} addon The addon json to validate.
 * @return {true}
 * @throws Error if outer structure is invalid
 */
function validateOuter(addon) {
  if (typeof addon !== 'object') {
    throw new TypeError('addon is not an object');
  }

  ['type', 'version', 'data'].forEach((property) => {
    if (!addon.hasOwnProperty(property)) {
      throw new Error(`addon missing: ${property}`);
    }
  });

  return true;
}

/**
 * Validate an addon's schema.
 *
 * @param {object} addon The addon json to validate.
 * @return {true}
 * @throws Error if names structure is invalid
 */
function validateSchema(addon) {
  validateOuter(addon);

  if (!schema.hasOwnProperty(addon.type)) {
    throw new Error(`Unknown Schema Type: ${addon.type}`);
  }

  if (!schema[addon.type].hasOwnProperty(addon.version)) {
    throw new Error(`Unknown Schema Version: ${addon.version}`);
  }

  let v = new JSONValidator();
  let validateResult = v.validate(addon.data, schema[addon.type][addon.version]);

  if (validateResult.errors.length > 0) {
    const combinedErrors = validateResult.errors.reduce((prev, current) => {
      return prev.concat([current.message]);
    }, []);
    throw new Error(`Schema Validation Errors:\n${combinedErrors.join('\n')}`);
  }

  return true;
}

/**
 * Normalize, Detect Version, and Validate addon.
 *
 * @param {object|string} addon The json string/object to check
 * @return {true}
 * @throws Error if it cannot decode json or any validation events occur
 */
function check(addon) {
  if (typeof addon !== 'object') {
    try {
      addon = JSON.parse(addon);
    } catch (error) {
      throw new Error(`Could not decode string into JSON. Error: ${error.message}`);
    }
  }

  return validateSchema(addon);
}

module.exports = {
  schema,
  validateOuter,
  validateSchema,
  check,
};
