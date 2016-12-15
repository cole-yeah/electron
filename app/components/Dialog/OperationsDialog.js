import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/lib/dialog'

import WebApisDialog from './WebApisDialog'
import ForwardTable from './ForwardTable'
import EditTextField from './EditTextField'

const style = {
  dialog: {
    width: '80%',
    maxWidth: 'none',
  }
}

export default class OperationsDialog extends Component {
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
    const { opera, edit, itemsActions } = this.props

    let element = (
      edit?
        <EditTextField
          menus={opera}
          _MenusSubmit={itemsActions.operationsSubmit}
          array={['opId', 'opSort', 'opName', 'elementClass']}
        />:
        <ForwardTable
          forward={false}
          items={opera.webApis}
          _handleChecked={itemsActions.webApisSelected}
          _handleEdit={this.handleEdit}
          _handleAdd={this.handleAdd}
          _handleOpen={this.handleOpen}
          array={['serviceMethod', 'serviceUrl']}
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
          {this.state.addItems?
            <WebApisDialog
              array={['serviceMethod', 'serviceUrl']}
              itemsActions={itemsActions}
              opId = {opera.opId}
              api={opera.webApis.length !== 0?opera.webApis[0]:(opera.webApis.serviceMethod='',opera.webApis.serviceUrl='')}
            />
            :(<WebApisDialog
                array={['serviceMethod', 'serviceUrl']}
                itemsActions={itemsActions}
                opId={this.state.api.id}
                api={this.state.api}
              />)
          }
        </Dialog>
      </span>
    )
  }
}