const Joi = require('joi');

const idProduct = Joi.number().integer().min(1).required(); 

module.exports = {
  idProduct,
};