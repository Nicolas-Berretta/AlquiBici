const express = require('express');
const router = express.Router();
const { registerService, loginService, getUserService, addFundsService} = require('../services/users');

router.post('/register', registerService);

router.post('/login', loginService);

router.get('/get/:email', getUserService);

router.post('/add-funds', addFundsService);

module.exports = router;
