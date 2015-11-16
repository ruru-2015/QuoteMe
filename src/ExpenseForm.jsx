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
const qty = this.refs.qty.getValue()
const cost = this.refs.cost.getValue()
const charge = this.refs.charge.getValue()


  },

  render(){
    return(
      <form className="ExpenseForm" onSubmit={this.onSubmit}>
      <p>Expenses </p>
        <TextField hintText="Name" ref='name'   />
        <TextField hintText="Qty" ref='qty' />
        <TextField hintText="Cost"ref='cost' />
        <TextField hintText="Charge"ref='charge' />
       <RaisedButton type="submit"  label="Submit" secondary={true} style={{ margin:'2%',  }}/>
     </form>
    )
  }
})

