import React, { Component, PropTypes } from 'react'
import Checkbox from 'material-ui/lib/checkbox'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import Dialog from 'material-ui/lib/dialog'
import ContentForward from 'material-ui/lib/svg-icons/content/forward'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import Colors from 'material-ui/lib/styles/colors'

import EditMenusDialog from '../Dialog/EditMenusDialog'
import OperationsDialog from '../Dialog/OperationsDialog'

const style = {
  dialog: {
    width: '80%',
    maxWidth: 'none',
  },
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
      addItems: false,
      operations: ''
    }
  }

  handleOpen(content) {
    this.setState({open: true, addItems: false, operations: content})
  }

  handleEdit(content) {
    this.setState({open: true, addItems: false, edit: true, operations: content})
  }

  handleAdd(content) {
    this.setState({open: true, addItems: true})
  }

  handleClose() {
    this.setState({open: false, edit: false})
  }

  render() {
    const { items, itemsActions, array, forward, _handleChecked } = this.props

    let dialogChildren = (
      this.state.addItems?
        (<EditMenusDialog   //有点问题，一开始点增加里面为空，因为这个this.state.operations还没有赋值进去  2016.12.14
            menus={this.state.operations}
            _MenusSubmit={itemsActions.addOperationsSubmit}
            array={['opId', 'opSort', 'opName', 'elementClass']}/>)
        :(forward?
          <OperationsDialog
            edit={this.state.edit}
            itemsActions={itemsActions}
            operations={this.state.operations}
            array={['opId', 'opSort', 'opName', 'elementClass']}
          />:       
          <EditMenusDialog
            menus={this.state.operations}
            _MenusSubmit={itemsActions.handleSubmit}
            array={['functionId', 'functionName']}
          />) 
        )

    return (
      <div>
        <table className="tableItems">
          <thead className="theadItems">
            <tr>
              <th className="toolItems"><Checkbox disabled={true} /></th>
              {
                array.map((arr, i) => 
                  <th className="thItems" key={i}>{arr}</th>)
              }
              <th className="toolItems">forward</th>
              <th className="toolItems">edit</th>
            </tr>
            </thead>
          <tbody>

          {
            items.map((item, i) =>
              <tr key={i}>
                <td className="toolItems"><Checkbox checked={item.checked} onClick={() => _handleChecked(item.opId)}/></td>
                {
                  array.map(arr => 
                    <td className="tdItems">{item[arr]}</td>
                  )
                }
                <td className="toolItems">
                  <ContentForward color={Colors.cyan500} onTouchTap={this.handleOpen.bind(this, item)} />
                </td>
                <td className="toolItems">
                  <ContentCreate color={Colors.cyan500} onTouchTap={this.handleEdit.bind(this, item)} />
                </td>
              </tr>
            )
          }

          </tbody>

          <Dialog
            modal={false}
            open={this.state.open}
            contentStyle={style.dialog}
            onRequestClose={this.handleClose}
          >
            {dialogChildren}
          </Dialog>

        </table>

        <FloatingActionButton secondary={true} mini={true} style={style.actionButton} onTouchTap={this.handleAdd.bind(this)}>
          <ContentAdd />
        </FloatingActionButton>

      </div>
    )
  }
}