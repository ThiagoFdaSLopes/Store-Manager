const { salesProducts, sales, productsModel } = require('../models');

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
    const newSalesProducts = await salesProducts.newSaleProduct(productList);
    if (newSalesProducts) return { type: null, message: newSalesProducts };
  }
  return { type: 'NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  createNewProductsSale,
  getAllIdsExist,
};