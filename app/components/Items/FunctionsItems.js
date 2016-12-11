//暂时没用到
import React, { Component, PropTypes } from 'react'
import Checkbox from 'material-ui/lib/checkbox'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import ContentForward from 'material-ui/lib/svg-icons/content/forward'
import Dialog from 'material-ui/lib/dialog'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'

import OperationsDialog from '../Dialog/OperationsDialog'
import OperationsItems from './OperationsItems'

const style = {
  actionButton: {
    position: 'relative',
    left: '48%',
    margin: '0 10px 20px'
  }
}

export default class ChildrenItems extends Component {

  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      open: false,
      edit: false,
      operations: '',
    }
  }
  handleOpen(operation) {
    this.setState({open: true, operations: operation})
    console.log(operation)
  }

  handleEdit(operation) {
    this.setState({open: true, edit: true, operations: operation})
  }

  handleClose() {
    this.setState({open: false, edit: false})
  }

  render() {
    const { items, itemsActions } = this.props

    return (
      <span>
        <table className="tableItems">
          <thead className="theadItems">
            <tr>
              <th className="toolItems"><Checkbox disabled={true} /></th>
              <th className="thItems">opId</th>
              <th className="thItems">opSort</th>
              <th className="thItems">opName</th>
              <th className="thItems">elementClass</th>
              <th className="toolItems">forward</th>
              <th className="toolItems">edit</th>
            </tr>
            </thead>
          <tbody>

          {//mark ^^
            items.map(item => item.operations.map((operation, i) => 
              <tr key={i}>
                <td className="toolItems"><Checkbox checked={operation.checked} onClick={() => itemsActions.operationsSeleted(operation.opId)}/></td>
                <td className="tdItems">{operation.opId}</td>
                <td className="tdItems">{operation.opSort}</td>
                <td className="tdItems">{operation.opName}</td>
                <td className="tdItems">{operation.elementClass}</td>
                <td className="toolItems">
                  <FloatingActionButton mini={true} secondary={true} onTouchTap={this.handleOpen.bind(this, operation)} >
                    <ContentForward />
                  </FloatingActionButton>
                </td>
                <td className="toolItems">
                  <FloatingActionButton mini={true} secondary={true} onTouchTap={this.handleEdit.bind(this, operation)} >
                    <ContentCreate />
                  </FloatingActionButton>
                </td>

              </tr>
            ))
          }

          </tbody>
          <Dialog open={this.state.open} onRequestClose={this.handleClose}>
            <OperationsItems
              edit={this.state.edit}
              itemsActions={itemsActions}
              operations={this.state.operations}
            />
          </Dialog>
        </table>
        <FloatingActionButton secondary={true} mini={true} style={style.actionButton}>
          <ContentAdd />
        </FloatingActionButton>
      </span>
    )
  }
}