import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import LabourForm from './LabourForm'
import Paper from 'material-ui/lib/paper'
import RaisedButton from 'material-ui/lib/raised-button'
import ExpenseForm from './ExpenseForm'
import donut from '../scripts/d3.jsx'
import TextField from 'material-ui/lib/text-field'
import Layout from './Layout'
import TotalsTable from './table'


var TotalForm =  React.createClass({
  getDefaultProps: function() {
  return {
    value: '',

  }},

  render(){
    const { totalCost, totalCharge, etotalCost, etotalCharge, name, ename} = this.props
    console.log('totalForm props', this.props)
     var finalCost = etotalCost+totalCost;
     var finalCharge = etotalCharge+totalCharge;
    return(
      <div>
        <p>Your Jobs</p>
          <p>Totals</p>
          <TotalsTable />
          <TextField hintText={ename}  />
            <p>Total cost to you: {''+finalCost} </ p>
            <p>Recommmended Price:{''+finalCharge} </p>
      </div>
    )
  }
})


export default TotalForm
