import React, { Component, PropTypes } from 'react'
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column'
import TableRow from 'material-ui/lib/table/table-row'
import TableHeader from 'material-ui/lib/table/table-header'
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import TableBody from 'material-ui/lib/table/table-body'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import ContentForward from 'material-ui/lib/svg-icons/content/forward'
import RaisedButton from 'material-ui/lib/raised-button'
import Search from '../Search/Search'
import Dialog from '../Dialog/Dialog'

// const remote = window.require('electron').remote
// const fs = remote.require('fs')

const style = {
  tableCreate: {
    width: 40,
  },
  table: {
    overflowX: 'hidden'
  },
  raisedButton: {
    margin: 10
  },
}

export default class Items extends Component {

  constructor(props) {
    super(props)
    this.handleOpen = this.handleOpen.bind(this)
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: false,
      showCheckboxes: true,
      open: false,
    }
  }

    handleClick(e) {
      alert("123")
    }
    
   handleOpen(){
    this.setState({open: true});
  }

    handleClose() {
      this.setState({
        open: false
      })    
    }

  render() {
    const { posts } = this.props
    return (
      <div>

        <Search/>

        <Table
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          style={style.table}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip="The functionId">functionId</TableHeaderColumn>
              <TableHeaderColumn tooltip="The functionName">functionName</TableHeaderColumn>
              <TableHeaderColumn style={style.tableCreate} tooltip="The check">check</TableHeaderColumn>
              <TableHeaderColumn style={style.tableCreate} tooltip="The edit">edit</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >

              <TableRow>
                <TableRowColumn>{posts.functionId}</TableRowColumn>
                <TableRowColumn>{posts.functionName}</TableRowColumn>
                <TableRowColumn style={style.tableCreate}>
                  <FloatingActionButton mini={true} secondary={true} onTouchTap={this.handleOpen}>
                   <ContentForward />
                  </FloatingActionButton>
                </TableRowColumn>
                <TableRowColumn style={style.tableCreate}>
                  <FloatingActionButton mini={true} secondary={true} onTouchTap={this.handleOpen}>
                   <ContentCreate />
                  </FloatingActionButton>
                </TableRowColumn>
              </TableRow>
  
          </TableBody>
        </Table>

        <Dialog
            open={this.state.open}
            handleClose={this.handleClose.bind(this)}
        />
        <div className="exp-imp">
          <RaisedButton label="导 入" secondary={true} style={style.raisedButton} />
          <RaisedButton label="导 出" secondary={true} style={style.raisedButton} />
        </div>
      </div>
    )
  }
}
