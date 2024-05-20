var express = require('express');
var router = express.Router();
var dbConnection = require("../utils/database");

/* GET home page. */
router.get('/', async function(req, res, next) {
    res.render('index', { data: await dbConnection.collection("message").findOne() });
});

module.exports = router;
