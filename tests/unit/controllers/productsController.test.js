const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers')


const { productsList,
  bodyNameMock, newProductMock, INCORRECT_NAME } = require('./mock/products.controller.mock');


describe('Teste de unidade do productsController', function () {

  it('Listando os produtos', async function () {
    const res = {};
    const req = {};
    const products = [productsList];

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'findAll')
      .resolves({ type: null, message: products });

    await productsController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  it('Listando produto por id', async function () {
    const res = {};
    const req = { params: { id: 1 }};
    const products = [productsList];

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'findById')
      .resolves({ type: null, message: products });

    await productsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });
  
  it('Listando produto inexistente', async function () {
    const res = {};
    const req = { params: { id: 5 }};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'findById')
      .resolves({ type: 'Product id error', message: 'Product not found'});

    await productsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found'});
  });

  it('Criando um novo produto', async function () {
    const res = {};
    const req = { body: bodyNameMock};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'createProduct')
      .resolves({ type: null, message: newProductMock});

    await productsController.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProductMock);
  });

  it('Criando com nome incorreto', async function () {
    const res = {};
    const req = { body: INCORRECT_NAME};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'createProduct')
      .resolves({ type: 'INVALID_NAME', message: '"name" length must be at least 5 characters long' });

    await productsController.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long'});
  });

  it('Criando com nome incorreto', async function () {
    const res = {};
    const req = { body: INCORRECT_NAME, params: { id: 1 }};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'updateProductName')
      .resolves({ type: 'INVALID_NAME', message: '"name" length must be at least 5 characters long' });

    await productsController.updateProductName(req, res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long'});
  });

  it('Criando um novo produto', async function () {
    const res = {};
    const req = { body: bodyNameMock, params: { id: 30 }};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'updateProductName')
      .resolves({ type: null, message: newProductMock});

    await productsController.updateProductName(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(newProductMock);
  });

  it('Atualizando um produto com id errado', async function () {
    const res = {};
    const req = { body: bodyNameMock, params: { id: 154 }};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'updateProductName')
      .resolves({ type: 'INVALID_PRODUCT', message: 'Product not found' });

    await productsController.updateProductName(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({message: 'Product not found'});
  });
  it('Excluindo um produto com id errado', async function () {
    const res = {};
    const req = { params: { id: 100 }};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'deleteProductFromId')
      .resolves({ type: 'INVALID_PRODUCT', message: 'Product not found' });

    await productsController.deleteProductFromId(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({message: 'Product not found'});
  });

  it('Excluindo um produto com id errado', async function () {
    const res = {};
    const req = { params: { id: 1 }};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'deleteProductFromId')
      .resolves({ type: null, message: '' });

    await productsController.deleteProductFromId(req, res);

    expect(res.status).to.have.been.calledWith(204);
  });


  // { type: 'INVALID_NAME', message: '"name" length must be at least 5 characters long' };
  
  afterEach(sinon.restore);
});