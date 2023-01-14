const correctSales = [
  {productId:1,quantity:1}
]

const createResponseCorrect = {
  id: 3,
  itemsSold: [
    {productId:1,quantity:1}
  ]
};

const incorrectSaleId = { quantity: 3 };
const incorrectSaleQuantity = { produtcId: 1 };
const incorrectSaleQuantityZero = { product: 1, quantity: 0 };
const incorrectSaleQuantityNegative = { product: 1, quantity: -1 };


module.exports = {
  correctSales,
  incorrectSaleId,
  incorrectSaleQuantity,
  incorrectSaleQuantityZero,
  incorrectSaleQuantityNegative,
  createResponseCorrect,
};