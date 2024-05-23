const express = require('express');
const router = express.Router();
const { getBikesService , rentBikeService } = require('../services/bikes');

router.get('/', getBikesService);

router.post('/rent', rentBikeService)

module.exports = router;