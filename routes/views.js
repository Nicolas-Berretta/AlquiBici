var express = require('express');
var router = express.Router();
var database = require('../utils/database');

/* GET home page. */ // TODO have routes to display views and equivalent ones to send data to the frontend
router.get('/', async function(req, res, next) {
    console.log(await database.collection("message").find().toArray());
    let messages = await database.collection("message").find().toArray();
    let data = [];
    messages.forEach(message => {
        data.push(JSON.stringify(message));
        console.log(JSON.stringify(message));
    });
    res.render('index', {data: data});
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
