var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { name, graduationDate, userId } = req.body;
    const certification = await database.certification.create({
        data: {
            name: name,
            graduationDate: graduationDate,
            userId: parseInt(userId),
        }
    })

    res.json({
        message: 'certification added',
    });

});

router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deleteCertification = await database.certification.delete({
        where: {
            id: parseInt(id),
        },
    })
    res.json({
        message: 'certification deleted',
    });
});

router.put('/', async function (req, res, next) {
    const { id } = req.query;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id or lessonId.');
    }

    const updateCertification = await database.certification.update({
        where: {
            id: parseInt(id),
        },
        data: req.body
    })

    res.json({
        message: 'certification updated',
    });
});

router.get('/', async function (req, res, next) {
    const { id, userId } = req.query;
    if (!id || !userId) {
        res.status(400);
        throw new Error('You must provide an id ');
    }
    const certifications = await database.certification.findMany({
        where: {
            OR: [
                { certificationId: parseInt(id) },
                { userId: parseInt(userId) },
            ],
        },
    })
    res.json({
        "certifications": certifications
    });
});

module.exports = router;
