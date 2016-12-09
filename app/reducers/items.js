import { RECEIVE_ITEMS, CHECKED_ALL } from '../actions/menus'
import { HANDLE_SUBMIT, HANDLE_SELECTED, OPERATIONS_SELECTED } from '../actions/items'

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
      return state.map(item => Object.assign({}, item, { checked: !item.checked }))

    case OPERATIONS_SELECTED:
      return state.map(item => Object.assign({}, item, {
        operations: item.operations.map(operation => operation.opId === action.opId?
          Object.assign({}, operation, { checked: !operation.checked }):operation)
      }))

    default:
      return state
  }
}