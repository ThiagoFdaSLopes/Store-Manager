const connection = require('./db/connection');

const findAll = async () => {
  const QUERY = 'SELECT * FROM products';
  const [result] = await connection.execute(QUERY);

  return result;
};

const findById = async (id) => {
  const QUERY = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [result] = await connection.execute(QUERY, [id]);

  return result;
};

module.exports = {
  findAll,
  findById,
};