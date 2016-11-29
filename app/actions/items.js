const remote = window.require('electron').remote
const fs = remote.require('fs')

export const SELECT_ITEMS = 'SELECT_ITEMS'
export const REQUEST_ITEMS = 'REQUEST_ITEMS'


//选择菜单类型action
export function selectItems(first,second) {
  return {
    type: SELECT_MENUS,
    first,
    second,
  }
}

//开始获取列表action
export function requestItems(first, second) {
  return {
    type: REQUEST_MENUS,
    first,
    second,
  }
}

//获取列表成功action
export function receiveItems(items) {
  return {
    type: RECEIVE_MENUS,
    items: items,
  }
}

//读取本地json文件获取列表
function fsItems(first, second) {
  return dispatch => {
    dispatch(requestItems(first, second))
    return fs.readFile('./test.json', 'utf-8', (err, data) => {
      if(err) {
        console.log(err)
      } else {
        data = JSON.parse(data)
        items = data[first].children[second].function[0].operations
        items => dispatch(receiveItems(items))
      }
    })
  }
}