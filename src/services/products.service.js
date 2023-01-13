const { productsModel } = require('../models');
const { validateId } = require('./validations/inputValidations');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const findById = async (idProduct) => {
  const error = validateId(idProduct);
  if (error.type) return error;

  const products = await productsModel.findById(idProduct);
  if (products) return { type: null, message: products };
  return { type: '', message: 'Product not found' };
};

module.exports = {
  findAll,
  findById,
};