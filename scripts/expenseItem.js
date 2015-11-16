function ExpenseItem(name,quantity,cost,charge){
  this.name = name;
  this.quantity = quantity;
  this.cost = cost;
  this.charge =charge;
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

export default ExpenseItem
