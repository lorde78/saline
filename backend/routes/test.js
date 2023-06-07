var express = require('express');
var router = express.Router();

/* GET api test . */
router.get('/', function(req, res, next) {
    res.send('api test k');
});

module.exports = router;
