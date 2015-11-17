var expect = require('chai').expect;
var Quote = require('../scripts/quote.js');

var q = new Quote({labourItems: 'l', expenseItems: 'p'})
q.save();

describe('quote', function(){
   it('should contain labour items', function(){
    expect(q.labourItems).to.equal('l');
  });
   it('should contain expense items', function(){
    expect(q.expenseItems).to.equal('p');
  });
});
