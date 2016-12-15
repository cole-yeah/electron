import { 
  RECEIVE_MENUS, 
  OPEN_MENUS, 
  CHECKED_ALL, 
  CHECKED_MENUS, 
  SELECTED_MENUS, 
  COMBINE_ITEMS, 
  FIRST_MENUS_SUBMIT, 
  SECOND_MENUS_SUBMIT, 
  ADD_FIRST_MENUS,
  ADD_SECOND_MENUS } from '../actions/menus'

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
        menu.children.map((child, j) => {
          child.checked = false
          child.key = j
          child.functions.map(fun => {
            fun.checked = false
            fun.id = fun.functionsId
            fun.operations.map((operation, x) => {
              operation.checked = false,
              operation.id = operation.opId,
              operation.webApis.map((api, y) => {
                api.checked = false,
                api.id = (x*10) + y
              })
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
      return state.map( menu => 
          menu.menuId === action.menuId?
            Object.assign({}, menu, {
              checked: !menu.checked,
              children: menu.children.map(child => Object.assign({}, child, {
                checked: !all,
                functions: child.functions.map(fun => Object.assign({}, fun, {
                  checked: !fun.checked,
                  operations: fun.operations.map(operation => Object.assign({}, operation, {
                    checked: !allChecked
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
      // state.map(menu => menu.children.map(child => child.selected = false))
      // return state.map(menu => Object.assign({}, menu, {
      //   children: menu.children.map(child => child.menuId === action.menuId?
      //     Object.assign({}, child, {
      //       selected: true 
      //     }):child)
      //   }))
/**
 * 合并items修改后的数据
 */
    case COMBINE_ITEMS:
      const funId = state.map(menu => menu.children.map(child => child.menuId))
      return state.map(menu => Object.assign({}, menu, {
        children: menu.children.map(child => action.id === child.menuId?
          Object.assign({}, child, { 
            functions: action.items 
          }):child)
      }))    
/**
 * 提交修改一级菜单数据
 */
    case FIRST_MENUS_SUBMIT:
      return state.map(menu => menu.menuId === action.menuId?
        Object.assign({}, menu, {
          menuId: action.menuId,
          menuCode: action.menuCode,
          menuSort: action.menuSort,
          name: action.name
        }):menu)
/**
 * 提交修改二级菜单数据
 */
    case SECOND_MENUS_SUBMIT:
      return state.map(menu => menu.menuId === action.menuParentId?(Object.assign({}, menu, {
        children: menu.children.map(child => child.menuId === action.menuId?
          Object.assign({}, child, {
            menuId: action.menuId, 
            menuCode: action.menuCode, 
            menuSort: action.menuSort, 
            name: action.name, 
            menuParentId: action.menuParentId, 
            anchor: action.anchor
          }):child)
      })):menu)
/**
 * 提交新增一级菜单数据
 */
    case ADD_FIRST_MENUS:
      // console.log('提交新增一级菜单数据')
      state.push({
        menuId: action.menuId,
        menuCode: action.menuCode,
        icon: action.icon,
        menuSort: action.menuSort,
        name: action.name,
        children: [],
        systemName: '收货系统',
        menuParent: '-1',
        level: 1,
        anchor: null,
        functions: null,
        topMenu: true
      })
/**
 * 提交新增二级菜单数据
 */
    case ADD_SECOND_MENUS:
      console.log('提交新增二级菜单数据')
      // state.map(item => item.menuId === action.menuId?Object.assign({}, item, {
      //   children: item.children.push({
      //     systemName: "收货系统",
      //     menuId: action.menuId,
      //     menuCode: action.menuCode,
      //     menuParentId: action.menuParentId,
      //     menuSort: action.menuSort,
      //     anchor: action.anchor,
      //     name: action.name,
      //     "icon": null,
      //     level: 2,
      //     functions: [],
      //     children: [],
      //     topMenu: false          
      //   })
      // }):item)

    default:
      return state
  }
}
