const express = require('express');
const salesProducts = require('../controllers/salesProducts.controller');

const router = express.Router();

router.post('/', salesProducts.createNewSales);

module.exports = router;