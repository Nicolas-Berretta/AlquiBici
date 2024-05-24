const express = require('express');
const router = express.Router();
const { getBikesService , rentBikeService, createBikeService} = require('../services/bikes');

router.get('/', getBikesService);

router.post('/rent', rentBikeService);

router.post('/create', createBikeService);

module.exports = router;