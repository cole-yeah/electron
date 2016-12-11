import React, { Component, PropTypes } from 'react'
import Checkbox from 'material-ui/lib/checkbox'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import Dialog from 'material-ui/lib/dialog'
import ContentForward from 'material-ui/lib/svg-icons/content/forward'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'

import TextItems from './TextItems'
import OperationsItems from './OperationsItems'

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
      content: ''
    }
  }

  handleOpen(content) {
    this.setState({open: true, operations: content})
    console.log(content)
  }

  handleEdit(content) {
    this.setState({open: true, edit: true, operations: content})
  }

  handleClose() {
    this.setState({open: false, edit: false})
  }

  render() {
    const { items, itemsActions, array, forward, _handleChecked } = this.props
    
    let forwardAdd = (
        forward?<FloatingActionButton secondary={true} mini={true} style={style.actionButton}>
          <ContentAdd />
        </FloatingActionButton>:'' )

    let dialogChildren = (
      forward?<OperationsItems
                edit={this.state.edit}
                itemsActions={itemsActions}
                operations={this.state.operations}/>:       
            <TextItems
              functions={this.state.operations}
              itemsActions={itemsActions}/> )

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
              {forward?<th className="toolItems">forward</th>:''}
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
                {forward?<td className="toolItems">
                  <FloatingActionButton mini={true} secondary={true} onTouchTap={this.handleOpen.bind(this, item)}>
                    <ContentForward />
                  </FloatingActionButton>
                </td>:''}
                <td className="toolItems">
                  <FloatingActionButton mini={true} secondary={true} onTouchTap={this.handleEdit.bind(this, item)}>
                    <ContentCreate />
                  </FloatingActionButton>
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
        {forwardAdd}
      </div>
    )
  }
}