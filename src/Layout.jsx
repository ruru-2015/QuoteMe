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
import { updateTotalCost, updateTotalCharge, updateeTotalCost, updateeTotalCharge } from './action-creators'


function mapStateToProps (state) {
  return {
    name: state.name,
    ename: state.ename,
    totalCost: state.totalCost,
    totalCharge: state.totalCharge,
    etotalCost: state.etotalCost,
    etotalCharge: state.etotalCharge,


  }
}


const Layout = React.createClass({

  render: function() {
    const { dispatch, totalCost, totalCharge, etotalCost,etotalCharge, ename } = this.props
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
                   totalCost={totalCost} totalCharge={totalCharge}
                    updateTotalCharge={totalCharge =>
                    dispatch(updateTotalCharge(totalCharge))
                  }/>
            </Paper>
               <Paper className="paper" zDepth={3} style={{
                 display:'inline-block',
                  width: '12%', height: '15%'
                }}>
                 <ExpenseForm
                    updateeTotalCost={etotalCost =>
                    dispatch(updateeTotalCost(etotalCost))
                  }
                  etotalCost={etotalCost} etotalCharge={etotalCharge}
                     updateeTotalCharge={etotalCharge =>
                    dispatch(updateeTotalCharge(etotalCharge))
                  }/>
               </Paper>


               <Paper className="paper" zDepth={3} style={{
                position: 'relative',
                display:'inline-block',
                width: '30%',
                height: '75%'
                }}>
                <TotalForm {...this.props} />
               </Paper>
           </div>
  }
});


export default connect(mapStateToProps)(Layout)
