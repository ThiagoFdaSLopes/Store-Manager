const connection = require('./db/connection');

const newSaleProduct = async (saleId, productList) => {
  productList.map((product) => connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, product.productId, product.quantity],
  ));

  return { id: saleId, itemsSold: productList };
};

module.exports = {
  newSaleProduct,
};