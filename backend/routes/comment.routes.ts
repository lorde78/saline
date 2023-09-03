var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { content, userId, nbUpVotes, nbDownVotes, lessonId } = req.body;
    const comment = await database.comment.create({
        data: {
            content: content,
            userId: userId,
            nbUpVotes: nbUpVotes,
            nbDownVotes: nbDownVotes,
            lessonId: lessonId,
        }
    })

    res.json({
        message: 'Comment added',
    });

});

router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deleteComment = await database.comment.delete({
        where: {
            id: id,
        },
    })
    res.json({
        message: 'Comment deleted',
    });
});

router.put('/', async function (req, res, next) {
    const { id } = req.query;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id or lessonId.');
    }

    const updateComment = await database.comment.update({
        where: {
            id: id,
        },
        data: req.body
    })

    res.json({
        message: 'comment updated',
    });
});

router.get('/', async function (req, res, next) {
    const { id, lessonId } = req.query;
    if (!id || !lessonId) {
        res.status(400);
        throw new Error('You must provide an id.');
    }
    const comments = await database.comment.findMany({
        where: {
            OR: [
                { id: id, },
                { lessonId: lessonId },
            ],
        },
    })
    res.json({
        "comments": comments
    });
});

module.exports = router;
