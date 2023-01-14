const validateQuantity = (req, res, next) => {
  const bodyProducts = req.body;
  
  const checkedQuantity = (array) => array.every((item) => !item.quantity);
  const checkedQuantityValue = (array) =>
    array.every((item) => item.quantity === 0 || item.quantity < 0);
  if (checkedQuantityValue(bodyProducts)) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  if (checkedQuantity(bodyProducts)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  next();
};

module.exports = validateQuantity;