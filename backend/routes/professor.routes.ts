var express = require('express');
// @ts-ignore
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { firstname, lastname, description, instruments, nationality, profilePicture, jobs, awards } = req.body;
    let professor = null;

    professor = await database.professor.create({
        data: {
            firstname: firstname,
            lastname: lastname,
            description: description,
            instruments: instruments,
            nationality: nationality,
            profilePicture: profilePicture,
            awards: awards,
            jobs: jobs
        }
    })

    res.json({
        message: 'Professor added',
        professor
    });
})

router.get('/', async function (req, res, next) {
    const { id } = req.query;
    let professors = null;

    if (!id) {
        professors = await database.professor.findMany({
            include: {
                video: {
                    include: {
                        lessons: true
                    }
                }
            }
        })
    } else {
        professors = await database.professor.findMany({
            where: {
                id: parseInt(id),
            },
            include: {
                video: {
                    include: {
                        lessons: true
                    }
                }
            }
        })
    }

    res.json({
        professors
    });
});

router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deleteProfessor = await database.professor.delete({
        where: {
            id: parseInt(id),
        },
    })
    res.json({
        message: 'Professor deleted',
    });
});

router.put('/', async function (req, res, next) {
    const { id } = req.query;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id ');
    }

    const updateProfessor = await database.professor.update({
        where: {
            id: parseInt(id),
        },
        data: req.body
    })

    res.json({
        message: 'Professor updated',
    });
});

module.exports = router;