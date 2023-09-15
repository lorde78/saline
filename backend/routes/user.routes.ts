var express = require('express');
// @ts-ignore
const { database } = require('../config/db.ts');

var router = express.Router();

router.get('/', async function (req, res, next) {
    const { id } = req.query;
    let users = null;

    if (!id) {
        users = await database.user.findMany({
            include: {
                attendingClassrooms: true
            }
        })
    } else {
        users = await database.user.findMany({
            where: {
                id: parseInt(id),
            },
            include: {
                attendingClassrooms: true
            }
        })
    }

    res.json({
        users
    });
});

router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deleteLesson = await database.user.delete({
        where: {
            id: parseInt(id),
        },
    })
    res.json({
        message: 'user deleted',
    });
});

router.put('/', async function (req, res, next) {
    const { id } = req.query;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id ');
    }

    const updateUser = await database.user.update({
        where: {
            id: parseInt(id),
        },
        data: req.body
    })

    res.json({
        message: 'user updated',
        updateUser,
        test: req.body
    });
});

module.exports = router;