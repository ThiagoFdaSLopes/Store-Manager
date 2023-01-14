const connection = require('./db/connection');

const newSaleProduct = async (saleId, productList) => {
  productList.map((item) => connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, item.productId, item.quantity],
  ));

  return { id: saleId, itemsSold: productList };
};

module.exports = {
  newSaleProduct,
};