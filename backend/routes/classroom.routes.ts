var express = require('express');
// @ts-ignore
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
    const { id, addStudent, studentsIdList, addTraining, trainingsIdList } = req.query;
    const {title, description, bannerPicture } = req.body;
    let updateClassroom = null;
    let decodedStudentsIdList = null;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id or classroomId.');
    }

    if (!studentsIdList && !trainingsIdList) {
        updateClassroom = await database.classroom.update({
            where: {
                id: parseInt(id),
            },
            data: {
                title: title,
                description: description,
                bannerPicture: bannerPicture
            }
        })
    } else {
        if (addStudent) {
            if (JSON.parse(addStudent) === true) {
                decodedStudentsIdList = studentsIdList ? JSON.parse(decodeURIComponent(studentsIdList)) : ""
                updateClassroom = await database.classroom.update({
                    where: {
                        id: parseInt(id)
                    },
                    data: {
                        students: {
                            connect: decodedStudentsIdList.map(studentId => {
                                return {id: parseInt(studentId)}
                            })
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
                            disconnect: decodedStudentsIdList.map(studentId => {
                                return {id: parseInt(studentId)}
                            })
                        }
                    }
                })
            }
        }
        if (addTraining) {
            if (JSON.parse(addTraining) === true) {
                const decodedTrainingsIdList = trainingsIdList ? JSON.parse(decodeURIComponent(trainingsIdList)) : ""
                updateClassroom = await database.classroom.update({
                    where: {
                        id: parseInt(id)
                    },
                    data: {
                        trainings: {
                            connect: decodedTrainingsIdList.map(trainingId => {
                                return {id: parseInt(trainingId)}
                            })
                        }
                    }
                })
            } else {
                updateClassroom = await database.classroom.update({
                    where: {
                        id: parseInt(id)
                    },
                    data: {
                        trainings: {
                            disconnect: {id: parseInt(trainingsIdList)}
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

    if (!id && !userId) {
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
        if (id) {
            classrooms = await database.classroom.findMany({
                where: {
                    id: parseInt(id)
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
        if (userId) {
            classrooms = await database.classroom.findMany({
                where: {
                    students: {
                        some: {
                            id: parseInt(userId)
                        }
                    }
                },
                include: {
                    author: {
                        select: {
                            name: true,
                            firstName: true
                        }
                    }
                }
            })
        }
    }

    res.json({
        "classrooms": classrooms
    });
});

module.exports = router;
