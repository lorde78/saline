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
    const { id, addToTraining, trainingId } = req.query;
    let updateLesson = null;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id or lessonId.');
    }

    if (!trainingId) {
        updateLesson = await database.lesson.update({
            where: {
                id: parseInt(id),
            },
            data: req.body
        })
    } else {
        if (addToTraining === true) {
            updateLesson = await database.lesson.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    trainings: {
                        connect: { id: parseInt(trainingId) }
                    }
                }
            })
        } else {
            updateLesson = await database.lesson.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    trainings: {
                        disconnect: { id: parseInt(trainingId) }
                    }
                }
            })
        }
    }

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
                },
                trainings: true
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
                },
                trainings: true
            }
        })
    }

    res.json({
        "lessons": lessons
    });
});

module.exports = router;
