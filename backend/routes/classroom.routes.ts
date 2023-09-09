var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { title, userId, bannerPicture, description } = req.body;
    const classroom = await database.classroom.create({
        data: {
            title: title,
            userId: parseInt(userId),
            bannerPicture: bannerPicture || "",
            description: description
        }
    })

    res.json({
        message: 'classroom added'
    });

});

router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deleteClassroom = await database.classroom.delete({
        where: {
            id: id,
        },
    })
    res.json({
        message: 'classroom deleted',
    });
});

router.put('/', async function (req, res, next) {
    const { id } = req.query;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id or classroomId.');
    }

    const updateclassroom = await database.classroom.update({
        where: {
            id: id,
        },
        data: req.body
    })

    res.json({
        message: 'classroom updated',
    });
});

router.get('/', async function (req, res, next) {
    const { id } = req.query;
    let classrooms = null;

    if (!id) {
        classrooms = await database.classroom.findMany()
    } else {
        classrooms = await database.classroom.findMany({
            where: {
                OR: [
                    {id: id},
                    {userId: id},
                ],
            },
        })
    }

    res.json({
        "classrooms": classrooms
    });
});

module.exports = router;
