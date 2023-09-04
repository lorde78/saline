const app = require("../../app");
const request = require('supertest');

describe('Post Comment', () => {
    it('should post Comment', async () => {
        const res = await request(app)
            .post('/comment')
            .send({
                content: "content",
                userId: parseInt(1),
                nbUpVotes: 7,
                nbDownVotes: 1,
                lessonId: 25,
            })
            .expect(200)
    });
});

// describe('Put Comment', () => {
//     it('should put Comment', async () => {
//         const res = await request(app)
//             .put('/comment')
//             .send({
//                 id: 1,
//                 content: "content x",
//             })
//             .expect(200)
//     });
// });

// describe('Delete Comment', () => {
//     it('should delete Comment', async () => {
//         const res = await request(app)
//             .delete('/comment')
//             .send({
//                 id: 1
//             })
//             .expect(200)
//     });
// });

// describe('get Comment', () => {
//     it('should get Comment', async () => {
//         const res = await request(app)
//             .get('/comment')
//             .send({
//                 id: 1
//             })
//             .expect(200)
//     });
// });