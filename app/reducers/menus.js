import { RECEIVE_MENUS, OPEN_MENUS, CHECKED_ALL, CHECKED_MENUS, SELECTED_MENUS, COMBINE_ITEMS } from '../actions/menus'

/**
 * 获取数据
 */
export function menus(state=[], action) {
  switch (action.type) {
    case RECEIVE_MENUS:
      return action.menus.map((menu, i) => {
        menu.open = false
        menu.checked = false
        menu.key = i
        menu.children.map(child => {
          child.checked = false
          child.selected = false
          child.functions.map(fun => {
            fun.checked = false
            fun.operations.map(operation => {
              operation.checked = false
            })
          })
        })
        return menu
      })
      // Object.assign({}, state, {
      //   posts: action.items
      // })
/**
 * 选中该一级菜单
 */
    case OPEN_MENUS:
      return state.map(menu =>
        menu.menuId === action.menuId?
          Object.assign({}, menu, {
            open: !menu.open}
          ):menu)
        // {...menu, open: !menu.open}:menu)
/**
 * 点击勾选该一级菜单下所有二级菜单
 */
    case CHECKED_ALL:
      let all = state[action.id].children.every(child => child.checked)
      console.log(all)
      return state.map( menu => 
          menu.menuId === action.menuId?
            Object.assign({}, menu, {
              children: menu.children.map(child => Object.assign({}, child, {
                checked: !all}
              ))
            }):menu)
/**
 * 点击勾选或取消二级菜单
 */
    case CHECKED_MENUS:
      return state.map(menu => 
        Object.assign({}, menu, {
          children: menu.children.map(child => child.menuId === action.menuId?
            Object.assign({}, child, {
              checked: !child.checked
            }):child)
          }))
/**
 * 选择该二级菜单
 */
    case SELECTED_MENUS:
      state.map(menu => menu.children.map(child => child.selected = false))
      return state.map(menu => Object.assign({}, menu, {
        children: menu.children.map(child => child.menuId === action.menuId?
          Object.assign({}, child, {
            selected: true 
          }):child)
        }))

    case COMBINE_ITEMS:
      // const items = action.id
      const funId = state.map(menu => menu.children.map(child => child.menuId))
      console.log(typeof(action.items))
      // console.log(funId)
      return state.map(menu => Object.assign({}, menu, {
        children: menu.children.map(child => action.id === child.menuId?
          Object.assign({}, child, { 
            functions: action.items 
          }):child)
      }))    

    default:
      return state
  }
}
