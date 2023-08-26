const { database } = require('../config/db.ts');

function findUserByEmail(email) {
  return database.user.findUnique({
    where: {
      email,
    },
  });
}

module.exports = {
    findUserByEmail
  };
