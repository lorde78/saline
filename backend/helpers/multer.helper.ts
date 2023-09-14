var multer = require('multer');
var path = require('path');

// @ts-ignore
function createUpload(directory) {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname, `../public/${directory}`));
        },
        filename: function (req, file, cb) {
            const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, uniquePrefix + '-' + file.originalname);
        },
    });

    const upload = multer({storage: storage});

    return {
        upload
    };
}

module.exports = {
    createUpload
}