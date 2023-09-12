var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { title, userId, bannerPicture, description } = req.body;
    const classroom = await database.classroom.create({
        data: {
            title: title,
            userId: parseInt(userId),
            bannerPicture: bannerPicture || "",
            description: description
        }
    })

    res.json({
        message: 'classroom added',
        classroom
    });

});

router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deleteClassroom = await database.classroom.delete({
        where: {
            id: parseInt(id),
        },
    })
    res.json({
        message: 'classroom deleted',
    });
});

router.put('/', async function (req, res, next) {
    const { id, addStudent, studentId, addTraining, trainingId } = req.query;
    let updateClassroom = null;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id or classroomId.');
    }

    if (!studentId && !trainingId) {
        updateClassroom = await database.classroom.update({
            where: {
                id: parseInt(id),
            },
            data: req.body
        })
    } else {
        if (addStudent) {
            if (JSON.parse(addStudent) === true) {
                updateClassroom = await database.classroom.update({
                    where: {
                        id: parseInt(id)
                    },
                    data: {
                        students: {
                            connect: {id: parseInt(studentId)}
                        }
                    }
                })
            } else {
                updateClassroom = await database.classroom.update({
                    where: {
                        id: parseInt(id)
                    },
                    data: {
                        students: {
                            disconnect: {id: parseInt(studentId)}
                        }
                    }
                })
            }
        }
        if (addTraining) {
            if (JSON.parse(addTraining) === true) {
                updateClassroom = await database.classroom.update({
                    where: {
                        id: parseInt(id)
                    },
                    data: {
                        trainings: {
                            connect: {id: parseInt(trainingId)}
                        }
                    }
                })
            } else {
                updateClassroom = await database.classroom.update({
                    where: {
                        id: parseInt(id)
                    },
                    data: {
                        students: {
                            disconnect: {id: parseInt(trainingId)}
                        }
                    }
                })
            }
        }
    }

    res.json({
        message: 'classroom updated',
    });
});


router.get('/', async function (req, res, next) {
    const { id, userId } = req.query;
    let classrooms = null;

    if (!id) {
        classrooms = await database.classroom.findMany({
            include: {
                author: {
                    select: {
                        name: true,
                        firstName: true
                    }
                },
                students: true,
                trainings: true
            }
        })
    } else {
        classrooms = await database.classroom.findMany({
            where: {
                OR: [
                    {id: parseInt(id)},
                    {userId: parseInt(userId)},
                ],
            },
            include: {
                author: {
                    select: {
                        name: true,
                        firstName: true
                    }
                },
                students: true,
                trainings: true
            }
        })
    }

    res.json({
        "classrooms": classrooms
    });
});

module.exports = router;
