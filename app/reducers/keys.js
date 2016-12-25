import { GET_KEY } from '../actions/menus'
import { SET_OPEN, SET_EDIT, SET_ADDITEMS } from '../actions/keys'

const initial = {open: false, edit: false, addItems: false, keys: ''}

export function keys(state=initial, action) {
  switch(action.type) {
    case GET_KEY:
      state = action.key
      return state
    
    case SET_OPEN:


    default:
      return state
  }
}