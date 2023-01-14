const validateProductsid = (req, res, next) => {
  const bodyProducts = req.body;

  const check = (array) => array.every((item) => item.productId);

  if (!check(bodyProducts)) return res.status(400).json({ message: '"productId" is required' });

  next();
};

module.exports = validateProductsid;