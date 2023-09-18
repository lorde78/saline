var express = require('express');
// @ts-ignore
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { title, target, rates_price, rates_time, access } = req.body;
    const subscription = await database.subscription.create({
        data: {
            title: title,
            rates_price: parseInt(rates_price),
            rates_time: rates_time,
            target: target,
            nbSubscribers: 0,
            nbCertified: 0,
            access: access
        }
    })

    res.json({
        message: 'subscription added',
        subscription: subscription
    });

});

router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deletesubscription = await database.subscription.delete({
        where: {
            id: parseInt(id),
        },
    })
    res.json({
        message: 'subscription deleted',
    });
});

router.put('/', async function (req, res, next) {
    const { id } = req.query;

    if (!id) {
        res.status(400);
        throw new Error('You must provide an id.');
    }

    const updateSubscription = await database.subscription.update({
        where: {
            id: parseInt(id),
        },
        data: req.body
    })

    res.json({
        message: 'subscription updated',
    });
});

router.get('/', async function (req, res, next) {
    const { id, userId } = req.query;
    let subscriptions = null;

    if (!id || !userId) {
        subscriptions = await database.subscription.findMany()
    } else {
        subscriptions = await database.subscription.findMany({
            where: {
                OR: [
                    { id: parseInt(id) },
                    { userId: parseInt(userId) },
                ],
            },
        })
    }
    
    res.json({
        subscriptions
    });
});

module.exports = router;
