import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import Dialog from 'material-ui/lib/dialog'

import MenusItems from './MenusItems'
import EditSecondMenusDialog from '../Dialog/EditSecondMenusDialog'
import EditFirstMenusDialog from '../Dialog/EditFirstMenusDialog'
import AddFirstMenus from '../Dialog/AddFirstMenus'

const style = {
  dialog: {
    width: '80%',
    maxWidth: 'none',
  },
  actionButton: {
    marginLeft: 20
  }
}

export default class Menus extends Component {
  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      open: false,
      first: false,
      addFirst: false,
      addMenus: true,
      content: ''
    }
  }

  handleEdit() {
    //todo 这个要修改二级菜单必须要有勾选一级菜单才行，要修改一级菜单就要全部取消勾选一级菜单下的所有二级菜单，逻辑欠妥
    const menus = this.props.menus.filter(menu => menu.checked === true)
    if(menus.length === 0){
      alert('勾选')
      return
    }
    const functions =  menus[0].children.filter(child => child.checked === true) 
    if(functions.length !== 0) {
      this.setState({addMenus: false, open: true, first: false, content: functions[0]})
    } else if(menus.length !== 0) {
      this.setState({addMenus: false, open: true, first: true, content: menus[0]})
    }
  }

  handleAdd() {
    // const menus = this.props.menus.filter(menu => menu.checked === true)
    this.setState({open: true, addMenus: true })
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
                _dispatchActions={actions.dispatchActions}
                _checkedAll={actions.checkedAll}
                _checkedMenus={actions.checkedMenus}
                menuItems={menu}
                />)
          }
        </ul>

        <span className="buttonBox">
          <FloatingActionButton secondary={true} mini={true} style={style.actionButton} onTouchTap={this.handleAdd.bind(this)}>
            <ContentAdd />
          </FloatingActionButton>
          <FloatingActionButton secondary={true} mini={true} style={style.actionButton} onTouchTap={this.handleEdit.bind(this)}>
            <ContentCreate />
          </FloatingActionButton>
        </span>

        <Dialog
          modal={false}
          open={this.state.open}
          contentStyle={style.dialog}
          onRequestClose={this.handleClose}        
        >
          {
            this.state.addMenus?
              (this.state.first?
                <div>123</div>
                :
                <AddFirstMenus
                  array={[ 'menuId', 'menuCode', 'menuSort', 'name', 'icon' ]}
                  itemsActions={actions}
                />):
                (this.state.first?
                  <EditFirstMenusDialog
                    menus={this.state.content}
                    menusActions={actions}
                    array={[ 'menuId', 'menuCode', 'menuSort', 'name' ]}
                  />:
                  <EditSecondMenusDialog
                    menus={this.state.content}
                    menusActions={actions}
                    array={[ 'menuId', 'menuCode', 'menuSort', 'name', 'menuParentId', 'anchor' ]}
                  />
                )
          }
        </Dialog>

      </span>
    )
  }
}