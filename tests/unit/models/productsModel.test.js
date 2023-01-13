const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models')

const connection = require('../../../src/models/db/connection')

const { allProducts, newProduct } = require('./mocks/products.model.mock')


describe('Testes de unidade do model de lista de produtos', function () {

  it('Recuperando lista de produtos', async function () {
    //Triple A
    sinon.stub(connection, 'execute').resolves([allProducts])

    const result = await productsModel.findAll();

    expect(result).to.be.deep.equal(allProducts);
  });

  it('Recuperando um produto por seu id', async function () {
    //Triple A
    sinon.stub(connection, 'execute').resolves([allProducts[0]])

    const result = await productsModel.findById(1);

    expect(result).to.be.deep.equal(allProducts[0]);
  });

  it('Criando um novo produto', async function () {
    const id = 30;
    //Triple A
    sinon.stub(connection, 'execute').resolves([{ insertId: id }])

    const result = await productsModel.createProduct('ProdutoX');

    expect(result).to.be.deep.equal(newProduct);
  });

  afterEach(sinon.restore);
});