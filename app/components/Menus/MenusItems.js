import React, { Component, PropTypes } from 'react'
import Checkbox from 'material-ui/lib/checkbox'

const style = {
  checkbox: {
    width: 30,
    display: 'inline-block',
    verticalAlign: 'middle',
  }
}

export default class MenusItems extends Component {
  render() {
    const { menuItems, open, _checkedAll, _checkedMenus, _dispatchActions } = this.props
    let element = (
      <span open={menuItems.open}>
        <Checkbox
          checked={menuItems.children.every(child => child.checked)}
          onClick={() => _checkedAll(menuItems.menuId, menuItems.key)}
          style={style.checkbox}/>
        <span
          onClick={() => open(menuItems.menuId)}>{menuItems.name}</span>
        <span className="arrow">{menuItems.open?'▲':'▼'}</span>
        <ul className={menuItems.open?'block':'none'}>
          {
            menuItems.children.map((child, j) =>               
              <li
                key={j}
                selected={child.selected} 
                className={child.selected?'bgColor':''}>
                <Checkbox
                  checked={child.checked}
                  onClick={() => _checkedMenus(child.menuId)}
                  style={style.checkbox}/>
                <span
                  child={child}
                  onClick={() => _dispatchActions(child.menuId, child.functions)}>{child.name}</span>
              </li>)
          }
        </ul>
      </span>
    )
    return (
      <li>
        {element}
      </li>
    )
  }
}