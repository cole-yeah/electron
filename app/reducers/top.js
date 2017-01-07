import { SET_TOP_OPEN, SET_TOP_EDIT, SET_TOP_ADD, SET_TOP_CLOSE } from '../actions/top'

const initialState = { open: false, first: false, addMenu: true, nextKey: '0-0-0-0-0', idArray: [], nextContent: '', menuId: '', menuCode: '', menuParentId: '' }

export function top(state = initialState, action) {
  switch (action.type) {

    case SET_TOP_EDIT:
      return action.dataType === 'First' ?
        {...state, open: true, first: true, addMenus: false, nextContent: action.content } :
        {...state, open: true, first: false, addMenus: false, nextContent: action.content }

    case SET_TOP_ADD:
      const menus = action.content.filter(menu => menu.checked)
      const arrayFirst = action.content.map(item => item.menuId)    //一级菜单下的menuId数组
      const arraySecond = action.content.map(item => item.children.map(child => child.menuId))  //二级菜单下的menuId数组
      function Id(obj) {  //定义一个将多层嵌套数组合并成一层数组的函数
        return obj.reduce((x, y) => {
          return x.concat(y)
            .reduce((x, y) => {
              return x.concat(y)
            }, [])
        }, []).sort()
      }
      if (menus.length === 0) {
        const FirstId = Id(arrayFirst)
        const newOne = parseInt(FirstId[FirstId.length - 1]) + 1
        return { ...state, open: true, first: true, addMenus: true, menuId: newOne, menuCode: newOne, idArray: FirstId }
      } else {
        const FirstId = Id(arraySecond)
        const SecondId = menus[0].menuId
        const IdLength = menus[0].children.length + 1
        let num       //这里不能用const，下面有两次赋值
        IdLength > 9 ? num = '0' + IdLength : num = '00' + IdLength //避免有 如10001-1格式出现
        const newId = SecondId + '-' + num
        return { ...state, open: true, first: false, addMenus: true, nextKey: menus[0].key, menuId: newId, menuCode: newId, menuParentId: SecondId, idArray: FirstId }
      }

    case SET_TOP_CLOSE:
      return {...state, open: false }

    default:
      return state
  }
}