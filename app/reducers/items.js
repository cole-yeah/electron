import { SELECT_ITEMS, REQUEST_ITEMS } from '../actions/items'

function selectedItems(state = '', action) {
  switch (action.type) {
    case SELECT_ITEMS:
      return action.menus
    default:
      return state
  }
}