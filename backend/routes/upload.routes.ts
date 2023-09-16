var express = require('express');
// @ts-ignore
const { database } = require('../config/db.ts');
var router = express.Router();
// @ts-ignore
var { createUpload } = require("../helpers/multer.helper.ts");

router.post('/', async function (req, res, next) {
    let directory = req.query.dir;
    let upload = createUpload(directory).upload;

    upload.single("fileToUpload")(req, res, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const pictureFile = req.file;
        const pictureUrl = process.env.BASE_URL+pictureFile.path.split("/public")[1];

        res.json({
            message: "file uploaded",
            pictureUrl
        })
    });
});

module.exports = router;