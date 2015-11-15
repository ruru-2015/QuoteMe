function ExpenseItem(config){
  this.name = config.name;
  this.quantity = config.quantity;
  this.cost = config.cost;
  this.charge = config.charge;
  this.totalCost = this.quantity*this.cost;
  this.totalCharge = this.quantity*this.charge;
}
