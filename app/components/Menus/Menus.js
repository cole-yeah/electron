import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'

import MenusItems from './MenusItems'

const style = {
  actionButton: {
    marginLeft: 20
  }
}

export default class Menus extends Component {
  render() {
    const {menus, actions} = this.props
    return(
      <span>
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
          <FloatingActionButton secondary={true} mini={true} style={style.actionButton}>
            <ContentAdd />
          </FloatingActionButton>
          <FloatingActionButton secondary={true} mini={true} style={style.actionButton}>
            <ContentCreate />
          </FloatingActionButton>
        </span>

      </span>
    )
  }
}