import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import LabourForm from './LabourForm'
import Paper from 'material-ui/lib/paper'
import RaisedButton from 'material-ui/lib/raised-button'

export default React.createClass({
  render: function() {
    return <div className="layout">
            <AppBar />
            <br/>
            <Paper className="paper" zDepth={3} style={{
              width: '12%', height: '15%'
            }}>
              <LabourForm />
              <RaisedButton type="submit"  label="Secondary" secondary={true} style={{ margin:'2%',  }}/>
            </Paper>
           </div>
  }
});


