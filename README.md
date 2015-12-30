# Slack RPG Official Add-on Validator
[![Build Status](https://travis-ci.org/slack-rpg/addon-validator.svg?branch=master)](https://travis-ci.org/slack-rpg/addon-validator) [![npm version](https://badge.fury.io/js/slack-rpg-addon-validator.svg)](https://badge.fury.io/js/slack-rpg-addon-validator) [![Coverage Status](https://coveralls.io/repos/slack-rpg/addon-validator/badge.svg?branch=master&service=github)](https://coveralls.io/github/slack-rpg/addon-validator?branch=master)

This provides a validator class that can be used to validate a [Slack RPG](https://github.com/slack-rpg/slack-rpg)  [Add On](https://github.com/slack-rpg/addon-official).

## Example

```
const Validator = require('slack-rpg-addon-validator');

try {
  Validator.check(someJson);
} catch (error) {
  console.log(`someJson is not valid: ${error.message}`);
}
```

## Validator.check()
### Arguments
**addon**: {string|object} The JSON string/object to check

### Return
**true**: returns a boolean true if validation is correct

### Throws
**Error**: Throws an error if validation fails. `error.message` will contain what failed.
