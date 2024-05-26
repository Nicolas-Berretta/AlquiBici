const express = require('express');
const router = express.Router();
const { registerService, loginService, profileService } = require('../services/users');

router.post('/register', registerService);

router.post('/login', loginService);

// router.get('/profile', profileService);

module.exports = router;
