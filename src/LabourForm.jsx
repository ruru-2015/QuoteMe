import React from 'react'
import TextField from 'material-ui/lib/text-field'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/lib/raised-button'
import LabourItem from '../scripts/LabourItem'

var LabourForm =  React.createClass({
  getDefaultProps: function() {
  return {
    value: ''
  }},



  onSubmit: function(e){
    e.preventDefault();
    var time= this.refs.time.getValue();
    var cost= this.refs.cost.getValue();
    var charge= this.refs.charge.getValue();
    var totalCharge = time * charge;
    var totalCost = time * cost;
    this.props.updateTotalCharge(totalCharge)
    this.props.updateTotalCost(totalCost)

// var name = this.refs.name.getValue();
// var time= this.refs.time.getValue();
// var cost= this.refs.cost.getValue();
// var charge= this.refs.charge.getValue();
// var job = new LabourItem(name,time,cost,charge)
// var lconfig = {
//   name: name,
//   time:time,
//   cost:cost,
//   charge:charge,
//   TotalCost:job.calcBaseTotal(),
//   TotalCharge:job.calcChargeTotal()
// }
// console.log(lconfig)
  },

  render(){
    const { totalCost,totalCharge } = this.props

    return(
      <form className="labourForm" onSubmit={this.onSubmit}>
      <p>Labour Costs</p>
        <TextField hintText="Name" ref='name' style={{
              width: '100%'
              }}  />
        <TextField hintText="Time" ref='time' style={{
              width: '100%'
              }}/>
        <TextField hintText="Cost"ref='cost'style={{
              width: '100%'
              }} />
        <TextField hintText="Charge"ref='charge' style={{
              width: '100%'
              }}/>
       <RaisedButton type="submit"  label="Submit" secondary={true} style={{ margin:'2%',  }}/>Add
     </form>
    )
  }
})

export default LabourForm
