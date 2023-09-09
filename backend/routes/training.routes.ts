var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { title, description, difficultyLevel, tags, userId } = req.body;
    const training = await database.training.create({
        data: {
            title: title,
            userId: parseInt(userId),
            description: description,
            difficultyLevel: difficultyLevel.toString(),
            nbViews: 0,
            nbCompleted: 0,
            nbrCertified: 0,
            tags: tags || ""
        }
    })

    res.json({
        message: 'training added',
        training
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
        throw new Error('You must provide an id ');
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
    let trainings = null;

    if (!id) {
        trainings = await database.training.findMany()
    } else {
        trainings = await database.training.findMany({
            where: {
                trainingId: id,
            },
        })
    }

    res.json({
        "trainings": trainings
    });
});

module.exports = router;
