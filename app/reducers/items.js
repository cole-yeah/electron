import { RECEIVE_ITEMS, CHECKED_ALL } from '../actions/menus'
import {
  HANDLE_SUBMIT,
  HANDLE_SELECTED,
  OPERATIONS_SELECTED,
  WEBAPIS_SELECTED,
  OPERATIONS_SUBMIT,
  WEBAPIS_SUBMIT,
  ADD_OPERATIONS_SUBMIT,
  ADD_WEBAPIS_SUBMIT,
  ADD_FUNCTIONS_SUBMIT
} from '../actions/items'
/**
 * 获取items  
 */
export function items(state = [], action) {
  const {nextKey, functionId, functionName, opId, opSort, opName, elementClass, serviceMethod, serviceUrl } = action
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items
    /**
     * 点击勾选与否functions  
     */
    case HANDLE_SELECTED:
      return state.map(item => item.key === action.key ? Object.assign({}, item, { checked: !item.checked }) : item)  //到时有多个functions
    /**
     * 点击勾选与否operations  
     */
    case OPERATIONS_SELECTED:
      return state.map(item => Object.assign({}, item, {
        operations: item.operations.map(operation => operation.key === action.key ?
          Object.assign({}, operation, { checked: !operation.checked }) : operation)
      }))
    /**
     * 点击勾选与否webApis  
     */
    case WEBAPIS_SELECTED:
      return state.map(item => Object.assign({}, item, {
        operations: item.operations.map(operation => Object.assign({}, operation, {
          webApis: operation.webApis.map(api => api.key === action.key ?
            Object.assign({}, api, { checked: !api.checked }) : api)
        }))
      }))
    /**
     * 提交修改functions的值，并合并到menus中
     */
    case HANDLE_SUBMIT:
      return state.map(item => item.key === action.key ? Object.assign({}, item, { functionId, functionName }) : item)//要增加判断，相等则进行取代2016.12.15
    /**
     * 提交修改operations的值，并合并到menus中
     */
    case OPERATIONS_SUBMIT:
      return state.map(item => Object.assign({}, item, {
        operations: item.operations.map(operation => operation.key === action.key ?
          Object.assign({}, operation, { opId, opSort, opName, elementClass }) : operation)
      }
      ))
    /**
     * 提交修改webApis的值，并合并到menus中  
     */
    case WEBAPIS_SUBMIT:
      return state.map(item => Object.assign({}, item, {
        operations: item.operations.map(operation => Object.assign({}, operation, {
          webApis: operation.webApis.map(api => api.key === action.key ?
            Object.assign({}, api, { serviceMethod, serviceUrl }) : api)
        }))
      }))
    /**
     * 提交新增functions的值，并合并到menus中  
     */
    case ADD_FUNCTIONS_SUBMIT:
      const arrayFunc = action.nextKey.split('-')
      const a = parseInt(arrayFunc[0])
      const b = parseInt(arrayFunc[1])
      const c = state.length
      state.push({
        functionId: action.functionId,
        functionName: action.functionName,
        key: a + '-' + b + '-' + c + '-' + 0 + '-' + 0,       //拼凑出一个key，用于后面的判断
        checked: false,
        operations: []
      })
    // return //这里加return或break会报错，明天debug调试一下 2016.12.26
    /**
     * 提交新增operations的值，并合并到menus中  
     */
    case ADD_OPERATIONS_SUBMIT:  //有两个问题，1.新增同个children下会同时新增，2.action为undefined  2016.12.16
      const arrayOper = action.nextKey.split('-')
      const d = parseInt(arrayOper[0])  //在新增的functions下再新增operations会报item[0].key undefined
      const e = parseInt(arrayOper[1])  //因为这个item是取functions下的数组的第一个的key，所以若一开始没有数组即会报错
      const f = parseInt(arrayOper[2])
      const g = state[f].operations.length

      state.map(item => item.key === action.nextKey ? Object.assign({}, item, {
        operations: item.operations.push({
          checked: false,
          opId,
          opSort,
          opName,
          elementClass,
          key: d + '-' + e + '-' + f + '-' + g + '-' + 0,
          webApis: []
        })  //todo 这里有点不明白，一return的话就会报childrenItems下的items.map is not a function错误. debug之后发现items变成了长度，不再是数组..
      }) : item)  // 是push的原因, array.push('xx')为数组，var other = array.push('xx')为长度
    // return 
    /**
     * 提交新增webApis的值，并合并到menus中  
     */
    case ADD_WEBAPIS_SUBMIT:
      console.log(action.nextKey)
      const arrayApis = action.nextKey.split('-')
      const h = parseInt(arrayApis[0])
      const i = parseInt(arrayApis[1])
      const j = parseInt(arrayApis[2])
      const k = parseInt(arrayApis[3])
      const l = state[j].operations[k].webApis.length
      console.log(h, i, j, k, l)
      state.map(item => Object.assign({}, item, {
        operations: item.operations.map(operation => operation.key === action.nextKey ?  //新增的webApis都会加到第一个operations下的webApis中，因为nextKey为点击菜单传过来的值
          Object.assign({}, operation, {
            webApis: operation.webApis.push({
              checked: false,
              serviceUrl,
              serviceMethod,
              key: h + '-' + i + '-' + j + '-' + k + '-' + l,
            })
          }) : operation)
      }))
    // return 
    default:
      return state
  }
}