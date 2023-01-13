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
  PRODUCT_ID_ERROR } = require('./mocks/products.service.mock')

describe('Testes de unidade do Service de pessoas passageiras', function () {

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
    const result = await productsService.findById(5);

      expect(result.type).to.deep.equal(PRODUCT_ID_ERROR);
      expect(result.message).to.deep.equal(PRODUCT_NOT_FOUND);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});