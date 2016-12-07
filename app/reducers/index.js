import { combineReducers } from 'redux'
import {items} from './items'
import {menus} from './menus'

// const menus = Object.assign({}, menus, {functions: items})

const rootReducer = combineReducers({
  items,
  menus,
})
export default rootReducer