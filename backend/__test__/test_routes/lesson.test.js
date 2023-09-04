const app = require("../../app");
const request = require('supertest');

describe('Post lesson Endpoints', () => {
  it('should lesson user', async () => {
    const res = await request(app)
      .post('/lesson')
      .send({
        userId: 1,
        title: 'title',
        description: "description",
        numberSteps: 1,
        difficultyLevel: 'difficultyLevel',
        price: 20,
        duration: 'duration',
        nbViews:    20,
        nbCompleted:    20,
      })
      .expect(200)
  });
});

describe('Put Lesson', () => {
    it('should put Lesson', async () => {
        const res = await request(app)
            .put('/lesson')
            .send({
                id: 1,
                description: "content x",
            })
            .expect(200)
    });
});

describe('Delete Lesson', () => {
    it('should delete Lesson', async () => {
        const res = await request(app)
            .delete('/lesson')
            .send({
                id: 1
            })
            .expect(200)
    });
});

// describe('get Lesson', () => {
//     it('should get Lesson', async () => {
//         const res = await request(app)
//             .get('/lesson')
//             .send({
//                 id: 1
//             })
//             .expect(200)
//     });
// });