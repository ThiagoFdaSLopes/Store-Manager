const { expect } = require('chai');
const sinon = require('sinon');

const { salesProductsModel } = require('../../../src/models');

const { salesProductsService } = require('../../../src/services');

const { returnSale, productList, getAllSales, getSalesId } = require('./mocks/salesProduts.service.mock')

describe('Testes de unidade do Service da lista de produtos', function () {

  it('Criando novas vendas', async function () {
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

  it('Pegando todas vendas vendas', async function () {
    //Triple A
    sinon.stub(salesProductsModel, 'findAllSales').resolves([getAllSales]);

    const result = await salesProductsService.findAllSales();

    expect(result.message).to.deep.equal([getAllSales]);
  });

  it('Pegando todas vendas por id', async function () {
    //Triple A
    sinon.stub(salesProductsModel, 'findById').resolves([getSalesId]);

    const result = await salesProductsService.findById(1);

    expect(result.message).to.deep.equal([getSalesId]);
  });

  it('Atualizando um produto com', async function () {
    //Triple A
    sinon.stub(salesProductsModel, 'deleteProductFromId').resolves({ affectedRows: 1});

    const { type, message } = await salesProductsService.deleteProductFromId(1);

    expect(type).to.be.equal(null);
  });

  it('Atualizando um produto com', async function () {
    //Triple A
      sinon.stub(salesProductsModel, 'deleteProductFromId').resolves({affectedRows: 0});

    const { type, message } = await salesProductsService.deleteProductFromId(1);

    expect(type).to.be.equal('INVALID_PRODUCT');
  });

  afterEach(function () {
    sinon.restore();
  });
});