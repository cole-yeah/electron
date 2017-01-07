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
  ADD_FUNCTIONS_SUBMIT,
  HANDLE_DELETE
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
      // const webApiChecked = state.map(item => )
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
    * 删除functions、operations、webApis  
    */
    case HANDLE_DELETE:
      if (action.dataType === 'opId') {
        const dialogOper = confirm('确定删除operations?')
        if (dialogOper) {
          state = state.map(item => Object.assign({}, item, {
            operations: item.operations.filter(oper => oper.key !== action.key)
          }))
          alert('删除成功！')
          return state
        }
        return state
      } else {
        const dialogApi = confirm('确定删除webApis?')
        if (dialogApi) {
          state = state.map(item => Object.assign({}, item, {
            operations: item.operations.map(oper => Object.assign({}, oper, {
              webApis: oper.webApis.filter(api => api.key !== action.key)
            }))
          }))
          alert('删除成功！')
          return state
        }
        return state
      }

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
    // return state
    /**
     * 提交新增operations的值，并合并到menus中  
     */
    case ADD_OPERATIONS_SUBMIT:
      if (opId === undefined && opSort === undefined) {
        return state
      } else {
        const arrayOper = action.nextKey.split('-')
        const d = parseInt(arrayOper[0])
        const e = parseInt(arrayOper[1])
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
          })
        }) : item)
      }
    //这里加return的时候报错，因为这里return的时候的nextState的operations变成了它的长度，如operations:4，而不是对象；但是不return的时候函数会一直执行下去，造成的就是会多出一些空的数组，
    //如新增operations之后会在继续执行ADD_WEBAPIS_SUBMIT，但是 serviceMethod和serviceUrl为undefined，所以数组为空的，这样导出时容易造成错误，暂时不知道return为什么会造成数组对象
    //变成长度，所以先在这里做个判断，待优化   2017.01.05
    /**
     * 提交新增webApis的值，并合并到menus中  
     */
    case ADD_WEBAPIS_SUBMIT:
      console.log(action.nextKey)
      if (serviceUrl === undefined && serviceUrl === undefined) {
        return state
      } else {
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
      }
    // return state

    default:
      return state
  }
}