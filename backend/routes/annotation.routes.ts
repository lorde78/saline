var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { content, userId, lessonId } = req.body;
    const annotation = await database.annotation.create({
        data: {
            content: content,
            userId: parseInt(userId),
            lessonId: lessonId,
            validation: false
        }
    })

    res.json({
        message: 'annotation added',
    });

});

router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deleteAnnotation = await database.annotation.delete({
        where: {
            id: parseInt(id),
        },
    })
    res.json({
        message: 'annotation deleted',
    });
});

router.put('/', async function (req, res, next) {
    const { id } = req.query;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id or lessonId.');
    }

    const updateannotation = await database.annotation.update({
        where: {
            id: parseInt(id),
        },
        data: req.body
    })

    res.json({
        message: 'annotation updated',
    });
});

router.get('/', async function (req, res, next) {
    const { id, lessonId } = req.query;
    if (!id || !lessonId) {
        res.status(400);
        throw new Error('You must provide an id or lessonId.');
    }
    const annotations = await database.annotation.findMany({
        where: {
            OR: [
                { id: parseInt(id), },
                { lessonId: parseInt(lessonId) },
            ],
        },
    })
    res.json({
        "annotations": annotations
    });
});

module.exports = router;
