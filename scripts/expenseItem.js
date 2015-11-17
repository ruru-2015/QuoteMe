function ExpenseItem(config){
  this.name = config.name;
  this.quantity = config.quantity;
  this.cost = config.cost;
  this.charge = config.charge;
}

ExpenseItem.prototype.calcTotalCost = function(){
  return this.quantity*this.cost;
};

ExpenseItem.prototype.calcTotalCharge = function(){
  return this.quantity*this.charge;
};


ExpenseItem.prototype.michaelmcgrath = function(fancyHats, theNiceMans){
  this.hats = fancyHats;
  this.niceMans = theNiceMans;
  var theString = "Mike is a nice fellow."

  return theString;
};

module.exports = ExpenseItem
