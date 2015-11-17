import React from 'react'
import TextField from 'material-ui/lib/text-field'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/lib/raised-button'
import LabourItem from '../scripts/LabourItem'
import { addJob, addItem,updateName }from './action-creators'

var LabourForm =  React.createClass({
  getDefaultProps: function() {
  return {
    value: ''
  }},



  onChange: function(e){
    const { dispatch } = this.props
    console.log('labour props', this.props)
    e.preventDefault();
    var name = this.refs.name.getValue();
    var time= this.refs.time.getValue();
    var cost= this.refs.cost.getValue();
    var charge= this.refs.charge.getValue();
    var totalCharge = time * charge;
    var totalCost = time * cost;
    this.props.updateName(name);
    this.props.updateTotalCharge(totalCharge);
    this.props.updateTotalCost(totalCost);

  },
  onSubmit: function(e){
    const { dispatch } = this.props
    e.preventDefault();
    dispatch(addJob(this.props.activeJob))
  },

  render(){
    console.log('props in LabourForm', this.props)
    const { totalCost, totalCharge } = this.props.activeJob

    return(
      <form className="LabourForm" onChange={this.onChange} onSubmit={this.onSubmit}>
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
        <p>Labour cost: {totalCost} </p>
        <p>Labour charge: {totalCharge} </p>
       <RaisedButton type="submit"  label="Submit" secondary={true} style={{ margin:'2%',  }}/>Add
     </form>
    )
  }
})

export default LabourForm
