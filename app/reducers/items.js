import { combineReducers } from 'redux'
import { RECEIVE_ITEMS } from '../actions/items'

function items(state={
  posts:[]
}, action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return Object.assign({}, state, {
        posts: action.items
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  items,
})
export default rootReducer