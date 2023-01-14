const { expect } = require('chai');
const sinon = require('sinon');

const { salesProducts } = require('../../../src/models');

const { salesProductsService } = require('../../../src/services');

const { returnSale, productList, incorrectSaleId } = require('./mocks/salesProduts.service.mock')

describe('Testes de unidade do Service da lista de produtos', function () {

  it('Recuperando lista de produtos', async function () {
    //Triple A
    sinon.stub(salesProducts, 'newSaleProduct').resolves(returnSale);

    const result = await salesProductsService.createNewProductsSale(productList);

    expect(result.message).to.deep.equal(returnSale);
  });

  it('Recuperando lista de produtos', async function () {
    //Triple A

    const result = await salesProductsService.createNewProductsSale(incorrectSaleId);

    expect(result.type).to.deep.equal('NOT_FOUND');
    expect(result.message).to.deep.equal('Product not found');
  });

  afterEach(function () {
    sinon.restore();
  });
});