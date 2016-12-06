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
  }    


  render() {
    const { items=[], itemsActions } = this.props
    return (
      <div>

        <Search
          searchTitle={items} />

        <Table
          style={style.table}
        >
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>functionId</TableHeaderColumn>
              <TableHeaderColumn>functionName</TableHeaderColumn>
              <TableHeaderColumn style={style.tableCreate}>check</TableHeaderColumn>
              <TableHeaderColumn style={style.tableCreate}>edit</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
          {
            items.map((item, i) => 
              <TableRow 
                key={i}>
                <TableRowColumn>{item.functionId}</TableRowColumn>
                <TableRowColumn>{item.functionName}</TableRowColumn>
                <TableRowColumn style={style.tableCreate}>
                  <FloatingActionButton mini={true} secondary={true} onClick={() => itemsActions.handleOpen()}>
                   <ContentForward />
                  </FloatingActionButton>
                </TableRowColumn>
                <TableRowColumn onClick={() => itemsActions.handleOpen()} style={style.tableCreate}>
                  <FloatingActionButton mini={true} secondary={true} onClick={() => itemsActions.handleEdit()}>
                   <ContentCreate />
                  </FloatingActionButton>
                </TableRowColumn>

                <Dialog
                  open={item.open}
                  functions={item}
                  itemsActions={itemsActions}
                  handleClose={() => itemsActions.handleClose()}
                />

              </TableRow>
              
              )
          }
          </TableBody>
        </Table>


        <div className="exp-imp">
          <RaisedButton label="导 入" secondary={true} style={style.raisedButton} />
          <RaisedButton label="导 出" secondary={true} style={style.raisedButton} />
        </div>
      </div>
    )
  }
}
