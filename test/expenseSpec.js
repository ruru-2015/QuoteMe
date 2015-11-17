var expect = require('chai').expect;
var ExpenseItem = require('../scripts/expenseItem.js')

var i = new ExpenseItem({name: 'The Item', quantity: 4, cost: 50, charge: 300})

describe('labour', function(){
  it('should contain name, time, cost and charge', function(){
    expect(i.name).to.equal('The Item');
    expect(i.quantity).to.equal(4);
    expect(i.cost).to.equal(50);
    expect(i.charge).to.equal(300);
  });
});

describe('calcTotalCost', function(){
  it('should multiply quantity by cost', function(){
    expect(i.calcTotalCost()).to.equal(200);
  });
});

describe('calcTotalCharge', function(){
  it('should multiply time by charge', function(){
    expect(i.calcTotalCharge()).to.equal(1200);
  });
});

describe('michaelmcgrath', function(){
  it('should return a lovely message', function(){
    expect(i.michaelmcgrath()).to.equal("Mike is a nice fellow.");
  });
});
