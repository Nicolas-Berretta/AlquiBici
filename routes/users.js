const express = require('express');
const router = express.Router();
const { registerService, loginService, getUserService} = require('../services/users');

router.post('/register', registerService);

router.post('/login', loginService);

router.get('/get/:email', getUserService);

module.exports = router;
