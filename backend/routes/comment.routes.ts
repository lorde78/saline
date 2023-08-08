var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {


    const comment = await database.comment.create({
        data: {
            content: 'test',
            validation: false
        }
    })

    res.json({
        comment: comment
    });

});
router.delete('/', async function (req, res, next) {

    const deleteComment = await database.comment.delete({
        where: {
            content: 'content',
        },
    })
    res.json({
        message: 'Comment deleted',
    });
});

router.put('/', async function (req, res, next) {

    const updateAnswer = await database.comment.update({
        where: {
            email: 'viola@prisma.io',
        },
        data: {
            name: 'Viola the Magnificent',
        },
    })

    res.json({
        message: 'Comment updated',
    });
});

router.get('/', async function (req, res, next) {

    const comments = await database.comment.findMany({
        where: {
          content: {
            endsWith: 'test',
          },
        },
      })

    res.json({
        comments: comments
    });
});

module.exports = router;
