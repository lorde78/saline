var express = require('express');
// @ts-ignore
const { database } = require('../config/db.ts');
var router = express.Router();
// @ts-ignore
var { createUpload, readData } = require("../helpers/multer.helper.ts");
var upload = createUpload("/uploads/images/").upload;

// upload.single('bannerPicture')
router.post('/',  upload.fields([
    { name: 'title' },
    { name: 'userId' },
    { name: 'bannerPicture' },
    { name: 'description' },
    { name: 'difficultyLevel' }
]),async function (req, res, next) {
    let relType;
    let lesson = null;
    const title = req.body.title;
    const userId = req.body.userId;
    const bannerPicture = req.body.bannerPicture;
    const description = req.body.description;
    const difficultyLevel = req.body.difficultyLevel;

    //const pictureFile = req.file;
    //const pictureUrl = "http://localhost:3000/"+pictureFile.path.split("/public")[1];
    // testData = {
    //     title: fields.title,
    //     userId: fields.userId,
    //     description: fields.description,
    //     difficultyLevel: fields.difficultyLevel,
    //     file: files.file
    // }
    if (!relType) {
        // lesson = await database.lesson.create({
        //     data: {
        //         userId: parseInt(userId),
        //         title: title,
        //         description: description,
        //         difficultyLevel: String(difficultyLevel),
        //         nbViews: 0,
        //         nbCompleted: 0,
        //         bannerPicture: bannerPicture
        //     }
        // })
    } else {
        // lesson = await database.lesson.create({
        //     data: {
        //         userId: parseInt(userId),
        //         title: title,
        //         description: description,
        //         difficultyLevel: String(difficultyLevel),
        //         nbViews: 0,
        //         nbCompleted: 0,
        //         bannerPicture: bannerPicture,
        //         trainings: {
        //             connect: {id: parseInt(relId)}
        //         }
        //     }
        // })
    }
    res.json({
        message: 'lesson added',
        lesson,
        title,
        userId,
        bannerPicture,
        description,
        difficultyLevel,
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
    const { id, addToTraining, trainingId, updateSteps } = req.query;
    let updateLesson = null;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id or lessonId.');
    }

    if (!trainingId && !updateSteps) {
        updateLesson = await database.lesson.update({
            where: {
                id: parseInt(id),
            },
            data: req.body
        })
    } else {
        if (addToTraining) {
            if (JSON.parse(addToTraining) === true) {
                updateLesson = await database.lesson.update({
                    where: {
                        id: parseInt(id),
                    },
                    data: {
                        trainings: {
                            connect: {id: parseInt(trainingId)}
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
                            disconnect: {id: parseInt(trainingId)}
                        }
                    }
                })
            }
        }
        if (updateSteps) {
            if(JSON.parse(updateSteps) === true) {
                updateLesson = await database.lesson.update({
                    where: {
                        id: parseInt(id),
                    },
                    data: {
                        steps: req.body.steps
                    }
                })
            }
        }
    }

    res.json({
        message: 'lesson updated',
        updateLesson
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
