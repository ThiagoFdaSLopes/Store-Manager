const connection = require('./db/connection');

const findAll = async () => {
  const QUERY = 'SELECT * FROM StoreManager.products';
  const [result] = await connection.execute(QUERY);

  return result;
};

module.exports = {
  findAll,
};