const remote = window.require('electron').remote
const fs = remote.require('fs')
const {dialog} = window.require('electron').remote

export const RECEIVE_MENUS = 'RECEIVE_MENUS'
export const OPEN_MENUS = 'OPEN_MENUS'
export const CHECKED_ALL = 'CHECKED_ALL'
export const CHECKED_MENUS = 'CHECKED_MENUS'
export const SELECTED_MENUS = 'SELECTED_MENUS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const COMBINE_ITEMS = 'COMBINE_ITEMS'
export const SECOND_MENUS_SUBMIT = 'SECOND_MENUS_SUBMIT'
export const FIRST_MENUS_SUBMIT = 'FIRST_MENUS_SUBMIT'
export const ADD_FIRST_MENUS = 'ADD_FIRST_MENUS'
export const ADD_SECOND_MENUS = 'ADD_SECOND_MENUS'
export const GET_KEY = 'GET_KEY'
/**
 * 打开菜单action
 */
export function openMenus(key) {
  return {
    type: OPEN_MENUS,
    key,
  }
}
/**
 * 勾选一、二、三、四级菜单action
 */
export function checkedAll(menuId, key) {
  return {
    type: CHECKED_ALL,
    menuId,
    key,
  }
}
/**
 * 选中菜单action
 */
export function checkedMenus(key) {
  return {
    type: CHECKED_MENUS,
    key
  }
}
/**
 * 获取items action
 */
export function receiveItems(key, menus) {
  return {
    type: RECEIVE_ITEMS,
    items: menus,
    key,
  }
}
/**
 * 从menus传keys给items action
 */
export function getKey(key) {
  return {
    type: GET_KEY,
    key
  }
}
/**
 * 派发器action
 */
export function dispatchActions(key, menus) {
  return dispatch => {
    dispatch(receiveItems(key, menus))
    dispatch(getKey(key))
  }
}
/**
 * 选中菜单action
 */
export function selectedMenus(menuId) {
  return {
    type: SELECTED_MENUS,
    menuId,
  }
}
/**
 * 把items合并到menus上action
 */
export function combineItems(key, items) {
  return {
    type: COMBINE_ITEMS,
    items,
    key
  }
}
/**
 * 修改一级菜单action
 */
export function firstMenusSubmit(nextKey, key, menuId, menuCode, menuSort, name) {
  return {
    type: FIRST_MENUS_SUBMIT,
    nextKey,
    key,
    menuId,
    menuCode,
    menuSort,
    name
  }
}
/**
 * 修改二级菜单action
 */
export function secondMenusSubmit(nextKey, key, menuId, menuCode, menuSort, name, menuParentId, anchor) {
  return {
    type: SECOND_MENUS_SUBMIT,
    nextKey,
    key,
    menuId,
    menuCode,
    menuSort,
    name,
    menuParentId,
    anchor
  }
}
/**
 * 新增一级菜单action
 */
export function addFirstMenus(nextKey, key, menuId, menuCode, menuSort, name, icon) {
  return {
    type: ADD_FIRST_MENUS,
    nextKey,
    key,
    menuId,
    menuCode,
    menuSort,
    name,
    icon
  }
}
/**
 * 新增二级菜单action
 */
export function addSecondMenus(nextKey, key, menuId, menuCode, menuSort, name, menuParentId, anchor) {
  return {
    type: ADD_SECOND_MENUS,
    nextKey,
    key,
    menuId,
    menuCode,
    menuSort,
    name,
    menuParentId,
    anchor
  }
}
/**
 * 默认读取本地json文件获取列表,根据参数first,second 索引出点击菜单下的数组
 */
export function readItemsFile() {
  return dispatch => {
    return (fs.readFile('./menus.json', 'utf-8', (err, data) => {
      data = JSON.parse(data)
      dispatch(receiveMenus(data))
    }))
  }
}
/**
* 导入本地json文件获取列表
*/
export function importItemsFile() {
  return dispatch => {
    dialog.showOpenDialog({
      filters: [
        { name: 'Json', extensions: ['json'] },
        { name: 'All Files', extensions: ['*'] }  //读取类型限制
      ]
    }, fileNames => {
      fileNames === undefined ? alert("请选择文件！") : readFile(fileNames[0])
    })
    function readFile(filepath) {
      return fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
          alert("导入失败:" + err.message)
          return
        }
        data = JSON.parse(data)
        dispatch(receiveMenus(data))
      })
    }
  }
}
/**
 * 获取列表成功action
 */
export function receiveMenus(data) {
  return {
    type: RECEIVE_MENUS,
    menus: data
  }
}
