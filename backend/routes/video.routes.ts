var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { title, url, lessonsId } = req.body;
    const video = await database.video.create({
        data: {
            title: title,
            url: url,
            lessonsId: lessonsId,
        }
    })

    res.json({
        message: 'video added',
    });

});

router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deletevideo = await database.video.delete({
        where: {
            id: id,
        },
    })
    res.json({
        message: 'video deleted',
    });
});

router.put('/', async function (req, res, next) {
    const { id } = req.query;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id or lessonId.');
    }

    const updateVideo = await database.video.update({
        where: {
            id: id,
        },
        data: req.body
    })

    res.json({
        message: 'video updated',
    });
});

router.get('/', async function (req, res, next) {
    const { id, lessonId } = req.query;
    if (!id || !lessonId) {
        res.status(400);
        throw new Error('You must provide an id or lessonId. ');
    }
    const videos = await database.video.findMany({
        where: {
            OR: [
                { videoId: id },
                { lessonId: id },
            ],
        },
    })
    res.json({
        "videos": videos
    });
});

module.exports = router;
