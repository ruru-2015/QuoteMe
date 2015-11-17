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
    console.log('props in totalForm', this.props)

    console.log('totalForm props', this.props)

    return(
      <div>
        <p>Your Jobs</p>
          <p>Totals</p>

          <TotalsTable {...this.props}/>

      </div>
    )
  }
})


export default TotalForm
