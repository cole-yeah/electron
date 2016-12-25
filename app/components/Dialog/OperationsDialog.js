import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/lib/dialog'

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
      nextContent: '',
      nextKey: '0-0-0-0-0'
    }
  }
  handleOpen(content) {
    this.setState({open: true, addItems: false, nextContent: content})
  }

  handleEdit(content) {
    this.setState({open: true, addItems: false, nextContent: content})
  }

  handleAdd(key) {
    this.setState({open: true, addItems: true, nextKey: key})
  }

  handleClose() {
    this.setState({open: false, addItems: true})
  }

  render() {
    const { content, key, edit, itemsActions } = this.props
    return (
      <span>
        {      
          edit?
          <EditTextField
            menus={content}
            Key={key}
            _MenusSubmit={itemsActions.operationsSubmit}
            array={['opId', 'opSort', 'opName', 'elementClass']}
          />:
          <ForwardTable
            forward={false}
            items={content.webApis}
            keys={content.key}  //用content.key解决那个webApis下新增每次都在第一个的operations中的webApis的问题 2016.12.21
            _handleChecked={itemsActions.webApisSelected}
            _handleEdit={this.handleEdit}
            _handleAdd={this.handleAdd}
            _handleOpen={this.handleOpen}
            array={['serviceMethod', 'serviceUrl']}
          />
        }

        <Dialog
          modal={false}
          open={this.state.open}
          contentStyle={style.dialog}
          onRequestClose={this.handleClose}
        >
          <EditTextField 
            menus={this.state.nextContent}
            Key={this.state.nextKey} //nextKey 的值其实就是从forwardTable通过handleAdd函数setState然后传过来的，这个值用于去生成新增的functions、operations、webApis下的key
            _MenusSubmit={this.state.addItems?itemsActions.addWebApisSubmit:itemsActions.webApisSubmit}
            array={['serviceMethod', 'serviceUrl']}
          />
        </Dialog>
      </span>
    )
  }
}