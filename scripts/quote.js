var Firebase = require("firebase");

function Quote(config){
  this.labourItems = config.labourItems;
  this.expenseItems = config.expenseItems;
}

Quote.prototype.save = function() {
   var quoteListRef = new Firebase('https://quotemedad.firebaseIO.com/quotes');

  quoteListRef.push({labourItems: this.labourItems, expenseItems: this.expenseItems});
};


