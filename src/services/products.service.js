const { productsModel } = require('../models');
const { validateId, validateName } = require('./validations/inputValidations');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const findById = async (idProduct) => {
  const error = validateId(idProduct);
  if (error.type) return error;

  const [product] = await productsModel.findById(idProduct);
  if (product) return { type: null, message: product };
  return { type: 'Product id error', message: 'Product not found' };
};

const createProduct = async (productName) => {
  const error = validateName(productName);
  if (error.type) return error;

  const newProduct = await productsModel.createProduct(productName);
  if (newProduct) return { type: null, message: newProduct };
};

const updateProductName = async (productId, productName) => {
  const error = validateName(productName);
  if (error.type) return error;

  const result = await productsModel.updateProductName(productId, productName);

  if (result.changedRows === 0) return { type: 'INVALID_PRODUCT', message: 'Product not found' };

  return { type: null, message: result.product };
};

const deleteProductFromId = async (id) => {
    const result = await productsModel.deleteProductFromId(id);

  if (result.affectedRows === 0) return { type: 'INVALID_PRODUCT', message: 'Product not found' };

  return { type: null, message: '' };
};

module.exports = {
  findAll,
  findById,
  createProduct,
  updateProductName,
  deleteProductFromId,
};