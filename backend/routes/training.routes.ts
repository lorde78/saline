var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { title, description, difficultyLevel, accesibility, price, duration, nbViews, nbCompleted } = req.body;
    // récupérer l'id de l'utilisateur connecté
    const userId = 1;
    const training = await database.training.create({
        data: {
            userId: userId,
            validation: false,
            title: title,
            description: description,
            difficultyLevel: difficultyLevel,
            accesibility: accesibility,
            price: price,
            duration: duration,
            nbViews: nbViews,
            nbCompleted: nbCompleted,
            nbrCertified: 0
        }
    })

    res.json({
        message: 'training added',
    });

});

router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deletetraining = await database.training.delete({
        where: {
            id: id,
        },
    })
    res.json({
        message: 'training deleted',
    });
});

router.put('/', async function (req, res, next) {
    const { id } = req.query;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id or lessonId.');
    }

    const updateTraining = await database.training.update({
        where: {
            id: id,
        },
        data: req.body
    })

    res.json({
        message: 'training updated',
    });
});

router.get('/', async function (req, res, next) {
    const { id } = req.query;
    if (!id) {
        res.status(400);
        throw new Error('You must provide an id ');
    }
    const trainings = await database.training.findMany({
        where: {
            trainingId: id,
        },
    })
    res.json({
        "trainings": trainings
    });
});

module.exports = router;
