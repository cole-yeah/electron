import { SET_API_OPEN, SET_API_EDIT, SET_API_ADD, SET_API_CLOSE } from '../actions/api'

const initialState = { open: false, addItems: false, nextKey: '0-0-0-0-0', nextContent: '' }

export function api(state = initialState, action) {
    switch (action.type) {

        case SET_API_OPEN:
            return {...state, open: true, nextContent: action.content }

        case SET_API_EDIT:
            return {...state, open: true, nextContent: action.content }

        case SET_API_ADD:
            return {...state, open: true, addItems: true, nextKey: action.key }

        case SET_API_CLOSE:
            return {...state, open: false, addItems: false }

        default:
            return state
    }
}