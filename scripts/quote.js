var Firebase = require("firebase");

function Quote(config){
  this.labourItems = config.labourItems;
  this.expenseItems = config.expenseItems;
};

Quote.prototype.save = function() {
   var quoteListRef = new Firebase('https://quotemedad.firebaseio.com/');
   var ref = quoteListRef.child('quotes');
   ref.push({Quote1: 'dodgy offer'});
};


module.exports = Quote
