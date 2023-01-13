const { productsModel } = require('../models');
const { validateId } = require('./validations/inputValidations');

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

module.exports = {
  findAll,
  findById,
};