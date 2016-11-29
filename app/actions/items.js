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
export function requestItems(first,second) {
  return {
    type: REQUEST_MENUS,
    first,
    second,
  }
}

//获取列表成功action
export function receiveItems(first, second, data) {
  return {
    type: RECEIVE_MENUS,
    first: first,
    second: second,
    items: data[i].children[j].functions[0].operations,
  }
}

//获取列表
function fsItems(first, second) {
  return dispatch => {
    dispatch(requestItems(first, second))
    return fs.readFile('./test.json', 'utf-8', (err, data) => {
      if(err) {
        console.log(err)
      } else {
        data = JSON.parse(data)
        data => dispatch(receiveItems(first, second, data))
      }
    })
  }
}