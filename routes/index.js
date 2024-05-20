var express = require('express');
var router = express.Router();
var dbConnection = require("../utils/database");

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(dbConnection.db.collection("message").find());
    res.render('index', { data: dbConnection.get("message") });
});

module.exports = router;
