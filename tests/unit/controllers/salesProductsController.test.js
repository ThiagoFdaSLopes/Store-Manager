const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { salesProductsController } = require('../../../src/controllers');
const { salesProductsService } = require('../../../src/services');

const { productsList, incorrectSaleId, getAllSales, getSalesId } = require('./mock/salesProductsController.mock')

describe('Teste de unidade do productsController', function () {

  it('Listando os produtos', async function () {
    const res = {};
    const req = {};
    const products = [productsList];

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesProductsService, 'createNewProductsSale')
      .resolves({ type: null, message: products });

    await salesProductsController.createNewSales(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(products);
  });

  it('Listando os produtos', async function () {
    const res = {};
    const req = {};
    const products = [incorrectSaleId];

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesProductsService, 'createNewProductsSale')
      .resolves({ type: 'NOT_FOUND', message: 'Product not found' });

    await salesProductsController.createNewSales(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('Listando todos sales', async function () {
    const res = {};
    const req = {};
    const products = getAllSales;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesProductsService, 'findAllSales')
      .resolves({ type: null, message: products });

    await salesProductsController.findAllSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  it('Listando por id errado', async function () {
    const res = {};
    const req = { params: { id: 100 }};
    const products = getSalesId;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesProductsService, 'findById')
      .resolves({ type: 'NOT_FOUND', message: 'Sale not found' });

    await salesProductsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({  message: 'Sale not found' });
  });

  it('Listando todos sales', async function () {
    const res = {};
    const req = { params: { id: 1 }};
    const products = getSalesId;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesProductsService, 'findById')
      .resolves({ type: null, message: products });

    await salesProductsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  afterEach(sinon.restore);
});