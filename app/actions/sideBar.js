const remote = window.require('electron').remote
const fs = remote.require('fs')

export const SELECT_SIDEBAR = 'SELECT_SIDEBAR'

//选择菜单类型action
export function selectSideBar(sideBar) {
  return {
    type: SELECT_SIDEBAR,
    sideBar,
  }
}

function fsLists() {
  return dispatch => {
    dispatch()
  }
}