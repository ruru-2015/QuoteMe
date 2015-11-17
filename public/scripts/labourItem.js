function LabourItem (name,time,cost,charge) {
  this.name = name;
  this.time = time;
  this.cost = cost;
  this.charge = charge;
}

LabourItem.prototype.calcBaseTotal = function(){
  return this.time*this.cost;
};

LabourItem.prototype.calcChargeTotal = function(){
  return this.time*this.charge;
};

export default LabourItem
