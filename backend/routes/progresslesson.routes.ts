var express = require('express');
// @ts-ignore
const {database} = require('../config/db.ts');
// @ts-ignore
const bcrypt = require('bcrypt');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { status, progress, urlEval, studentId, classroomId, lessonId } = req.body;
    let progressLesson = null;

    if (!classroomId) {
        progressLesson = await database.progressLesson.create({
            data: {
                status: status,
                progress: progress,
                urlEval: urlEval,
                student: {
                    connect: {id: parseInt(studentId)}
                },
                lesson: {
                    connect: {id: parseInt(lessonId)}
                }
            }
        })
    } else {
        progressLesson = await database.progressLesson.create({
            data: {
                status: status,
                progress: progress,
                urlEval: urlEval,
                student: {
                    connect: {id: parseInt(studentId)}
                },
                lesson: {
                    connect: {id: parseInt(lessonId)}
                },
                classroom: {
                    connect: {id: parseInt(classroomId)}
                }
            }
        })
    }

    res.json({
        message: 'Progress from Lesson added',
        progressLesson
    });
})

router.get('/', async function (req, res, next) {
    const {id} = req.query;
    let progressLesson = null;

    if (!id) {
        progressLesson = await database.progressLesson.findMany({})
    } else {
        progressLesson = await database.progressLesson.findMany({
            where: {
                id: parseInt(id),
            }
        })
    }

    res.json({
        progressLesson
    });
});

router.delete('/', async function (req, res, next) {
    const {id} = req.query;
    const deleteProgressLesson = await database.progressLesson.delete({
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
    let updateProgressLesson = null;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id ');
    }

    updateProgressLesson = await database.progressLesson.update({
        where: {
            id: parseInt(id),
        },
        data: req.body
    })

    res.json({
        message: 'Progress from Lesson updated',
        updateProgressLesson
    });
});

module.exports = router;