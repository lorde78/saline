var express = require('express');
// @ts-ignore
const {database} = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const {title} = req.body;
    const tag = await database.tag.create({
        data: {
            title: title,
        }
    })

    res.json({
        message: 'tag added',
    });

});

router.delete('/', async function (req, res, next) {
    const {id} = req.query;
    const deletetag = await database.tag.delete({
        where: {
            id: parseInt(id),
        },
    })
    res.json({
        message: 'tag deleted',
    });
});

router.put('/', async function (req, res, next) {
    const {id} = req.query;

    const updatetag = await database.tag.update({
        where: {
            id: parseInt(id),
        },
        data: req.body
    })


    res.json({
        message: 'tag updated',
    });
});

router.get('/', async function (req, res, next) {
    const {id} = req.query;
    let tags = null;

    if (!id) {
        tags = await database.tag.findMany()
    } else {
        tags = await database.tag.findMany({
            where: {
                id: parseInt(id),
            },
        })
    }

    res.json({
        "tags": tags
    });
});

module.exports = router;
