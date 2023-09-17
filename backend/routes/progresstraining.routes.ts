var express = require('express');
// @ts-ignore
const {database} = require('../config/db.ts');
// @ts-ignore
const bcrypt = require('bcrypt');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const {status, studentId, trainingId} = req.body;

    const progressTraining = await database.progressTraining.create({
        data: {
            status: status,
            student: {
                connect: {id: parseInt(studentId)}
            },
            training: {
                connect: {id: parseInt(trainingId)}
            }
        }
    })

    res.json({
        message: 'Progress from Lesson added',
        progressTraining
    });
})

router.get('/', async function (req, res, next) {
    const {id, trainingId, userId} = req.query;
    let progressTraining = null;

    if (!id && !trainingId && !userId) {
        progressTraining = await database.progressTraining.findMany()
    } else {
        if (id) {
            progressTraining = await database.progressTraining.findMany({
                where: {
                    id: id
                }
            })
        } else {
            if (trainingId) {
                progressTraining = await database.progressTraining.findMany({
                    where: {
                        trainingId: parseInt(trainingId),
                    }
                })
            }
            if (userId) {
                progressTraining = await database.progressTraining.findMany({
                    where: {
                        studentId: parseInt(userId),
                    }
                })
            }
        }
    }

    res.json({
        progressTraining
    });
});

router.delete('/', async function (req, res, next) {
    const {id} = req.query;
    const deleteProgressTraining = await database.progressTraining.delete({
        where: {
            id: parseInt(id),
        },
    })
    res.json({
        message: 'Progress from lesson deleted',
    });
});

router.put('/', async function (req, res, next) {
    const {id} = req.query;
    let updateProgressTraining = null;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id ');
    }

    updateProgressTraining = await database.progressTraining.update({
        where: {
            id: parseInt(id),
        },
        data: req.body
    })

    res.json({
        message: 'Progress from Lesson updated',
        updateProgressTraining
    });
});

module.exports = router;