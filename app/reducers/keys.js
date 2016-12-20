import { GET_KEY } from '../actions/menus'

export function keys(state='', action) {
  switch(action.type) {
    case GET_KEY:
      state = action.key
      return state

    default:
      return state
  }
}