const returnSale = {
  id: 3, itemsSold: [
    { productId: 1, quantity: 1 }
  ]
};

const productList = [{ productId: 1, quantity: 3 }];

const incorrectSaleId = { produtcId: 100, quantity: 3 };
const incorrectSaleQuantity = { produtcId: 1 };
const incorrectSaleQuantityZero = { product: 1, quantity: 0 };
const incorrectSaleQuantityNegative = { product: 1, quantity: -1 };

module.exports = {
  returnSale,
  productList,
  incorrectSaleId,
  incorrectSaleQuantity,
  incorrectSaleQuantityNegative,
  incorrectSaleQuantityZero,
}