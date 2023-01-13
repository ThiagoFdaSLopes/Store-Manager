const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsController.findAll);

router.get('/:id', productsController.findById);

module.exports = router;