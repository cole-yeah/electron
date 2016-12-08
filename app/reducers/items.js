import { RECEIVE_ITEMS, CHECKED_ALL } from '../actions/menus'
import { 
  HANDLE_CLOSE, 
  HANDLE_OPEN, 
  HANDLE_EDIT, 
  OPERATION_OPEN, 
  OPERATION_EDIT, 
  OPERATION_CLOSE, 
  HANDLE_SUBMIT, 
  HANDLE_SELECTED,
  OPERATIONS_SELECTED } from '../actions/items'

/**
 * 获取items  
 */  
export function items(state=[], action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
      state = action.items
      return state.map(item => {
        item.open = false
        item.edit = false
        item.id = action.id
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
 * 提交修改functions的值，并合并到menus中
 */
    case HANDLE_SUBMIT:
      return state.map(item => Object.assign({}, item, { functionId: action.functionId, functionName: action.functionName}))

    // case CHECKED_ALL:
    //   const all = state[0].operations.every(operation => operation.checked)
    //   return state.map(item => Object.assign({}, item, {
    //     checked: !item.checked,
    //     operations: item.operations.map(operation => Object.assign({}, operation, {
    //       checked: !all
    //     }))
    //   }))

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