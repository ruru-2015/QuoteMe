var expect = require('chai').expect
  , leQuote = new Quote({{}});

var quote = require('../scripts/quote.js')

describe('quote', function(){
  it('should return -1 when the value is not present', function () {
      expect.equal(-1, [1,2,3].indexOf(5));
      expect.equal(-1, [1,2,3].indexOf(0));
    });
});
