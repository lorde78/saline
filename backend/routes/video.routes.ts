var express = require('express');
// @ts-ignore
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { title, url } = req.body;
    const video = await database.video.create({
        data: {
            title: title,
            url: url
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
            id: parseInt(id),
        },
    })
    res.json({
        message: 'video deleted',
    });
});

router.put('/', async function (req, res, next) {
    const { id, profId } = req.query;
    let updateVideo = null;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id ');
    }

    if (!profId) {
        updateVideo = await database.video.update({
            where: {
                id: parseInt(id),
            },
            data: req.body
        })
    } else {
        updateVideo = await database.video.update({
            where: {
                id: parseInt(id),
            },
            data: {
                professors: {
                    connect: {id: parseInt(profId)}
                }
            }
        })
    }

    res.json({
        message: 'video updated',
    });
});

router.get('/', async function (req, res, next) {
    const { id } = req.query;
    let videos = null;

    if (!id) {
        videos = await database.video.findMany({
            include: {
                lessons: true,
                professors: true,
                comments: {
                    include: {
                        user: true
                    }
                }
            }
        })
    } else {
        videos = await database.video.findMany({
            where: {
                    id: parseInt(id),
            },
            include: {
                lessons: true,
                professors: true,
                comments: {
                    include: {
                        user: true
                    }
                }
            }
        })
    }


    res.json({
        "videos": videos
    });
});

module.exports = router;
