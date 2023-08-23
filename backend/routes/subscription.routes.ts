var express = require('express');
const { database } = require('../config/db.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { title, subscriptionType, subscriptionStatus, price, nbSubscribers, userId } = req.body;
    const subscription = await database.subscription.create({
        data: {
            userId: userId,
            validation: false,
            title: title,
            price: price,
            subscriptionType: subscriptionType,
            subscriptionStatus: subscriptionStatus,
            nbSubscribers: nbSubscribers,
            nbrCertified: 0
        }
    })

    res.json({
        message: 'subscription added',
    });

});

router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deletesubscription = await database.subscription.delete({
        where: {
            id: id,
        },
    })
    res.json({
        message: 'subscription deleted',
    });
});

router.get('/', async function (req, res, next) {
    const { id, userId } = req.query;
    if (!id || !userId) {
        res.status(400);
        throw new Error('You must provide an id or userId. ');
    }
    const subscriptions = await database.subscription.findMany({
        where: {
            OR: [
                { subscriptionId: id },
                { userId: id },
              ],
          },
    })
    res.json({
        "subscriptions": subscriptions
    });
});

module.exports = router;
