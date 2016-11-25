import React, { Component, PropTypes } from 'react'
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column'
import TableRow from 'material-ui/lib/table/table-row'
import TableHeader from 'material-ui/lib/table/table-header'
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import TableBody from 'material-ui/lib/table/table-body'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import Search from '../Search/Search'
import Pagination from '../Pagination/Pagination'
const styles = {
  tableCreate: {
    textAlign: 'right',
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
      height:510,
    }
  }

    handleClick(e) {
      alert("123")
    }

  render() {
    const posts = ['123', '456', '789', '654', '852', '856', '564', '762', '886', '326', '427', '556', '666', '756', '010', '020', '889']

    return (
      <div>

        <Search/>

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
              <TableHeaderColumn tooltip="The NAME">NAME</TableHeaderColumn>
              <TableHeaderColumn tooltip="The TITLE">TITLE</TableHeaderColumn>
              <TableHeaderColumn style={styles.tableCreate} tooltip="The EDIT">EDIT</TableHeaderColumn>
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
                <TableRowColumn>{post}</TableRowColumn>
                <TableRowColumn>{post}</TableRowColumn>
                <TableRowColumn style={styles.tableCreate}>
                  <FloatingActionButton mini={true} secondary={true} onClick={this.handleClick.bind(this)}>
                   <ContentCreate />
                  </FloatingActionButton>
                </TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
        
        <Pagination/>

      </div>
    )
  }
}