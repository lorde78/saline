require('dotenv').config();
const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
  const payload = {
    userId: user.id,
    email: user.email, 
  }
  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    algorithm: 'HS256',
    expiresIn: '5m'
  });
}



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