import { combineReducers } from 'redux'
import {items} from './items'
import {menus} from './menus'

const rootReducer = combineReducers({
  items,
  menus,
})
export default rootReducer