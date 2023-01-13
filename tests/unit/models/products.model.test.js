const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models')

const connection = require('../../../src/models/db/connection')

const { allProducts } = require('./mocks/products.model.mock')


describe('Testes de unidade do model de pessoas passageiras', function () {
  afterEach(sinon.restore);

  it('Recuperando lista de produtos', async function () {
    //Triple A
    sinon.stub(connection, 'execute').resolves([allProducts])

    const result = await productsModel.findAll();

    expect(result).to.deep.equal(allProducts)
  })

  it('Recuperando um produto por seu id', async function () {
    //Triple A
    sinon.stub(connection, 'execute').resolves([[allProducts[0]]])

    const result = await productsModel.findById(1);

    expect(result).to.deep.equal(allProducts[0])
  })

})