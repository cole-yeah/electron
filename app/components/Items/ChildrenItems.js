import React, { Component, PropTypes } from 'react'
import Checkbox from 'material-ui/lib/checkbox'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import Dialog from 'material-ui/lib/dialog'

import TextItems from './TextItems'

const style = {
  dialog: {
    width: '80%',
    maxWidth: 'none',
  }
}

export default class ChildrenItems extends Component {
  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      open: false,
    }
  }

  handleEdit() {
    this.setState({open: true})
  }

  handleClose() {
    this.setState({ open: false })
  }

  render() {
    const { item, itemsActions } = this.props

    return (
      <span>
        <table className="tableItems">
          <thead className="theadItems">
            <tr>
              <th className="toolItems"><Checkbox disabled={true} /></th>
              <th className="thItems">functionId</th>
              <th className="thItems">functionName</th>
              <th className="toolItems">edit</th>
            </tr>
            </thead>
          <tbody>

          <tr>
            <td className="toolItems"><Checkbox checked={item.checked} onClick={() => itemsActions.handleSelected()}/></td>
            <td className="tdItems">{item.functionId}</td>
            <td className="tdItems">{item.functionName}</td>
            <td className="toolItems">
              <FloatingActionButton mini={true} secondary={true} onClick={this.handleEdit.bind(this)}>
                <ContentCreate />
              </FloatingActionButton>
            </td>
          </tr>

          </tbody>

          <Dialog
            modal={false}
            open={this.state.open}
            contentStyle={style.dialog}
            onRequestClose={this.handleClose}
          >
            <TextItems
              functions={item}
              itemsActions={itemsActions}/>
          </Dialog>

        </table>
      </span>
    )
  }
}