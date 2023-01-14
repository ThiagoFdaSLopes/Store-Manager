const { expect } = require('chai');
const sinon = require('sinon');

const { salesProductsModel } = require('../../../src/models');

const { salesProductsService } = require('../../../src/services');

const { returnSale, productList, incorrectSaleId } = require('./mocks/salesProduts.service.mock')

describe('Testes de unidade do Service da lista de produtos', function () {

  it('Recuperando lista de produtos', async function () {
    //Triple A
    sinon.stub(salesProductsModel, 'newSaleProduct').resolves(returnSale);

    const result = await salesProductsService.createNewProductsSale(productList);

    expect(result.message).to.deep.equal(returnSale);
  });

  // it('Recuperando lista de produtos', async function () {
  //   //Triple A

  //   const result = await salesProductsService.createNewProductsSale({ productId: 10000, quantity: 100 })
    
  //   expect(result.message).to.be.deep.equal(result.message)
  // });

  afterEach(function () {
    sinon.restore();
  });
});