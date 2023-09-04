var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { title, percentage, startDate, endDate, discountStatus, userId, nbPurchases } = req.body;
    const discount = await database.discount.create({
        data: {
            userId: userId,
            title: title,
            percentage: percentage,
            startDate: startDate,
            endDate: endDate,
            discountStatus: discountStatus,
            nbPurchases: nbPurchases
        }
    })

    res.json({
        message: 'discount added',
    });

});

router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deletediscount = await database.discount.delete({
        where: {
            id: id,
        },
    })
    res.json({
        message: 'discount deleted',
    });
});

router.put('/', async function (req, res, next) {
    const { id } = req.query;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id or lessonId.');
    }

    const updateDiscount = await database.discount.update({
        where: {
            id: id,
        },
        data: req.body
    })

    res.json({
        message: 'discount updated',
    });
});

router.get('/', async function (req, res, next) {
    const { id, lessonId } = req.query;
    if (!id || !lessonId) {
        res.status(400);
        throw new Error('You must provide an id ');
    }
    const discounts = await database.discount.findMany({
        where: {
            OR: [
                { id: id, },
                { lessonId: lessonId },
            ],
        },
    })
    res.json({
        "discounts": discounts
    });
});

module.exports = router;
