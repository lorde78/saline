var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { content, userId, commentId } = req.body;
    const answer = await database.answer.create({
        data: {
            content: content,
            userId: userId,
            commentId: commentId,
            validation: false
        }
    })

    res.json({
        message: 'Comment added',
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

router.get('/', async function (req, res, next) {
    const { id, commentId } = req.query;
    if (!id || !commentId) {
        res.status(400);
        throw new Error('You must provide an id.');
    }
    const answers = await database.answer.findMany({
        where: {
            OR: [
                { id: id, },
                { commentId: commentId },
              ],
          },
      })
    res.json({
        "answers": answers
    });
});

module.exports = router;
