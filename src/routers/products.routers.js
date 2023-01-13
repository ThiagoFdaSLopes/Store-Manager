const express = require('express');
const productsController = require('../controllers/products.controller');
const { validateName } = require('../middlewares');

const router = express.Router();

router.post('/', validateName, productsController.createProduct);

router.get('/', productsController.findAll);

router.get('/:id', productsController.findById);

module.exports = router;