const connection = require('./db/connection');

const newSaleProduct = async (productList) => {
  const [[{ count }]] = await connection.execute(
    'SELECT COUNT(distinct sale_id) as count FROM StoreManager.sales_products',
  );

  const id = Number(count + 1);

  const sale = await Promise.all(
    productList.map(async (item) => {
      await connection.execute(
        'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
        [id, item.productId, item.quantity],
      );
      return item;
    }),
  );

  return { id, itemsSold: sale };
};

module.exports = {
  newSaleProduct,
};