const { PrismaClient } = require('@prisma/client');

// @ts-ignore
const database = new PrismaClient();

module.exports = { database };
