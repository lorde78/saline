var express = require('express');
const { sendCookie, getCookie } = require('../../helpers/cookie.helper.ts');
const { database } = require('../../config/db.ts');
const bcrypt = require('bcrypt');
const { generateToken } = require('../../utils/jwt.utils.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { email, password, firstname, profilePicture, lastConnection, lastUpdate, phoneNumber, genre, nationality, name, birthdate, postalAddress } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('You must provide an email and a password.');
    }

    const existingUser = await database.user.findUnique({
        where: {
            email
        },
    });

    if (existingUser) {
        return res.status(404).json({ message: 'User already exist' });
    }

    const { accessToken } = generateToken({ email, password });

    const user = await database.user.create({
        data: {
            email: email,
            password: bcrypt.hashSync(password, 12),
            token: accessToken,
            name: name,
            firstname: firstname,
            profilePicture: profilePicture,
            lastUpdate: lastUpdate,
            lastConnection: lastConnection,
            phoneNumber: phoneNumber,
            genre: genre,
            nationality: nationality,
            birthdate: birthdate,
            postalAddress: postalAddress,
            roles: {},
            progress: {}
        }
    })

    res.json({
        'user': user,
    });
});

module.exports = router;
