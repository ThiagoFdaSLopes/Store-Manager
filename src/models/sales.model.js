const connection = require('./db/connection');

const newSale = async () => {
  const QUERY = 'INSERT INTO StoreManager.sales () VALUES ()';
  const [{ insertId }] = await connection.execute(QUERY);

  return insertId;
};

module.exports = {
  newSale,
};