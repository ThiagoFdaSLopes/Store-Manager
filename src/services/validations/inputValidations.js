const { idProduct, productName } = require('./schemas');

const validateId = (id) => {
  const { error } = idProduct.validate(id);

  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };

  return { type: null, message: '' };
};

const validateName = (name) => {
  const { error } = productName.validate(name);

  if (error) {
    return { type: 'INVALID_NAME', message: '"name" length must be at least 5 characters long' };
  }

  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateName,
};