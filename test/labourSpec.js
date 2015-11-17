var expect = require('chai').expect;
var LabourItem = require('../scripts/labourItem.js')

var q = new LabourItem({name: 'Derek', time: 14, cost: 4000, charge: 6000})

describe('labour', function(){
  it('should contain name, time, cost and charge', function(){
    expect(q.name).to.equal('Derek');
    expect(q.time).to.equal(14);
    expect(q.cost).to.equal(4000);
    expect(q.charge).to.equal(6000);
  });
});

describe('calcBaseTotal', function(){
  it('should multiply time by cost', function(){
    expect(q.calcBaseTotal()).to.equal(56000);
  });
});

describe('calcChargeTotal', function(){
  it('should multiply time by charge', function(){
    expect(q.calcChargeTotal()).to.equal(84000);
  });
});
