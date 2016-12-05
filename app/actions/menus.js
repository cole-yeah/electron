// export const GET_SUCCESS = 'GET_SUCCESS'

// const remote = window.require('electron').remote
// const fs = remote.require('fs')

// export function getMenus() {
//   return dispatch => {
//     return (fs.readFile('./test.json', 'utf-8', (err, data) => {
//       data = JSON.parse(data)
//       console.log(data)
//       dispatch(getSuccess(data))
//     }))
//   }
// }


// function getSuccess(data) {
//   return {
//     type: GET_SUCCESS,
//     menus: data 
//   }
// }