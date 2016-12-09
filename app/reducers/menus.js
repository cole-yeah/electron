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
 * 点击勾选该一级菜单下所有二、三级菜单
 */
    case CHECKED_ALL:
      const all = state[action.id].children.every(child => child.checked)
      const allChecked = state[action.id].children.every(child =>
          child.functions.every(fun => 
            fun.operations.every(operation => 
              operation.checked))
        )
      console.log(allChecked)
      // console.log(all)
      return state.map( menu => 
          menu.menuId === action.menuId?
            Object.assign({}, menu, {
              children: menu.children.map(child => Object.assign({}, child, {
                checked: !all,
                functions: child.functions.map(fun => Object.assign({}, fun, {
                  checked: !fun.checked,
                  operations: fun.operations.map(operation => Object.assign({}, operation, {
                    checked: allChecked?false:true
                  }))
                }))
              }))
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
/**
 * 合并items修改后的数据
 */
    case COMBINE_ITEMS:
      const funId = state.map(menu => menu.children.map(child => child.menuId))
      console.log(typeof(action.items))
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
