import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'
import MenusItems from './MenusItems'

export default class Menus extends Component {
  render() {
    const {menus, actions} = this.props
    return(
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
    )
  }
}