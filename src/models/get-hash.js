const crypto = require('crypto')

function getHash (sub) {
  const hash = crypto
  .createHash('shake128', {outputLength: 6})
  .update(sub, 'utf-8')
  .digest('base64')
  .replace('+', '')
  return sub.split('@').shift().slice(0, 8) + hash
}

module.exports = getHash