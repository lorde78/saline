const app = require("../../app");
const request = require('supertest');

describe('Post Answer', () => {
    it('should post Answer', async () => {
        const res = await request(app)
            .post('/answer')
            .send({
                content: "content",
                userId: 1,
                commentId: 1,
                validation: false
            })
            .expect(200)
    });
});

describe('Put Answer', () => {
    it('should put Answer', async () => {
        const res = await request(app)
            .put('/answer')
            .send({
                id: 1,
                content: "content x",
            })
            .expect(200)
    });
});

// describe('Delete Answer', () => {
//     it('should delete Answer', async () => {
//         const res = await request(app)
//             .delete('/answer')
//             .send({
//                 id: 1
//             })
//             .expect(200)
//     });
// });

// describe('get Answer', () => {
//     it('should get Answer', async () => {
//         const res = await request(app)
//             .get('/answer')
//             .send({
//                 id: 1
//             })
//             .expect(200)
//     });
// });