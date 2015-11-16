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
