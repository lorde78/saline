var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { title, description, difficultyLevel, tags, userId, bannerPicture, relType, relId } = req.body;
    let training = null;

    if (!relType) {
        training = await database.training.create({
            data: {
                title: title,
                userId: parseInt(userId),
                description: description,
                difficultyLevel: String(difficultyLevel),
                nbViews: 0,
                nbCompleted: 0,
                nbCertified: 0,
                bannerPicture: bannerPicture
            }
        })
    } else {
        training = await database.training.create({
            data: {
                title: title,
                userId: parseInt(userId),
                description: description,
                difficultyLevel: String(difficultyLevel),
                nbViews: 0,
                nbCompleted: 0,
                nbCertified: 0,
                bannerPicture: bannerPicture,
                classrooms: {
                    connect: {id: parseInt(relId)}
                }
            }
        })
    }

    res.json({
        message: 'training added',
        training
    });

});

router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deletetraining = await database.training.delete({
        where: {
            id: parseInt(id),
        },
    })
    res.json({
        message: 'training deleted',
    });
});

router.put('/', async function (req, res, next) {
    const { id, addToTraining, lessonsIdList } = req.query;
    let updateTraining = null;
    const decodedLessonsIdList = JSON.parse(lessonsIdList) ? JSON.parse(decodeURIComponent(lessonsIdList)) : ""

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id ');
    }

    if (!lessonsIdList) {
        updateTraining = await database.training.update({
            where: {
                id: parseInt(id),
            },
            data: req.body
        })
    } else {
        if(JSON.parse(addToTraining) === true) {
            updateTraining = await database.training.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    lessons: {
                        connect: decodedLessonsIdList.map(lessonId => {
                            return {id: parseInt(lessonId)}
                        })
                    }
                }
            })
        } else {
            updateTraining = await database.training.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    lessons: {
                        disconnect: {id: parseInt(lessonsIdList)}
                    }
                }
            })
        }
    }

    res.json({
        message: 'training updated'
    });
});

router.get('/', async function (req, res, next) {
    const { id } = req.query;
    let trainings = null;

    if (!id) {
        trainings = await database.training.findMany({
            include: {
                author: {
                    select: {
                        name: true,
                        firstName: true
                    }
                },
                lessons: true,
                classrooms: true
            }
        })
    } else {
        trainings = await database.training.findMany({
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
                lessons: true,
                classrooms: true
            }
        })
    }

    res.json({
        "trainings": trainings
    });
});

module.exports = router;
