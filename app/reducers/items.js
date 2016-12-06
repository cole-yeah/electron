import { RECEIVE_ITEMS } from '../actions/menus'
import { HANDLE_CLOSE, HANDLE_OPEN, HANDLE_EDIT, OPERATION_OPEN, OPERATION_EDIT, OPERATION_CLOSE } from '../actions/items'
/**
 * 获取items  
 */  
export function items(state=[], action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items.map(item => {
        item.open = false
        item.edit = false
        item.operations.map(operation=> {
          operation.open = false
          operation.edit = false
        })
        return item
      })
/**
 * 关闭functions的dialog  
 */    
    case HANDLE_CLOSE:
      return state.map(item => Object.assign({}, item, { open: false, edit: false }))
/**
 * 打开functions的dialog  
 */
    case HANDLE_OPEN:
      return state.map(item => Object.assign({}, item, { open: true, edit: false}))
/**
 * 编辑functions的dialog  
 */
    case HANDLE_EDIT:
      return state.map(item => Object.assign({}, item, {open: true, edit: true}))
/**
 * 打开operation的dialog  
 */
    case OPERATION_OPEN:
      return state.map(item => Object.assign({}, item, {
        operations: item.operations.map(operation => operation.opId === action.opId?
          Object.assign({}, operation, { open: true, edit: false }):operation)
      })) 
/**
 * 关闭operation的dialog  
 */
    case OPERATION_CLOSE:
      return state.map(item => Object.assign({}, item, {
        operations: item.operations.map(operation => Object.assign({}, operation, { open: false, edit: false }))
      })) 
/**
 * 编辑operation的dialog  
 */
    case OPERATION_EDIT:
      return state.map(item => Object.assign({}, item, {
        operations: item.operations.map(operation => operation.opId === action.opId?
          Object.assign({}, operation, { open: true, edit: true }):operation)
      }))  

    default:
      return state
  }
}