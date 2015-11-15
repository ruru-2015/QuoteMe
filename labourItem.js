function LabourItem (config) {
  this.name = config.name;
  this.time = config.time;
  this.cost = config.cost;
  this.charge = config.charge;
  this.totalBase = this.time*this.cost;
  this.totalCharge = this.time*this.charge;
}

