const express = require('express');
const app = express();
const request = require('supertest'); 

describe('Post Endpoints', () => {
  it('should update user', async () => {
    const res = await request(app)
      .get('/login')
      .send({
        email: "test@test.com",
        firstName: "test is cool"
      });
    // expect(res.statusCode).toEqual(200)
    expect(res.status).toBe(200);
    // expect(res.body).toHaveProperty('message');
  });
});