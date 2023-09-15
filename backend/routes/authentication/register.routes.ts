var express = require('express');
// @ts-ignore
const { sendCookie, getCookie } = require('../../helpers/cookie.helper.ts');
// @ts-ignore
const { database } = require('../../config/db.ts');
// @ts-ignore
const bcrypt = require('bcrypt');
// @ts-ignore
const { generateToken } = require('../../utils/jwt.utils.ts');

var router = express.Router();

router.post('/', async function (req, res, next) {
    let { email, password, firstname, profilePicture, phoneNumber, genre, nationality, name, birthdate, postalAddress, roles } = req.body;
    const roleDefault = ["ROLE_USER"];
    roles = roles ? roleDefault.concat(roles) : roleDefault;

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


    const user = await database.user.create({
        data: {
            email: email,
            password: bcrypt.hashSync(password, 12),
            name: name,
            firstname: firstname,
            profilePicture: profilePicture || "",
            phoneNumber: phoneNumber || "",
            genre: genre,
            nationality: nationality,
            birthdate: birthdate,
            postalAddress: postalAddress,
            roles: roles,
            progress: {}
        }
    })

    const userId = user.id
    const { accessToken } = generateToken({ userId, email, password, roles });

    // Create cookie
    const cookie = sendCookie(res, accessToken);

    res.json({
        message: 'Register successful',
        token: accessToken,
        cookie: getCookie(req)
    });
});

module.exports = router;
