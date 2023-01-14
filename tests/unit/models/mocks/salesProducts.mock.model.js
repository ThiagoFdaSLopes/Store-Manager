const correctSales = [
  {productId:1,quantity:1}
]

const createResponseCorrect = {
  id: 3,
  itemsSold: [
    {productId:1,quantity:1}
  ]
};

const getAllSales = [
  {
    date: "2023-01-14T20:27:26.000Z",
    saleId: 1,
    productId: 1,
    quantity: 5
  }
];

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
]


module.exports = {
  correctSales,
  createResponseCorrect,
  getAllSales,
  getSalesId,
};