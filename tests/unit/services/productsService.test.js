const { expect } = require('chai');
const sinon = require('sinon');

const { productsModel } = require('../../../src/models')

const { productsService } = require('../../../src/services')

const {
  allProducts,
  INVALID_NUMBER,
  MESSAGE_ERROR,
  TYPE_MESSAGE,
  PRODUCT_NOT_FOUND,
  PRODUCT_ID_ERROR,
  newProduct,
  PRODUCT_NAME_ERROR,
  PRODUCT_TYPE_NAME_ERROR } = require('./mocks/products.service.mock')

describe('Testes de unidade do Service da lista de produtos', function () {

  it('Recuperando lista de produtos', async function () {
    //Triple A
    sinon.stub(productsModel, 'findAll').resolves([allProducts])

    const result = await productsService.findAll();

    expect(result.message).to.deep.equal([allProducts])
  });

  it('Recuperando um produto por seu id', async function () {
    //Triple A
    sinon.stub(productsModel, 'findById').resolves([allProducts[0]])

    const result = await productsService.findById(1);

    expect(result.message).to.deep.equal(allProducts[0])
  });

  it('Recuperando informacoes de um id errado', async function () {
    //Triple A
    const result = await productsService.findById(INVALID_NUMBER);

      expect(result.type).to.deep.equal(TYPE_MESSAGE);
      expect(result.message).to.deep.equal(MESSAGE_ERROR);
  });

  it('Recuperando informacoes de um id que nao existe', async function () {
    //Triple A
    const result = await productsService.findById(8);

      expect(result.type).to.deep.equal(PRODUCT_ID_ERROR);
      expect(result.message).to.deep.equal(PRODUCT_NOT_FOUND);
  });

  it('Cadastrando um novo produto', async function () {
    //Triple A
    sinon.stub(productsModel, 'createProduct').resolves(newProduct);

    const { type, message } = await productsService.createProduct("ProdutoX")

    expect(type).to.be.equal(null);
    expect(message).to.be.deep.equal(newProduct);
  });
  
  it('Cadastrando um produto com nome errado', async function () {
    //Triple A
    const result = await productsService.createProduct("test");

    expect(result.message).to.deep.equal(PRODUCT_NAME_ERROR);
    expect(result.type).to.be.deep.equal(PRODUCT_TYPE_NAME_ERROR);
  });

  it('Atualizando um produto com nome errado', async function () {
    //Triple A
    sinon.stub(productsModel, 'updateProductName').resolves({ type: 'INVALID_NAME', message: '"name" length must be at least 5 characters long' });

    const { type, message } = await productsService.updateProductName(100, "Th");

    expect(type).to.be.equal('INVALID_NAME');
    expect(message).to.be.deep.equal('"name" length must be at least 5 characters long');
  });

  it('Atualizando um produto com', async function () {
    //Triple A
    sinon.stub(productsModel, 'updateProductName').resolves({ changedRows: 0});

    const { type, message } = await productsService.updateProductName(1001, "Thiago Lopes");

    expect(type).to.be.equal('INVALID_PRODUCT');
    expect(message).to.be.deep.equal('Product not found');
  });

  it('Atualizando um produto com', async function () {
    //Triple A
    sinon.stub(productsModel, 'updateProductName').resolves({ changedRows: 1});

    const { type, message } = await productsService.updateProductName(1, "Thiago Lopes");

    expect(type).to.be.equal(null);
  });

  it('Atualizando um produto com', async function () {
    //Triple A
    sinon.stub(productsModel, 'deleteProductFromId').resolves({ affectedRows: 1});

    const { type, message } = await productsService.deleteProductFromId(1);

    expect(type).to.be.equal(null);
  });

    it('Atualizando um produto com', async function () {
    //Triple A
      sinon.stub(productsModel, 'deleteProductFromId').resolves({affectedRows: 0});

    const { type, message } = await productsService.deleteProductFromId(1);

    expect(type).to.be.equal('INVALID_PRODUCT');
  });

  afterEach(function () {
    sinon.restore();
  });
});