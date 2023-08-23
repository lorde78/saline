var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {


    const answer = await database.answer.create({
        data: {
            content: 'test',
            validation: false
        }
    })

    res.json({
        comment: answer
    });

});
router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deleteComment = await database.answer.delete({
        where: {
            id: id,
          },
    })
    res.json({
        message: 'Comment deleted',
    });
});

// router.put('/', async function (req, res, next) {

//     const updateAnswer = await database.answer.update({
//         where: {
//             email: 'viola@prisma.io',
//         },
//         data: {
//             name: 'Viola the Magnificent',
//         },
//     })

//     res.json({
//         message: 'Comment updated',
//     });
// });

router.get('/', async function (req, res, next) {
    const { id, comment_id } = req.query;
    if (!id || !comment_id) {
        res.status(400);
        throw new Error('You must provide an id.');
    }
    const answers = await database.answer.findMany({
        where: {
            OR: [
                { id: id, },
                { comment_id: comment_id },
              ],
          },
      })
    res.json({
        "answers": answers
    });
});

module.exports = router;
