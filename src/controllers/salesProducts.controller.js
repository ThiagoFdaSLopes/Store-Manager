const { salesProducts } = require('../services');

const createNewSales = async (req, res) => {
  const { type, message } = await salesProducts.createNewProductsSale(req.body);

  if (type) return res.status(404).json({ message });

  return res.status(201).json(message);
};

module.exports = {
  createNewSales,
};