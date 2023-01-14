const { productsService } = require('../services');

const findAll = async (_req, res) => {
  const { message } = await productsService.findAll();

  res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);

  if (type) return res.status(404).json({ message });

  res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.createProduct(name);

  if (type) return res.status(422).json({ message });

  return res.status(201).json(message);
};

const updateProductName = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { type, message } = await productsService.updateProductName(id, name);

  if (type === 'INVALID_PRODUCT') return res.status(404).json({ message });

  if (type) return res.status(422).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  findAll,
  findById,
  createProduct,
  updateProductName,
};