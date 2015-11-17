import React from 'react'
import TextField from 'material-ui/lib/text-field'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/lib/raised-button'
import ExpenseItem from '../scripts/ExpenseItem'

export default React.createClass({
  getDefaultProps: function() {
  return {
    value: ''
  }},

  onSubmit: function(e){
    e.preventDefault();
var name = this.refs.name.getValue();
var quantity= this.refs.quantity.getValue();
var cost= this.refs.cost.getValue();
var charge= this.refs.charge.getValue();
var item = new ExpenseItem(name,quantity,cost,charge)
var econfig = {
  name: name,
  quantity:quantity,
  cost:cost,
  charge:charge,
  TotalCost:item.calcTotalCost(),
  TotalCharge:item.calcTotalCharge()
}
console.log(econfig)
  },


  render(){
    return(
      <form className="ExpenseForm" onSubmit={this.onSubmit}>
      <p>Expenses </p>
        <TextField hintText="Name" style={{
              width: '100%'
              }} ref='name'   />
        <TextField hintText="Qty" ref='quantity' style={{
              width: '100%'
              }}/>
        <TextField hintText="Cost"ref='cost' style={{
              width: '100%'
              }}/>
        <TextField hintText="Charge"ref='charge'style={{
              width: '100%'
              }} />
       <RaisedButton type="submit"  label="Submit" secondary={true} style={{ margin:'2%',  }}/>
     </form>
    )
  }
})

