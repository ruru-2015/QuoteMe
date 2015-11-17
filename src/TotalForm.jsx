import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import LabourForm from './LabourForm'
import Paper from 'material-ui/lib/paper'
import RaisedButton from 'material-ui/lib/raised-button'
import ExpenseForm from './ExpenseForm'
import donut from '../scripts/d3.jsx'
import TextField from 'material-ui/lib/text-field'



var TotalForm =  React.createClass({
  getDefaultProps: function() {
  return {
    value: '',

  }},

  render(){
    const { totalCost, totalCharge } = this.props
    console.log('totalForm props', this.props)

    return(
      <form className="TotalForm" >
      <p>Totals</p>
        <TextField hintText={''+totalCost} ref='name' style={{
              width: '100%'
              }}  />
        <TextField hintText= 'time'  ref='time' style={{
              width: '100%'
              }}/>
        <TextField hintText="Cost"ref='cost'style={{
              width: '100%'
              }} />
        <TextField hintText={''+totalCharge}ref='charge' style={{
              width: '100%'
              }}/>
       <RaisedButton type="submit"  label="Submit" secondary={true} style={{ margin:'2%',  }}/>Add
     </form>
    )
  }
})


export default TotalForm
