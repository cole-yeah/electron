import { combineReducers } from 'redux'
import { RECEIVE_ITEMS, OPEN_ITEMS, CHECKED_ALL, CHECKED_ITEMS, SELECTED_ITEMS, TESTS } from '../actions/items'

/**
 * 获取数据
 */
export function items(state=[], action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items.map((item, i) => {
        item.open = false
        item.checked = false
        item.key = i
        item.children.map((child, j) => {
          child.checked = false
          child.selected = false
          child.id = i*10 + j
        })
        return item
      })
      // Object.assign({}, state, {
      //   posts: action.items
      // })
/**
 * 选中该一级菜单
 */
    case OPEN_ITEMS:
      return state.map(item =>
        item.key === action.id?
          Object.assign({}, item, {
            open: !item.open}
          ):item)
        // {...item, open: !item.open}:item)
/**
 * 点击勾选该一级菜单下所有二级菜单
 */
    case CHECKED_ALL:
      let all = state[action.id].children.every(child => child.checked)
      console.log(all)
      return state.map( item => 
          item.key === action.id?
            Object.assign({}, item, {
              children: item.children.map(child => Object.assign({}, child, {
                checked: !all}
              ))
            }):item)
/**
 * 点击勾选或取消二级菜单
 */
    case CHECKED_ITEMS:
      return state.map(item => 
        Object.assign({}, item, {
          children: item.children.map(child => child.id === action.id?
            Object.assign({}, child, {
              checked: !child.checked
            }):child)
          }))
/**
 * 选择该二级菜单
 */
    case SELECTED_ITEMS:
      state.map(item => item.children.map(child => child.selected = false))
      return state.map(item => Object.assign({}, item, {
        children: item.children.map(child => child.id === action.id?
          Object.assign({}, child, {
            selected: true 
          }):child)
        }))

      case TESTS:
        console.log(action.items)
        // return console.log(state.map(item => item.children.filter(child.selected === true)))

    default:
      return state
  }
}
