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
      nextContent: ''
    }
  }

  handleOpen(content) {
    this.setState({open: true, addItems: false, nextContent: content})
  }

  handleEdit(content) {
    this.setState({open: true, addItems: false, edit: true, nextContent: content})
  }

  handleAdd(content) {
    this.setState({open: true, addItems: true})
  }

  handleClose() {
    this.setState({open: false, edit: false})
  }

  render() {
    const { items, itemsActions, forward, _handleChecked } = this.props

    let dialogChildren = (
      this.state.addItems?
        (<EditTextField   //有点问题，一开始点增加里面为空，因为这个this.state.operations还没有赋值进去  2016.12.14
            menus={this.state.nextContent}
            _MenusSubmit={itemsActions.addOperationsSubmit}
            array={['functionId', 'functionName']}/>)
        :(<FunctionsDialog
            edit={this.state.edit}
            itemsActions={itemsActions}
            content={this.state.nextContent}
          />) 

        )

    return (
      <div>
        <ForwardTable
          forward={true}
          items={items}
          _handleChecked={_handleChecked}
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
          {dialogChildren}
        </Dialog>


      </div>
    )
  }
}