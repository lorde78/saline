const sha256 = require('crypto-js/sha256');

function hashToken(token) {
//   return crypto.createHash('sha512').update(token).digest('hex');
  return sha256(token);
}


module.exports = { hashToken };

