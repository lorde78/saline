const app = require("../../app");
const request = require('supertest');

describe('Post training Endpoints', () => {
  it('should training ', async () => {
    const res = await request(app)
      .post('/training')
      .send({
        user: 1,
        validation: false,
        title: "title",
        description: "description",
        difficultyLevel: "difficultyLevel",
        accesibility: true,
        price: 20,
        duration: "duration",
        nbViews: 8,
        nbCompleted: 2,
        nbrCertified: 0
      })
      .expect(200)
  });
});

// describe('Put training', () => {
//     it('should put training', async () => {
//         const res = await request(app)
//             .put('/training')
//             .send({
//                 id: 1,
//                 description: "content x",
//             })
//             .expect(200)
//     });
// });

// describe('Delete training', () => {
//     it('should delete training', async () => {
//         const res = await request(app)
//             .delete('/training')
//             .send({
//                 id: 1
//             })
//             .expect(200)
//     });
// });

// describe('get training', () => {
//     it('should get training', async () => {
//         const res = await request(app)
//             .get('/training')
//             .send({
//                 id: 1
//             })
//             .expect(200)
//     });
// });