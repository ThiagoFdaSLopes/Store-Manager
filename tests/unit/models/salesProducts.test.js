const { expect } = require('chai');
const sinon = require('sinon');
const { sales, salesProductsModel } = require('../../../src/models')

const connection = require('../../../src/models/db/connection');

const { correctSales, createResponseCorrect, getAllSales, getSalesId } = require('./mocks/salesProducts.mock.model');

describe('Testes de unidade do model de sales e salesProducts', function () {
  afterEach(sinon.restore);

  it('Inserindo uma nova venda', async function () {
    //Triple A
    sinon.stub(connection, 'execute').resolves([{ insertId: 30 }])

    const result = await sales.newSale();

    expect(result).to.be.deep.equal(30);
  });

  it('teste saleCreate', async function () {
    sinon.stub(connection, 'execute').resolves([[createResponseCorrect]])

    const {id, itemsSold} = await salesProductsModel.newSaleProduct(correctSales)

    expect(id).to.be.deep.equal(NaN);
    expect(itemsSold).to.be.deep.equal(createResponseCorrect.itemsSold);
  });

  it('teste getAllsales', async function () {
    sinon.stub(connection, 'execute').resolves([[getAllSales]])

    const result = await salesProductsModel.findAllSales();

    expect(result).to.be.deep.equal([getAllSales]);
  });

  it('teste getSales por id', async function () {
    sinon.stub(connection, 'execute').resolves([getSalesId])

    const result = await salesProductsModel.findById(1);

    expect(result).to.be.deep.equal(getSalesId);
  });

  it('excluir um produto por id', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }])

    const result = await salesProductsModel.deleteProductFromId(1)

    expect(result).to.be.deep.equal({ affectedRows: 1});
  });

});
