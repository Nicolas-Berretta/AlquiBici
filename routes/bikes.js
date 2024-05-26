const express = require('express');
const router = express.Router();
const { getBikesService , rentBikeService, createBikeService, getBikeService, returnBikeService } = require('../services/bikes');

router.get('/', getBikesService);

router.get('/get/:bikeId', getBikeService);

router.post('/rent', rentBikeService);

router.post('/create', createBikeService);

router.post('/return', returnBikeService)

module.exports = router;