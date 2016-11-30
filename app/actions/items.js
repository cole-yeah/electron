const remote = window.require('electron').remote
const fs = remote.require('fs')

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'

//获取列表成功action
function receiveItems(items) {
  console.log(items)
  return {
    type: RECEIVE_ITEMS,
    items: items,
  }
}

//读取本地json文件获取列表,根据参数first,second 索引出点击菜单下的数组
export function readItemsFile(first, second) {
  return dispatch => {
    return (fs.readFile('./test.json', 'utf-8', (err, data) => {
        data = JSON.parse(data)
        const items = (data[first].children[second].functions[0])
        dispatch(receiveItems(items))
    }))
  }
}