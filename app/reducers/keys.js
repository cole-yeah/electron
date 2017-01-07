import { GET_KEY } from '../actions/menus'
import { SET_OPEN, SET_EDIT, SET_ADD, SET_CLOSE } from '../actions/keys'

const initialState = { open: false, edit: false, addItems: false, nextKey: '0-0-0-0-0', nextContent: '', key: '', functionId: '' }

export function keys(state = initialState, action) {
  switch (action.type) {
    case GET_KEY:
      return {...state, key: action.key }

    case SET_OPEN:
      return {...state, open: true, nextContent: action.content }

    case SET_EDIT:
      return {...state, open: true, edit: true, nextContent: action.content }

    case SET_ADD:
      const funcId = action.array[action.array.length - 1]
      const newOne = parseInt(funcId.slice(1)) + 1
      let newId
      if (newOne > 999) {
        newId = ('F' + newOne)
      } else if (newOne > 99) {
        newId = ('F' + '0' + newOne)
      } else {
        newId = ('F' + '0' + '0' + newOne)
      }
      return {...state, open: true, addItems: true, functionId: newId, nextKey: action.key }

    case SET_CLOSE:
      return {...state, open: false, addItems: false, edit: false }

    default:
      return state
  }
}