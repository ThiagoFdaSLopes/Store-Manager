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

const deleteProductFromId = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productsService.deleteProductFromId(id);

  if (type) return res.status(404).json({ message });

  return res.status(204).json();
};

const searchProducts = async (req, res) => {
  const query = req.query.q;

  const result = await productsService.searchProducts(query);

  res.status(200).json(result);
};

module.exports = {
  findAll,
  findById,
  createProduct,
  updateProductName,
  deleteProductFromId,
  searchProducts,
};