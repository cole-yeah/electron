import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'
import FlatButton from 'material-ui/lib/flat-button'
import TextField from 'material-ui/lib/text-field'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import Table from 'material-ui/lib/table/table'
import TableHeaderColumn from 'material-ui/lib/table/table-header-column'
import TableRow from 'material-ui/lib/table/table-row'
import TableHeader from 'material-ui/lib/table/table-header'
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import TableBody from 'material-ui/lib/table/table-body'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import ContentForward from 'material-ui/lib/svg-icons/content/forward'
import Dialog from 'material-ui/lib/dialog'

import OperationsDialog from './OperationsDialog'

const style = {
  textField: {
    marginLeft: 20,
    width: '90%',
  },
  paper: {
    overflowY: 'auto',
    overflowX: 'hidden',
    paddingBottom: 20,
  },
  actionButton: {
    margin: 16
  },
  tableCreate: {
    width: 40
  }
};

export default class FunctionsDialog extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { functions, itemsActions } = this.props

    let element = (
      functions.edit?(
        <div>
          <h3 className="dialogTitle">functions</h3>
          <TextField defaultValue={functions.functionId} hintText="functionId" floatingLabelText="functionId" style={style.textField} />
          <TextField defaultValue={functions.functionName} hintText="functionName" floatingLabelText="functionName" style={style.textField} />

          <span className="dialogButton">
            <FlatButton label="Cancel" secondary={true}  onTouchTap={() => itemsActions.handleClose()} />
            <FlatButton label="Submit" primary={true} keyboardFocused={true} onTouchTap={() => itemsActions.handleClose()} />
          </span>

        </div>):(
        <Table multiSelectable={true}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn tooltip="The opId">opId</TableHeaderColumn>
              <TableHeaderColumn tooltip="The opSort">opSort</TableHeaderColumn>
              <TableHeaderColumn tooltip="The opName">opName</TableHeaderColumn>
              <TableHeaderColumn tooltip="The elementClass">elementClass</TableHeaderColumn>
              <TableHeaderColumn style={style.tableCreate} tooltip="The check">check</TableHeaderColumn>
              <TableHeaderColumn style={style.tableCreate} tooltip="The edit">edit</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={false}>
              {
                functions.operations.map((operation, i) => 
                  <TableRow key={i} operations={operation}>
                    <TableRowColumn>{operation.opId}</TableRowColumn>
                    <TableRowColumn>{operation.opSort}</TableRowColumn>
                    <TableRowColumn>{operation.opName}</TableRowColumn>
                    <TableRowColumn>{operation.elementClass}</TableRowColumn>
                    <TableRowColumn style={style.tableCreate}>
                      <FloatingActionButton mini={true} secondary={true} onTouchTap={() => itemsActions.operationOpen(operation.opId)}>
                      <ContentForward />
                      </FloatingActionButton>
                    </TableRowColumn>
                    <TableRowColumn style={style.tableCreate}>
                      <FloatingActionButton mini={true} secondary={true} onTouchTap={() => itemsActions.operationEdit(operation.opId)}>
                      <ContentCreate />
                      </FloatingActionButton>
                    </TableRowColumn>

                    <Dialog
                      modal={false}
                      onRequestClose={() => itemsActions.operationClose()}
                      open={operation.open}>
                      <OperationsDialog
                        operations={operation}/>
                    </Dialog>

                  </TableRow>
                )
            }
          </TableBody>
        </Table>)
    )

    return (
      <Paper style={style.paper} zDepth={2}>
        { element }

      </Paper>
    )
  }
}