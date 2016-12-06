import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'
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

const style = {
  textField: {
    marginLeft: 20,
    width: '100%',
  },
  paper: {
    overflowY: 'auto',
    overflowX: 'hidden',
    height: 260,
  },
  actionButton: {
    margin: 16
  },
  tableCreate: {
    width: 40
  },
  tableHeader: {
    width: 60
  }
}

export default class OperationsDialog extends Component {

  constructor(props) {
    super(props)
  }


  render() {

    const { operations, itemsActions } = this.props

    let element = (
      operations.edit?(
        <div>
          <h3 className="dialogTitle">operations</h3>
          <TextField defaultValue={operations.opId} hintText="opId" floatingLabelText="opId" style={style.textField} />
          <TextField defaultValue={operations.opSort} hintText="opSort" floatingLabelText="opSort" style={style.textField} />
          <TextField defaultValue={operations.opName} hintText="opName" floatingLabelText="opName" style={style.textField} />
          <TextField defaultValue={operations.elementClass} hintText="elementClass" floatingLabelText="elementClass" style={style.textField} />
        </div>):(
        <Table multiSelectable={true}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn style={style.tableHeader} tooltip="The serviceMethod">serviceMethod</TableHeaderColumn>
              <TableHeaderColumn tooltip="The serviceUrl">serviceUrl</TableHeaderColumn>
              <TableHeaderColumn style={style.tableCreate} tooltip="The edit">edit</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={false}>
              {
                operations.webApis.map((api, i) => 
                  <TableRow key={i} webApis={api}>
                    <TableRowColumn style={style.tableHeader}>{api.serviceMethod}</TableRowColumn>
                    <TableRowColumn>{api.serviceUrl}</TableRowColumn>
                    <TableRowColumn style={style.tableCreate}>
                      <FloatingActionButton mini={true} secondary={true} onTouchTap={() => itemsActions.operationEdit(operation.opId)}>
                      <ContentCreate />
                      </FloatingActionButton>
                    </TableRowColumn>

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
