import React from 'react'

import ReactDOM from 'react-dom'
import AppBar from 'material-ui/lib/app-bar'
import LabourForm from './LabourForm'
import Paper from 'material-ui/lib/paper'
import RaisedButton from 'material-ui/lib/raised-button'
import ExpenseForm from './ExpenseForm'
import TotalForm from './TotalForm'
import TextField from 'material-ui/lib/text-field'
import LabourItem from '../scripts/LabourItem'
import { connect } from 'react-redux'
import { updateTotalCost } from './action-creators/updateTotalCost'

import donut from '../scripts/d3.jsx'
 var divStyle = {
    fontfamily: 'Poiret one'
  }




const Layout = React.createClass({

  render: function() {
    console.log('props', this.props)
    const { dispatch, totalCost, totalCharge } = this.props

    return <div className="layout" style = {{display:'inline-block'}}>
            <AppBar />
             <br/>
              <Paper className="paper" zDepth={3} style={{
              display:'inline-block',
              width: '12%', height: '15%'
              }}>
                <LabourForm
                  updateTotalCost={totalCost =>
                    dispatch(updateTotalCost(totalCost))
                  }
                  totalCost={totalCost}/>
            </Paper>
               <Paper className="paper" zDepth={3} style={{
                 display:'inline-block',
                  width: '12%', height: '15%'
                }}>
                 <ExpenseForm />
               </Paper>
               // <donut/>

               <Paper className="paper" zDepth={3} style={{
                position: 'relative',
                display:'inline-block',
                width: '30%',
                height: '75%'
                }}>
                <TotalForm totalCost={totalCost} info={this.props}/>
               </Paper>
           </div>
  }
});

function mapStateToProps (state) {
  return {
    totalCost: state.totalCost
  }
}

export default connect(mapStateToProps)(Layout)
