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
  ADD_SECOND_MENUS
} from '../actions/menus'

/**
 * 获取数据
 */
export function menus(state = [], action) {
  switch (action.type) {
    case RECEIVE_MENUS:
      return action.menus.map((menu, i) => {
        menu.open = false
        menu.checked = false
        menu.key = i + '-' + 0 + '-' + 0 + '-' + 0 + '-' + 0
        menu.children.map((child, j) => {
          child.checked = false
          child.key = i + '-' + j + '-' + 0 + '-' + 0 + '-' + 0
          child.functions.map((fun, k) => {
            fun.checked = false
            fun.key = i + '-' + j + '-' + k + '-' + 0 + '-' + 0
            fun.operations.map((operation, x) => {
              operation.checked = false,
                operation.key = i + '-' + j + '-' + k + '-' + x + '-' + 0
              operation.id = operation.opId
              operation.webApis.map((api, y) => {
                api.checked = false
                api.key = i + '-' + j + '-' + k + '-' + x + '-' + y
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
        menu.key === action.key ?
          Object.assign({}, menu, {
            open: !menu.open
          }
          ) : menu)
    /**
     * 点击勾选该一级菜单下所有二、三、四级菜单
     */
    case CHECKED_ALL:
      const id = parseInt((action.key).split('-')[0])
      const allChildren = state[id].children.every(child => child.checked)
      const allOperations = state[id].children.every(child =>
        child.functions.every(fun =>
          fun.operations.every(operation =>
            operation.checked))
      )
      const allWebApis = state[id].children.every(child =>
        child.functions.every(fun =>
          fun.operations.every(operation =>
            operation.webApis.every(api =>
              api.checked))
        )
      )
      return state.map(menu =>
        menu.key === action.key ?
          Object.assign({}, menu, {
            checked: !menu.checked,
            children: menu.children.map(child => Object.assign({}, child, {
              checked: !allChildren,
              functions: child.functions.map(fun => Object.assign({}, fun, {
                checked: !fun.checked,
                operations: fun.operations.map(operation => Object.assign({}, operation, {
                  checked: !allOperations,
                  webApis: operation.webApis.map(api => Object.assign({}, api, {
                    checked: !allWebApis
                  }))
                }))
              }))
            }))
          }) : menu)
    /**
     * 点击勾选或取消二级菜单
     */
    case CHECKED_MENUS:
      return state.map(menu =>
        Object.assign({}, menu, {
          children: menu.children.map(child => child.key === action.key ?
            Object.assign({}, child, {
              checked: !child.checked
            }) : child)
        }))
    /**
     * 合并items修改后的数据
     */
    case COMBINE_ITEMS:
      const funId = state.map(menu => menu.children.map(child => child.key))
      return state.map(menu => Object.assign({}, menu, {
        children: menu.children.map(child => action.key === child.key ?
          Object.assign({}, child, {
            functions: action.items
          }) : child)
      }))
    /**
     * 提交修改一级菜单数据
     */
    case FIRST_MENUS_SUBMIT:
      return state.map(menu => menu.key === action.key ?
        Object.assign({}, menu, {
          menuId: action.menuId,
          menuCode: action.menuCode,
          menuSort: action.menuSort,
          name: action.name
        }) : menu)
    /**
     * 提交修改二级菜单数据
     */
    case SECOND_MENUS_SUBMIT:
      console.log(action.key)
      return state.map(menu => menu.menuId === action.menuParentId ? (Object.assign({}, menu, {
        children: menu.children.map(child => child.key === action.key ?
          Object.assign({}, child, {
            menuId: action.menuId,
            menuCode: action.menuCode,
            menuSort: action.menuSort,
            name: action.name,
            menuParentId: action.menuParentId,
            anchor: action.anchor
          }) : child)
      })) : menu)
    /**
     * 提交新增一级菜单数据
     */
    case ADD_FIRST_MENUS:
      const a = state.length
      state.push({
        menuId: action.menuId,
        menuCode: action.menuCode,
        menuSort: action.menuSort,
        name: action.name,
        icon: action.icon,
        key: a + '-' + 0 + '-' + 0 + '-' + 0 + '-' + 0,
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
      const b = parseInt((action.nextKey).split('-')[0])
      const c = state[b].children.length
      state.map(menu => menu.menuId === action.menuParentId ? Object.assign({}, menu, {
        children: menu.children.push({
          menuId: action.menuId,
          menuCode: action.menuCode,
          menuSort: action.menuSort,
          name: action.name,
          menuParentId: action.menuParentId,
          anchor: action.anchor,
          key: b + '-' + c + '-' + 0 + '-' + 0 + '-' + 0,
          systemName: "收货系统",
          "icon": null,
          level: 2,
          functions: [],
          children: [],
          topMenu: false
        })
      }) : menu)

    default:
      return state
  }
}
