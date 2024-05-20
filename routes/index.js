var express = require('express');
var router = express.Router();
var database = require("../utils/database");

/* GET home page. */
router.get('/', async function(req, res, next) {
    console.log(await database.collection("message").findOne());
    res.render('index', { data: await database.collection("message").findOne() });
});

module.exports = router;
