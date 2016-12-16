import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/lib/dialog'

import EditTextField from '../Dialog/EditTextField'
import FunctionsDialog from '../Dialog/FunctionsDialog'
import ForwardTable from '../Dialog/ForwardTable'

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
    this.handleEdit = this.handleEdit.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.state = {
      open: false,
      edit: false,
      addItems: false,
      nextContent: '',
      nextKey: ''
    }
  }

  handleOpen(content) {
    this.setState({open: true, addItems: false, nextContent: content})
  }

  handleEdit(content) {
    this.setState({open: true, addItems: false, edit: true, nextContent: content})
  }

  handleAdd(content, key) {
    this.setState({open: true, addItems: true, nextKey: key})
  }

  handleClose() {
    this.setState({open: false, edit: false})
  }

  render() {
    const { items, itemsActions } = this.props

    return (
      <div>
        <ForwardTable
          forward={true}
          items={items}
          _handleChecked={itemsActions.handleSelected}
          _handleEdit={this.handleEdit}
          _handleAdd={this.handleAdd}
          _handleOpen={this.handleOpen}
          array={['functionId', 'functionName']}
        />

        <Dialog
          modal={false}
          open={this.state.open}
          contentStyle={style.dialog}
          onRequestClose={this.handleClose}
        >
          {
            this.state.addItems?
              <EditTextField   //有点问题，一开始点增加里面为空，因为这个this.state.operations还没有赋值进去  2016.12.14
                menus={this.state.nextContent}
                key={this.state.nextKey}
                _MenusSubmit={itemsActions.addFunctionsSubmit}
                array={['functionId', 'functionName']}
              />:
              <FunctionsDialog
                edit={this.state.edit}
                itemsActions={itemsActions}
                content={this.state.nextContent}
              />
          }
        </Dialog>
        
      </div>
    )
  }
}