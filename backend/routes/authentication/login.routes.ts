var express = require('express');
const { generateToken } = require('../../utils/jwt.utils.ts');
const { sendCookie, getCookie } = require('../../helpers/cookie.helper.ts');
const { database } = require('../../config/db.ts');
const bcrypt = require('bcrypt');

var router = express.Router();

router.post('/', async function (req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('You must provide an email and a password.');
    }

    const existingUser = await database.user.findUnique({
        where: {
            email
        },
    });

    if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (!getCookie(req)) {
        const roles = existingUser.roles
        const { accessToken } = generateToken({ email, password, roles });

        // Create cookie
        const cookie = sendCookie(res, accessToken);

        return res.json({
            message: 'Login successful',
            token: accessToken,
            'cookie': getCookie(req)
        });

    }

    return res.json({
        message: 'Login successful !',
        token: getCookie(req),
        'cookie': getCookie(req)
    });

});

router.put('/', async function (req, res, next) {
    const { email, password } = req.body;
    if( password ) {
        const { accessToken } = generateToken({ email, password });
        req.body.token = accessToken;

        const hashedPassword = await bcrypt.hashSync(password, 12);
        req.body.password = hashedPassword;
    }
    const updateUser = await database.user.update({
        where: {
            email: email,
        },
        data: req.body,
    });

    return res.json({
        message: 'User updated',
    });
});

router.delete('/', async function (req, res, next) {
    const { id } = req.query;
    const deleteLesson = await database.user.delete({
        where: {
            id: id,
        },
    })
    return res.json({
        message: 'user deleted',
    });
});

module.exports = router;
