var express = require('express');
var router = express.Router();
var database = require('../utils/database');

/* GET home page. */ // TODO have routes to display views and equivalent ones to send data to the frontend
router.get('/', async function(req, res, next) {
    let messages = await database.collection("message").find().toArray();
    let data = [];
    messages.forEach(message => {
        data.push(JSON.stringify(message));
    });
    res.render('index', {data: data});
});

router.get('/bikes', async function(req, res, next) {
    const Bike = database.collection("bike");
    let bikes = await Bike.find().toArray();
    let data = [];
    bikes.forEach(bike => data.push(JSON.stringify(bike)));
    res.render('index', {data: data});
});

router.get('/users', async function(req,res, next) {
    const User = database.collection("user");
    let users = await User.find().toArray();
    let data = [];
    users.forEach(user => data.push(JSON.stringify(user)));
    res.render('index', {data: data});
})

module.exports = router;
