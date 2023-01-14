const express = require('express');
const productsController = require('../controllers/products.controller');
const { validateName } = require('../middlewares');

const router = express.Router();

router.put('/:id', validateName, productsController.updateProductName);

router.post('/', validateName, productsController.createProduct);

router.delete('/:id', productsController.deleteProductFromId);

router.get('/', productsController.findAll);

router.get('/:id', productsController.findById);

module.exports = router;