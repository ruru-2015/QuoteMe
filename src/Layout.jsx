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
import { updateTotalCost, updateTotalCharge } from './action-creators'


function mapStateToProps (state) {
  return {
    totalCost: state.totalCost,
    totalCharge: state.totalCharge
  }
}


const Layout = React.createClass({

  render: function() {
    const { dispatch, totalCost, totalCharge } = this.props
    console.log('Layout props', this.props)


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
                  totalCost={totalCost}
                     updateTotalCharge={totalCharge =>
                    // dispatch({ type: 'TOTAL_COST', payload: totalCharge })

                    dispatch(updateTotalCharge(totalCharge))
                  }
                  totalCharge={totalCharge}/>
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
                <TotalForm totalCost={totalCost} totalCharge={totalCharge} info={this.props}/>
               </Paper>
           </div>
  }
});


export default connect(mapStateToProps)(Layout)
