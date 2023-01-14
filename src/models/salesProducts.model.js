const connection = require('./db/connection');

const newSaleProduct = async (saleId, productList) => {
  const [[{ count }]] = await connection.execute(
    'SELECT COUNT(distinct sale_id) as count FROM StoreManager.sales_products',
  );

  const id = count + 1;

  productList.map((item) => connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [id, item.productId, item.quantity],
    ));

  return { id, itemsSold: productList };
};

module.exports = {
  newSaleProduct,
};