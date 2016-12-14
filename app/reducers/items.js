import { RECEIVE_ITEMS, CHECKED_ALL } from '../actions/menus'
import { 
  HANDLE_SUBMIT, 
  HANDLE_SELECTED, 
  OPERATIONS_SELECTED, 
  WEBAPIS_SELECTED, 
  OPERATIONS_SUBMIT, 
  WEBAPIS_SUBMIT, 
  ADD_OPERATIONS_SUBMIT, 
  ADD_WEBAPIS_SUBMIT } from '../actions/items'

/**
 * 获取items  
 */  
export function items(state=[], action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
      state = action.items
      return state.map(item => {
        item.id = action.id
        return item
      })

/**
 * 提交修改functions的值，并合并到menus中
 */
    case HANDLE_SUBMIT:
      return state.map(item => Object.assign({}, item, { functionId: action.functionId, functionName: action.functionName}))

/**
 * 点击勾选与否functions  
 */
    case HANDLE_SELECTED:
      // return state.map(item => Object.assign({}, item, { checked: !item.checked}))  //到时有多个functions
      return [Object.assign({}, state[0], { checked: !state[0].checked })]
/**
 * 提交修改operations的值，并合并到menus中
 */
    case OPERATIONS_SUBMIT:
    console.log(action.id)
      return state.map(item => Object.assign({}, item, {
        operations: item.operations.map(operation => operation.opId === action.id?
          Object.assign({}, operation, {opId: action.opId, opName: action.opName, opSort: action.opSort, elementClass: action.elementClass}):operation)
        }
      ))

/**
 * 点击勾选与否operations  
 */
    case OPERATIONS_SELECTED:
      return state.map(item => Object.assign({}, item, {
        operations: item.operations.map(operation => operation.opId === action.id?
          Object.assign({}, operation, { checked: !operation.checked }):operation)
      }))
/**
 * 点击勾选与否webApis  
 */
    case WEBAPIS_SELECTED:
      return state.map(item => Object.assign({}, item, {
        operations: item.operations.map(operation => Object.assign({}, operation, {
          webApis: operation.webApis.map(api => api.id === action.id?
            Object.assign({}, api, {checked: !api.checked}):api)
        }))
      }))
/**
 * 提交修改webApis的值，并合并到menus中  
 */
    case WEBAPIS_SUBMIT:
      return state.map(item => Object.assign({}, item, {
        operations: item.operations.map(operation => Object.assign({}, operation, {
          webApis: operation.webApis.map(api => api.id === action.id?
            Object.assign({}, api, { serviceMethod: action.serviceMethod, serviceUrl: action.serviceUrl }):api)
        }))
      }))
/**
 * 提交新增operations的值，并合并到menus中  
 */
    case ADD_OPERATIONS_SUBMIT:
      state.map(item => Object.assign({}, item, {
        operations: item.operations.push({
          checked: false,
          opId: action.opId, 
          opSort: action.opSort, 
          opName: action.opName, 
          elementClass: action.elementClass,
          webApis: []
        })  //todo 这里有点不明白，一return的话就会报childrenItems下的items.map is not a function错误. debug之后发现items变成了长度，不再是数组..
      }))  // 是push的原因, array.push('xx')为数组，var other = array.push('xx')为长度

    case ADD_WEBAPIS_SUBMIT:
      // state.map(item => Object.assign({}, item, {
      //   operations: item.operations.map(operation => operation.opId === action.opId?
      //     Object.assign({}, operation, {
      //       webApis: operation.webApis.push({
      //         checked: false,
      //         serviceUrl: action.serviceUrl,
      //         serviceMethod: action.serviceMethod
      //       })
      //     }):operation)
      // }))

    default:
      return state
  }
}