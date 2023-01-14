const validateQuantity = (req, res, next) => {
  const bodyProducts = req.body;

  const check = (array) => array.every((item) => item.quantity);

  if (!check(bodyProducts)) return res.status(400).json({ message: '"quantity" is required' });

  next();
};

module.exports = validateQuantity;