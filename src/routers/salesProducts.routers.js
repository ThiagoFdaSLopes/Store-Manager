const express = require('express');
const salesProducts = require('../controllers/salesProducts.controller');
const { validateProductsid, validateQuantity } = require('../middlewares');

const router = express.Router();

router.post('/', validateProductsid, validateQuantity, salesProducts.createNewSales);

router.get('/:id', salesProducts.findById);

router.get('/', salesProducts.findAllSales);

module.exports = router;