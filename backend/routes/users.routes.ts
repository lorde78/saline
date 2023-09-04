var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.get('/', async function (req, res, next) {
    const { id } = req.query;
    let users = null;

    if (!id) {
        users = await database.user.findMany()
    } else {
        users = await database.user.findMany({
            where: {
                userId: id,
            },
        })
    }

    res.json({
        "users": users
    });
});

module.exports = router;