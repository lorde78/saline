var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { videoId, startTime, endTime } = req.body;
    const shortvideo = await database.shortvideo.create({
        data: {
            videoId: videoId,
            startTime: startTime,
            endTime: endTime,
        }
    })

    res.json({
        message: 'shortvideo added',
    });

});
router.put('/', async function (req, res, next) {
    const { id } = req.query;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id ');
    }

    const updateShortvideo = await database.shortvideo.update({
        where: {
            id: id,
        },
        data: req.body
    })

    res.json({
        message: 'shortvideo updated',
    });
});

router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deleteshortvideo = await database.shortvideo.delete({
        where: {
            id: id,
        },
    })
    res.json({
        message: 'shortvideo deleted',
    });
});

router.get('/', async function (req, res, next) {
    const { id } = req.query;
    if (!id) {
        res.status(400);
        throw new Error('You must provide an id ');
    }
    const shortvideos = await database.shortvideo.findMany({
        where: {
            shortvideoId: id,
        },
    })
    res.json({
        "shortvideos": shortvideos
    });
});

module.exports = router;
