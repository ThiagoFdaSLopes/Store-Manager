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

const findAllSales = async () => {
  const QUERY = `SELECT sales.date as date, spr.sale_id as saleId, spr.product_id as productId,
  spr.quantity as quantity
  FROM StoreManager.sales AS sales
  INNER JOIN sales_products AS spr ON sales.id = spr.sale_id`;
  const [allSales] = await connection.execute(QUERY);

  return allSales;
};

const findById = async (id) => {
  const QUERY = `SELECT sale_id as saleId, date as date, product_id as productId,
  quantity FROM sales as sa
  INNER JOIN sales_products as spr
  ON spr.sale_id = sa.id
  HAVING sale_id = ?`;
  const [allSales] = await connection.execute(QUERY, [id]);

  const salesById = allSales.map(({ productId, date, quantity }) =>
    ({ productId, date, quantity }));

  return salesById;
};

module.exports = {
  newSaleProduct,
  findAllSales,
  findById,
};