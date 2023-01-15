const returnSale = {
  id: 3, itemsSold: [
    { productId: 1, quantity: 1 }
  ]
};

const returnSalesUpdated = {
  saleId: 2,
  itemsUpdated: [
    { productId: 1, quantity: 3 }
  ]
};

const productList = [{ productId: 1, quantity: 3 }];
const productListIncorrect = [{ productId: 1000, quantity: 3 }];

const incorrectSaleId = { produtcId: 100, quantity: 3 };
const incorrectSaleQuantity = { produtcId: 1 };
const incorrectSaleQuantityZero = { product: 1, quantity: 0 };
const incorrectSaleQuantityNegative = { product: 1, quantity: -1 };

const getAllSales = [
  {
    date: "2023-01-14T20:32:35.000Z",
    saleId: 1,
    productId: 1,
    quantity: 5
  },
  {
    date: "2023-01-14T20:32:35.000Z",
    saleId: 1,
    productId: 2,
    quantity: 10
  },
  {
    date: "2023-01-14T20:32:35.000Z",
    saleId: 2,
    productId: 3,
    quantity: 15
  }
]

const getSalesId = [
  {
    productId: 1,
    date: "2023-01-14T20:32:35.000Z",
    quantity: 5
  },
  {
    productId: 2,
    date: "2023-01-14T20:32:35.000Z",
    quantity: 10
  }
];

module.exports = {
  returnSale,
  getAllSales,
  getSalesId,
  productList,
  incorrectSaleId,
  incorrectSaleQuantity,
  incorrectSaleQuantityNegative,
  incorrectSaleQuantityZero,
  productListIncorrect,
  returnSalesUpdated,
}