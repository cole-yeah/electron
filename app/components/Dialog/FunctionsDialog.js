import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/lib/dialog'

import ForwardTable from './ForwardTable'
import EditTextField from './EditTextField'
import OperationsDialog from '../Dialog/OperationsDialog'

const style = {
  dialog: {
    width: '80%',
    maxWidth: 'none',
  }
}

export default class FunctionsDialog extends Component {
  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.state = {
      open: false,
      addItems: false,
      api: '',
    }
  }
  handleOpen(content) {
    this.setState({open: true, addItems: false, api: content})
  }

  handleEdit(content) {
    this.setState({open: true, addItems: false, edit: true, api: content})
  }

  handleAdd(content) {
    this.setState({open: true, addItems: true})
  }

  handleClose() {
    this.setState({open: false})
  }

  render() {
    const { content, edit, itemsActions } = this.props

    let element = (
      edit?
        <EditTextField
          menus={content}
          _MenusSubmit={itemsActions.handleSubmit}
          array={['functionId', 'functionName']}//不同点
        />:
        <ForwardTable
          forward={true}//不同点  控制是否有下一级，true为有，false反之
          items={content.operations}//不同点   下一级为operations,若webApis则为webApis
          _handleChecked={itemsActions.operationsSelected}//不同点
          _handleEdit={this.handleEdit}
          _handleAdd={this.handleAdd}
          _handleOpen={this.handleOpen}
          array={['opId', 'opSort', 'opName', 'elementClass']}//不同点
        />
    )

    return (
      <span>
        {element}
        <Dialog
          modal={false}
          open={this.state.open}
          contentStyle={style.dialog}
          onRequestClose={this.handleClose}
        >
          <OperationsDialog
            edit={this.state.edit}
            itemsActions={itemsActions}
            opera={this.state.api}
          />
        </Dialog>
      </span>
    )
  }
}