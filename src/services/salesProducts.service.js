const { salesProductsModel, sales, productsModel } = require('../models');

const getAllIdsExist = async (productList) => {
  const existInDb = await Promise.all(
    productList.map(async (item) => {
      const product = await productsModel.findById(item.productId);
      if (product.length === 0) return false;
      return true;
    }),
  );

  return existInDb;
};

const createNewProductsSale = async (productList) => {
  await sales.newSale();

  const exist = await getAllIdsExist(productList);
  const go = exist.every((item) => item === true);

  if (go) {
    const newSalesProducts = await salesProductsModel.newSaleProduct(productList);
    if (newSalesProducts) return { type: null, message: newSalesProducts };
  }
  return { type: 'NOT_FOUND', message: 'Product not found' };
};

const findAllSales = async () => {
  const allSales = await salesProductsModel.findAllSales();

  return { type: null, message: allSales };
};

const findById = async (id) => {
  const allSales = await salesProductsModel.findById(id);

  if (allSales.length === 0) return { type: 'NOT_FOUND', message: 'Sale not found' };

  return { type: null, message: allSales };
};

const deleteProductFromId = async (id) => {
    const result = await salesProductsModel.deleteProductFromId(id);

  if (result.affectedRows === 0) return { type: 'INVALID_PRODUCT', message: 'Sale not found' };

  return { type: null, message: '' };
};

module.exports = {
  createNewProductsSale,
  getAllIdsExist,
  findAllSales,
  findById,
  deleteProductFromId,
};