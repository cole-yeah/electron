import React, { Component, PropTypes } from 'react'
import MenusItems from './MenusItems'

export default class Menus extends Component {
  render() {
    const {posts, actions} = this.props
    return(
      <ul className="menusBox">
        {
          posts.map((post, i) => 
            <MenusItems
              open={actions.openItems}
              _selectedItems={actions.haha}
              _checkedAll={actions.checkedAll}
              _checkedItems={actions.checkedItems}
              items={post}
              />)
        }
      </ul>
    )
  }
}