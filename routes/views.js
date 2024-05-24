var express = require('express');
var router = express.Router();
var database = require('../utils/database');

/* GET home page. */ // TODO have routes to display views and equivalent ones to send data to the frontend
router.get('/', async function(req, res, next) {
    console.log(await database.collection("message").find().toArray());
    res.status(200).send("hey");
    res.render('index', { data: await database.collection("message").find().toArray()});
});

router.get('/bikes', async function(req, res, next) {
    const Bike = database.collection("bike");
    res.render('index', {data: await Bike.find().toArray()});
});

router.get('/users', async function(req,res, next) {
    const User = database.collection("user");
    res.render('index', {data: await User.find().toArray()});
})

module.exports = router;
