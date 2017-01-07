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
    const { menuItems, open, _checkedAll, _checkedMenus, _dispatchActions, _menuDelete, _menuSubmit } = this.props
    let element = (
      <span open={menuItems.open}>
      <div className={menuItems.open ?'addBackground':'reduceBackground'}>
        <Checkbox
          checked={menuItems.checked}
          onClick={() => _checkedAll(menuItems.menuId, menuItems.key)}
          style={style.checkbox} />
        <span
          className="itemsSpan"
          onClick={() => open(menuItems.key)}
          id={menuItems.key}>
          {menuItems.name}
        </span>
        <span className="arrow" title="删除" onClick={() => _menuDelete('First', menuItems.key)}>✘</span>
        <span className="arrow" title="修改" onClick={() => _menuSubmit('First', menuItems)}>✎</span>
        </div>
        <ul className={menuItems.open ? 'block' : 'none'}>
          {
            menuItems.children.map((child, j) =>
              <li
                key={j}
                selected={child.selected}
                className={child.selected ? 'bgColor' : ''}>
                <Checkbox
                  checked={child.checked}
                  onClick={() => _checkedMenus(child.key)}
                  style={style.checkbox} />
                <span
                  child={child}
                  className="itemsSpan"
                  id={menuItems.key}
                  onClick={() => _dispatchActions(child.key, child.functions)}>
                  {child.name}
                </span>
                <span className="arrow" title="删除" onClick={() => _menuDelete('Second', child.key)}>✘</span>
                <span className="arrow" title="修改" onClick={() => _menuSubmit('Second', child)}>✎</span>
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