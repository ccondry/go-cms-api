const crypto = require('crypto')

function getHash (input) {
  return crypto
  .createHash('shake128', {outputLength: 6})
  .update(input, 'utf-8')
  .digest('base64')
  // remove any characters that are not letters, numbers, or underscores
  .replace(/\W/g, '')
}