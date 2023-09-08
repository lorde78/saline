var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { title, description, numberSteps, difficultyLevel, price, duration, nbViews, nbCompleted, user, steps } = req.body;
    const lesson = await database.lesson.create({
        data: {
            userId: user,
            title: title,
            description: description,
            numberSteps: numberSteps,
            difficultyLevel: difficultyLevel,
            price: price,
            duration: duration,
            nbViews: nbViews,
            nbCompleted: nbCompleted,
            steps: steps
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
            id: id,
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
            id: id,
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
        lessons = await database.lesson.findMany()
    } else {
        lessons = await database.lesson.findMany({
            where: {
                lessonId: id,
            },
        })
    }

    res.json({
        "lessons": lessons
    });
});

module.exports = router;
