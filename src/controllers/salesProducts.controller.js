const { salesProducts } = require('../services');

const createNewSales = async (req, res) => {
  const newSales = await salesProducts.createNewProductsSale(req.body);

  return res.status(201).json(newSales.message);
};

module.exports = {
  createNewSales,
};