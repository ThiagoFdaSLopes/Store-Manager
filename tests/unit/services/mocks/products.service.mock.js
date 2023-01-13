const INVALID_NUMBER = 'id';
const TYPE_MESSAGE = "INVALID_VALUE";
const MESSAGE_ERROR = '"id" must be a number';
const PRODUCT_ID_ERROR = 'Product id error';
const PRODUCT_NOT_FOUND = 'Product not found';
const PRODUCT_NAME_ERROR = '"name" length must be at least 5 characters long';
const PRODUCT_TYPE_NAME_ERROR = 'INVALID_NAME';

const allProducts = [
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

newProduct = {
  id: 30,
  name: "ProdutoX"
};

module.exports = {
  INVALID_NUMBER,
  MESSAGE_ERROR,
  TYPE_MESSAGE,
  PRODUCT_ID_ERROR,
  PRODUCT_NOT_FOUND,
  PRODUCT_NAME_ERROR,
  PRODUCT_TYPE_NAME_ERROR,
  allProducts,
  newProduct,
};