import React, { Component, PropTypes } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table'

const styles = {
  index:{
    width:'10%'
  }
}

export default class Items extends Component {

  constructor(props) {
    super(props);
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
      height: '100%',
    }
  }

  render() {
    const posts = ['123', '456', '789', '654', '852']
    return (
      <Table
        height={this.state.height}
        fixedHeader={this.state.fixedHeader}
        fixedFooter={this.state.fixedFooter}
        selectable={this.state.selectable}
        multiSelectable={this.state.multiSelectable}
      >
        <TableHeader
          displaySelectAll={this.state.showCheckboxes}
          adjustForCheckbox={this.state.showCheckboxes}
          enableSelectAll={this.state.enableSelectAll}
        >
          <TableRow>
            <TableHeaderColumn style={styles.index} tooltip="The ID">ID</TableHeaderColumn>
            <TableHeaderColumn tooltip="The URL">URL</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={this.state.showCheckboxes}
          deselectOnClickaway={this.state.deselectOnClickaway}
          showRowHover={this.state.showRowHover}
          stripedRows={this.state.stripedRows}
        >
          {posts.map( (post, index) => (
            <TableRow key={index}>
              <TableRowColumn style={styles.index}>{index}</TableRowColumn>
              <TableRowColumn>{post}</TableRowColumn>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    )
  }
}