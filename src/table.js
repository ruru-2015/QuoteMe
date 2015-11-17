import React from 'react'
const Table = require('material-ui/lib/table/table');
const TableBody = require('material-ui/lib/table/table-body');
const TableFooter = require('material-ui/lib/table/table-footer');
const TableHeader = require('material-ui/lib/table/table-header');
const TableHeaderColumn = require('material-ui/lib/table/table-header-column');
const TableRow = require('material-ui/lib/table/table-row');
const TableRowColumn = require('material-ui/lib/table/table-row-column');



var TotalsTable =  React.createClass({

  render: function() {

    const {items, jobs, activeJob} = this.props
    console.log('table', this.props)
    this.state = {
      fixedHeader: false,
      fixedFooter: false,
      stripedRows: false,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: false,
      height: '300px',
    };
    return(
      <Table>
        <TableHeader >
          <TableRow>
            <TableHeaderColumn colSpan="3" tooltip='Labour' style={{textAlign: 'center'}}>
              Labour cost
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn >Charge</TableHeaderColumn>
            <TableHeaderColumn >Name</TableHeaderColumn>
            <TableHeaderColumn>Cost</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            jobs.map(job => {
              return (
                <TableRow>
                  <TableRowColumn >{job.name}</TableRowColumn>
                  <TableRowColumn>{job.totalCost}</TableRowColumn>
                  <TableRowColumn>{job.totalCharge}</TableRowColumn>
                </TableRow>
                )
            })
          }
        </TableBody>
      </Table>
    )
  }
})

export default TotalsTable
