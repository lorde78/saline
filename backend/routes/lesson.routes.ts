var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { title, description, difficultyLevel, userId, bannerPicture } = req.body;
    const lesson = await database.lesson.create({
        data: {
            userId: parseInt(userId),
            title: title,
            description: description,
            difficultyLevel: String(difficultyLevel),
            nbViews: 0,
            nbCompleted: 0,
            bannerPicture: bannerPicture
        }
    })

    res.json({
        message: 'lesson added',
    });

});

router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deleteLesson = await database.lesson.delete({
        where: {
            id: parseInt(id),
        },
    })
    res.json({
        message: 'lesson deleted',
    });
});

router.put('/', async function (req, res, next) {
    const { id } = req.query;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id or lessonId.');
    }

    const updateLesson = await database.lesson.update({
        where: {
            id: parseInt(id),
        },
        data: req.body
    })

    res.json({
        message: 'lesson updated',
    });
});

router.get('/', async function (req, res, next) {
    const { id } = req.query;
    let lessons = null;

    if (!id) {
        lessons = await database.lesson.findMany({
            include: {
                author: {
                    select: {
                        name: true,
                        firstName: true
                    }
                }
            }
        })
    } else {
        lessons = await database.lesson.findMany({
            where: {
                id: parseInt(id),
            },
            include: {
                author: {
                    select: {
                        name: true,
                        firstName: true
                    }
                }
            }
        })
    }

    res.json({
        "lessons": lessons
    });
});

module.exports = router;
