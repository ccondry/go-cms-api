const crypto = require('crypto')

function getHash (input) {
  return crypto
  .createHash('shake128', {outputLength: 6})
  .update(input, 'utf-8')
  .digest('base64')
  .replace('+', '')
}