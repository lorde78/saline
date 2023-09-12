var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { title, subscriptionType, subscriptionStatus, price, userId } = req.body;
    const subscription = await database.subscription.create({
        data: {
            userId: parseInt(userId),
            title: title,
            price: price,
            subscriptionType: subscriptionType,
            subscriptionStatus: subscriptionStatus,
            nbSubscribers: 0,
            nbCertified: 0
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
