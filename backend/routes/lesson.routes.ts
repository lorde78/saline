var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { title, description, numberSteps, difficultyLevel, price, duration, nbViews, nbCompleted, userId } = req.body;
    const lesson = await database.lesson.create({
        data: {
            userId: userId,
            validation: false,
            title: title,
            description: description,
            numberSteps: numberSteps,
            difficultyLevel: difficultyLevel,
            price: price,
            duration: duration,
            nbViews: nbViews,
            nbCompleted: nbCompleted
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

router.get('/', async function (req, res, next) {
    const { id } = req.query;
    if (!id) {
        res.status(400);
        throw new Error('You must provide an id ');
    }
    const lessons = await database.lesson.findMany({
        where: {
            lessonId: id,
        },
    })
    res.json({
        "lessons": lessons
    });
});

module.exports = router;
