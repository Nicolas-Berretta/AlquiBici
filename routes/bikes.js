const express = require('express');
const router = express.Router();
const { getBikesService , rentBikeService, createBikeService, getBikeService } = require('../services/bikes');

router.get('/', getBikesService);

router.get('/get/:bikeId', getBikeService);

router.post('/rent', rentBikeService);

router.post('/create', createBikeService);

module.exports = router;