import { combineReducers } from 'redux'
import {items} from './items'
import {menus} from './menus'
import {keys} from './keys'

const rootReducer = combineReducers({
  items,
  menus,
  keys,
})
export default rootReducer