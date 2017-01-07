import { SET_OPER_OPEN, SET_OPER_EDIT, SET_OPER_ADD, SET_OPER_CLOSE } from '../actions/oper'

const initialState = { open: false, edit: false, addItems: false, nextKey: '0-0-0-0-0', nextContent: '', opId: '', opSort: '' }

export function oper(state = initialState, action) {
  switch (action.type) {

    case SET_OPER_OPEN:
      return {...state, open: true, nextContent: action.content }

    case SET_OPER_EDIT:
      return {...state, open: true, edit: true, nextContent: action.content }

    case SET_OPER_ADD:
      const opId = action.array[action.array.length - 1]    //todo 新增functionId后这个opId为undefined,所以下面也执行不了 2016.12.30
      const newOne = parseInt(opId.slice(1)) + 1
      let newId
      if (newOne > 999) {
        newId = ('P' + newOne)
      } else if (newOne > 99) {
        newId = ('P' + '0' + newOne)
      } else {
        newId = ('P' + '0' + '0' + newOne)
      }
      return {...state, open: true, addItems: true, opId: newId, opSort: newId, nextKey: action.key }

    case SET_OPER_CLOSE:
      return {...state, open: false, addItems: false, edit: false }

    default:
      return state
  }
}