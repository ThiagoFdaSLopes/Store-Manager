const productList = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

const bodyNameMock = {
 name: "ProdutoX"
};

const newProductMock = { id: 30, ...bodyNameMock };

const INCORRECT_NAME = { name: 'Test' };
const correctName = { name: "Batman Boneco Marvel" };

module.exports = {
  productList,
  newProductMock,
  correctName,
  bodyNameMock,
  INCORRECT_NAME,
};