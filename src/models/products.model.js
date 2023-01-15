const connection = require('./db/connection');

const findAll = async () => {
  const QUERY = 'SELECT * FROM StoreManager.products';
  const [result] = await connection.execute(QUERY);

  return result;
};

const findById = async (id) => {
  const QUERY = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [result] = await connection.execute(QUERY, [id]);

  return result;
};

const createProduct = async (productName) => {
  const QUERY = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [{ insertId }] = await connection.execute(QUERY, [productName]);

  return { id: insertId, name: productName };
};

const updateProductName = async (productId, productName) => {
  const QUERY = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
  const [result] = await connection.execute(QUERY, [productName, productId]);

  return { changedRows: result.changedRows, product: { id: productId, name: productName } };
};

const deleteProductFromId = async (id) => {
  const QUERY = 'DELETE FROM StoreManager.products WHERE id = ?';
  const [result] = await connection.execute(QUERY, [id]);

  return result;
};

const searchProducts = async (name) => {
  const QUERY = `SELECT * FROM StoreManager.products WHERE name LIKE "%${name}%" `;
  const [result] = await connection.execute(QUERY, [name]);

  return result;
};

module.exports = {
  findAll,
  findById,
  createProduct,
  updateProductName,
  deleteProductFromId,
  searchProducts,
};