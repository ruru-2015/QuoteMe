import React from 'react'
import TextField from 'material-ui/lib/text-field'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/lib/raised-button'

export default React.createClass({
  getDefaultProps: function() {
  return {
    value: ''
  }},

  onSubmit: function(e){
    e.preventDefault();
const name = this.refs.name.getValue()
const time = this.refs.time.getValue()
const cost = this.refs.cost.getValue()
const charge = this.refs.charge.getValue()

console.log(name,time,cost,charge)
  },

  render(){
    return(
      <form className="labourForm" onSubmit={this.onSubmit}>
      <p>Labour Costs</p>
        <TextField hintText="Name" ref='name'   />
        <TextField hintText="Time" ref='time' />
        <TextField hintText="Cost"ref='cost' />
        <TextField hintText="Charge"ref='charge' />
       <RaisedButton type="submit"  label="Secondary" secondary={true} style={{ margin:'2%',  }}/>Add
     </form>
    )
  }
})

