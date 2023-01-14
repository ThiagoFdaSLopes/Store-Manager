const { salesProducts, sales } = require('../models');

const createNewProductsSale = async (productList) => {
  const saleId = await sales.newSale();

  const newSalesProducts = await salesProducts.newSaleProduct(saleId, productList);

  if (newSalesProducts) return { type: null, message: newSalesProducts };
};

module.exports = {
  createNewProductsSale,
};