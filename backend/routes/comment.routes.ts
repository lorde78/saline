var express = require('express');
// @ts-ignore
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { content, userId, videoId } = req.body;
    const comment = await database.comment.create({
        data: {
            content: content,
            userId: parseInt(userId),
            nbUpvotes: 0,
            nbDownvotes: 0,
            videoId: parseInt(videoId),
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
            id: parseInt(id),
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
        throw new Error('You must provide an id.');
    }

    const updateComment = await database.comment.update({
        where: {
            id: parseInt(id),
        },
        data: req.body
    })

    res.json({
        message: 'comment updated',
    });
});

router.get('/', async function (req, res, next) {
    const { id, videoId } = req.query;
    let comments = null;
    
    if (!id && !videoId) {
        comments = await database.comment.findMany({
            include: {
                answer: true,
                user: true
            }
        })
    } else {
        comments = await database.comment.findMany({
            where: {
                OR: [
                    { id: parseInt(id), },
                    { videoId: parseInt(videoId) },
                ],
                include: {
                    answer: true,
                    user: true
                }
            },
        })
    }


    res.json({
        "comments": comments
    });
});

module.exports = router;
