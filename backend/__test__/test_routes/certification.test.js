const app = require("../../app");
const request = require('supertest');

describe('Post Certification', () => {
    it('should login user', async () => {
      const res = await request(app)
        .post('/certification')
        .send({
        name: "name",
        graduationDate: "graduationDate",
        userId: userId,
          userId: 1,
        })
        .expect(200)
    });
  });