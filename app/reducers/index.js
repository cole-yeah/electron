import { combineReducers } from 'redux'
import {items} from './items'
import {menus} from './menus'
import {keys} from './keys'
import {oper} from './oper'
import {api} from './api'
import {top} from './top'

const rootReducer = combineReducers({
  items,
  menus,
  keys,
  oper,
  api,
  top
})
export default rootReducer