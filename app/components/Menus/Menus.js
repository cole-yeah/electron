import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import Dialog from 'material-ui/lib/dialog'

import MenusItems from './MenusItems'
import EditTextField from '../Dialog/EditTextField'

const style = {
  dialog: {
    width: '80%',
    maxWidth: 'none',
  },
  actionButton: {
    marginLeft: 20
  }
}

const nameBox = [ 'menuId', 'menuCode', 'menuSort', 'name' ]

export default class Menus extends Component {
  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.state = {
      open: false,
      first: false,
      addFirst: false,
      addMenus: true,
      content: ''
    }
  }

  handleEdit() {
    //todo 这个要修改二级菜单必须要有勾选一级菜单才行，要修改一级菜单就要全部取消勾选一级菜单下的所有二级菜单，逻辑欠妥 2016.12.12
    const menus = this.props.menus.filter(menu => menu.checked === true)
    if(menus.length === 0){
      alert('勾选')
      return
    }
    const functions =  menus[0].children.filter(child => child.checked === true) 
    functions.length !== 0?
      (this.setState({addMenus: false, open: true, first: false, content: functions[0]})):
        (menus.length !== 0?(this.setState({addMenus: false, open: true, first: true, content: menus[0]})):this.state)

  }

  handleAdd() {
    const menus = this.props.menus.filter(menu => menu.checked === true)
    menus.length === 0?this.setState({open: true, first: true, addMenus: true }):this.setState({open: true, first: false, addMenus: true })
  }

  handleClose() {
    this.setState({open: false})
  }

  render() {
    const {menus, actions} = this.props
    return(
      <span className="mainLeftMenus">
        <ul className="menusBox">
          {
            menus.map((menu, i) => 
              <MenusItems
                key={i}
                open={actions.openMenus}
                _dispatchActions={actions.receiveItems}
                _checkedAll={actions.checkedAll}
                _checkedMenus={actions.checkedMenus}
                menuItems={menu}
              />)
          }
        </ul>

        <span className="buttonBox">
          <FloatingActionButton secondary={true} mini={true} style={style.actionButton} onTouchTap={this.handleAdd}>
            <ContentAdd />
          </FloatingActionButton>
          <FloatingActionButton secondary={true} mini={true} style={style.actionButton} onTouchTap={this.handleEdit}>
            <ContentCreate />
          </FloatingActionButton>
        </span>

        <Dialog
          modal={false}
          open={this.state.open}
          contentStyle={style.dialog}
          onRequestClose={this.handleClose}        
        >
          {//todo 新增的content获取的是根据上次点击set的state，欠妥 2016.12.16
            <EditTextField
              menus={this.state.content}
              _MenusSubmit={
                this.state.addMenus?
                  (this.state.first?actions.addFirstMenus:actions.addSecondMenus):
                  (this.state.first?actions.firstMenusSubmit:actions.secondMenusSubmit)}
              array={
                this.state.addMenus?
                  (this.state.first?[ ...nameBox, 'icon' ]:[ ...nameBox, 'menuParentId', 'anchor' ]):
                  (this.state.first?[ ...nameBox ]:[ ...nameBox, 'menuParentId', 'anchor' ])}
            />
          }
        </Dialog>

      </span>
    )
  }
}

// Menus.propTypes = {
//   menus: PropTypes.array.isRequired,
//   actions: PropTypes.func.isRequired
// }