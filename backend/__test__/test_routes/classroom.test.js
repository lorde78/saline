const app = require("../../app");
const request = require('supertest');

describe('Post Classroom', () => {
    it('should post classroom', async () => {
        const res = await request(app)
            .post('/classroom')
            .send({
                title: "title",
                userId: 1,
                trainingId: 1
            })
            .expect(200)
    });
});

describe('Put Classroom', () => {
    it('should put classroom', async () => {
        const res = await request(app)
            .put('/classroom')
            .send({
                id: 1,
                title: "title",
            })
            .expect(200)
    });
});

// describe('Delete Classroom', () => {
//     it('should delete classroom', async () => {
//         const res = await request(app)
//             .delete('/classroom')
//             .send({
//                 id: 1
//             })
//             .expect(200)
//     });
// });

// describe('get Classroom', () => {
//     it('should get classroom', async () => {
//         const res = await request(app)
//             .get('/classroom')
//             .send({
//                 id: 1
//             })
//             .expect(200)
//     });
// });