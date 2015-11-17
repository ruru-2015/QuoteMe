import React from 'react'
import TextField from 'material-ui/lib/text-field'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/lib/raised-button'
import ExpenseItem from '../scripts/ExpenseItem'
import { addJob, addItem,updateName }from './action-creators'

export default React.createClass({
  getDefaultProps: function() {
  return {
    value: ''
  }},

  onSubmit: function(e){
    const { dispatch } = this.props;
    console.log('expense props', this.props)
    e.preventDefault();
    var name = this.refs.name.getValue();
    var quantity= this.refs.quantity.getValue();
    var cost= this.refs.cost.getValue();
    var charge= this.refs.charge.getValue();
    var etotalCharge = quantity * charge;
    var etotalCost = quantity * cost;
    this.props.updateName(name);
    this.props.updateeTotalCharge(etotalCharge);
    this.props.updateeTotalCost(etotalCost);
    dispatch(addItem(this.props.activeJob))
  },


  render(){
    console.log('props in ExpenseForm', this.props)
        const { etotalCost, etotalCharge,ename } = this.props.activeJob

    return(
      <form className="ExpenseForm" onSubmit={this.onSubmit}>
      <p>Expenses </p>
        <TextField hintText="Name" style={{
              width: '100%'
              }} ref='name'   />
        <TextField hintText="Qty" ref='quantity' style={{
              width: '100%'
              }} />
        <TextField hintText="Cost"ref='cost' style={{
              width: '100%'
              }}/>
        <TextField hintText="Charge"ref='charge'style={{
              width: '100%'
              }} />
           <p>Labour cost: {etotalCost} </p>
        <p>Labour charge: {etotalCharge} </p>
       <RaisedButton type="submit"  label="Submit" secondary={true} style={{ margin:'2%',  }}/>
     </form>
    )
  }
})

