const app = require("../../app");
const request = require('supertest');

describe('Put Endpoints', () => {
    it('should login user', async () => {
      const res = await request(app)
        .put('/login')
        .send({
          email: "test12@test.com",
          password: "test12-new"
        })
        .expect(200)
    });
  });