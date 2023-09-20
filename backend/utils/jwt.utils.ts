require('dotenv').config();
const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
  const payload = {
    userId: user.userId,
    email: user.email,
    userRoles: user.roles,
  }
  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    algorithm: 'HS256',
    expiresIn: '5m'
  });
}


// @ts-ignore
function generateToken(user) {
  const accessToken = generateAccessToken(user);

  return {
    accessToken
  };
}

module.exports = {
  generateAccessToken,
  generateToken
};