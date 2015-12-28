# Slack RPG Official Add-on Validator
This provides a validator class that can be used to validate an add-on.

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
