import React, { Component, PropTypes } from 'react'
import Checkbox from 'material-ui/lib/checkbox'
import cs from 'classnames'

const style = {
  checkbox: {
    width: 30,
    display: 'inline-block',
    verticalAlign: 'middle',
  }
}

export default class MenusItems extends Component {
  render() {
    const {items, open, _checkedAll, _checkedItems, _selectedItems} = this.props
    let element = (
      <span open={items.open}>
        <Checkbox
          checked={items.children.every(child => child.checked)}
          onClick={() => _checkedAll(items.key)}
          style={style.checkbox}/>
        <span
          onClick={() => open(items.key)}>{items.name}</span>
        <span className="arrow">{items.open?'-':'+'}</span>
        <ul className={items.open?'block':'none'}>
          {
            items.children.map((child, j) =>               
              <li
                selected={child.selected} 
                className={child.selected?'bgColor':''}>
                <Checkbox
                  checked={child.checked}
                  onClick={() => _checkedItems(child.id)}
                  style={style.checkbox}/>
                <span
                  child={child}
                  onClick={() => _selectedItems(child.id)}>{child.name}</span>
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