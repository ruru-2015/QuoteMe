function LabourItem (config) {
  this.name = config.name;
  this.time = config.time;
  this.cost = config.cost;
  this.charge = config.charge;
}

LabourItem.prototype.calcBaseTotal = function(){
  return this.time*this.cost;
};

LabourItem.prototype.calcChargeTotal = function(){
  return this.time*this.charge;
};

module.exports = LabourItem
