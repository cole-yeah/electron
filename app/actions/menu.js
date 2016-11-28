const remote = window.require('electron').remote
const fs = remote.require('fs')

//选择菜单类型action
export function selectMenus(menus) {
  return {
    type: SELECT_MENUS,
    menus,
  }
}

//开始获取菜单action
export function requestMenus(menus) {
  return {
    type: REQUEST_MENUS,
    menus,
  }
}

//获取菜单成功action
export function receiveMenus(menus, json) {
  return {
    type: RECEIVE_MENUS,
    menus: menus,
    
  }
}

//获取菜单，
function fetchMenus(meuns) {
  return dispatch => {
    dispatch(requestMenus(menus))
    return fetch(`../../menus.json`)
      .then(response => response.json())
      .then(json => dispatch(menus, json))
  }
}