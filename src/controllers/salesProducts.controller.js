const { salesProductsService } = require('../services');

const createNewSales = async (req, res) => {
  const { type, message } = await salesProductsService.createNewProductsSale(req.body);

  if (type) return res.status(404).json({ message });

  return res.status(201).json(message);
};

const findAllSales = async (_req, res) => {
  const { message } = await salesProductsService.findAllSales();

  return res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesProductsService.findById(id);

  if (type) return res.status(404).json({ message });

  return res.status(200).json(message);
};

const deleteProductFromId = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await salesProductsService.deleteProductFromId(id);

  if (type) return res.status(404).json({ message });

  return res.status(204).json();
};

const updateSales = async (req, res) => {
  const { body } = req;
  const { id } = req.params;

  const { type, message } = await salesProductsService.updateSales(id, body);
  
  if (type) return res.status(404).json({ message });

  res.status(200).json(message);
};

module.exports = {
  createNewSales,
  findAllSales,
  findById,
  deleteProductFromId,
  updateSales,
};