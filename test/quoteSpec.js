var expect = require('chai').expect;
var Quote = require('../scripts/quote.js');

var q = new Quote({labourItems: 'l', expenseItems: 'p'})
console.log(q.labourItems)
// var leQuote =  addQuote({labourItems: 'labour'});
// describe('quote', function(leQuote){
//   it('should return -1 when the value is not present', function () {
//       expect(19).to.equal(19);
//     });
//   it('should return useless test donnie', function(){
//     expect('dad').to.be.a('string');
//   });
//   it('should contain labour items', function(){
//     expect(leQuote.labourItems).to.equal(true);
//   });
// });
