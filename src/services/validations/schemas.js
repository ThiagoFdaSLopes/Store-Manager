const Joi = require('joi');

const idProduct = Joi.number().integer().min(1).required();

const productName = Joi.string().min(5).required();

module.exports = {
  idProduct,
  productName,
};