const { expect } = require('chai');
const sinon = require('sinon');
const { sales, salesProducts } = require('../../../src/models')

const connection = require('../../../src/models/db/connection');

const { correctSales, createResponseCorrect } = require('./mocks/salesProducts.mock.model');

describe('Testes de unidade do model de sales e salesProducts', function () {
  afterEach(sinon.restore);

  it('Inserindo uma nova venda', async function () {
    //Triple A
    sinon.stub(connection, 'execute').resolves([{ insertId: 30 }])

    const result = await sales.newSale();

    expect(result).to.be.deep.equal(30);
  });

  it('Testa create do sale', async function () {
    sinon.stub(connection, 'execute').resolves([[createResponseCorrect]])

    const {id, itemsSold} = await salesProducts.newSaleProduct(correctSales);

    expect(id).to.be.deep.equal(NaN);
    expect(itemsSold).to.be.deep.equal(createResponseCorrect.itemsSold);
  });

});
