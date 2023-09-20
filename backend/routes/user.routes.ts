var express = require('express');
// @ts-ignore
const { database } = require('../config/db.ts');
// @ts-ignore
const bcrypt = require('bcrypt');

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
                attendingClassrooms: true,
                progressLesson: true
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
    const { id, passChange, roleChange } = req.query;
    let updateUser = null;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id ');
    }

    if (!passChange && !roleChange) {
        updateUser = await database.user.update({
            where: {
                id: parseInt(id),
            },
            data: req.body
        })
    } else {
        if(passChange) {
            if (JSON.parse(passChange) === true) {
                let newPassword = req.body.password
                updateUser = await database.user.update({
                    where: {
                        id: parseInt(id),
                    },
                    data: {
                        password: bcrypt.hashSync(newPassword, 12)
                    }
                })
            }
        }
        if (roleChange) {
            if (JSON.parse(roleChange) === true) {
                let newRoles = req.body.roles.split(",")
                updateUser = await database.user.update({
                    where: {
                        id: parseInt(id),
                    },
                    data: {
                        roles: newRoles
                    }
                })
            }
        }
    }

    res.json({
        message: 'user updated',
        updateUser
    });
});

module.exports = router;