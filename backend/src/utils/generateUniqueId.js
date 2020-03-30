const crypto = require('crypto');

module.exports = function generatorUniqueId() {
  return crypto.randomBytes(4).toString('HEX');
}