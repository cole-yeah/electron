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
      nextKey: '0-0-0-0-0',
    }
  }

  handleOpen(content) {
    this.setState({open: true, addItems: false, nextContent: content})
  }

  handleEdit(content) {
    this.setState({open: true, addItems: false, edit: true, nextContent: content})
  }

  handleAdd(key) {
    this.setState({open: true, addItems: true, nextKey: key})
  }

  handleClose() {
    this.setState({open: false, edit: false})
  }

  render() {
    const { items, keys, itemsActions } = this.props
    /**debug2 */ //2.key的值可以正常获取
    /** //todo 新增functions有点问题，就是每新增一个，第一个的functions下就会新增一个空的operations,第一个operations下会增加一个webApis，
    *  这个应该是新增functions时默认给的那个operations:[]这个导致的，待优化 2016.12.21
    */
    return (
      <div>
        <ForwardTable
          forward={true}
          items={items}
          keys={keys}  //functions的新增需要从menus传keys过来
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
                Key={this.state.nextKey} //nextKey 的值其实就是从forwardTable通过handleAdd函数setState然后传过来的，这个值用于去生成新增的functions、operations、webApis下的key
                _MenusSubmit={itemsActions.addFunctionsSubmit}
                array={['functionId', 'functionName']}
              />:
              <FunctionsDialog
                edit={this.state.edit}
                keys={this.state.nextContent.key}  //operations的新增需要从functions传keys过来  //todo 这里的items为什么不用items[0],因为只有一个数组吗？可能以后这个会改动 2016.12.20 
                itemsActions={itemsActions}     //接上  keys这里报错了，因为items是array，直接用items.key报undefined，items[0].key也会报错，因为一开始items为空，也就没有key 
                content={this.state.nextContent}  //接上  所以这里的key用当前的functions的key既可以把新增的operations加到相应的functions上，又可以解决item[0]的问题 2016.12.21
                Key={this.state.nextKey}
              />
          }
        </Dialog>
        
      </div>
    )
  }
}