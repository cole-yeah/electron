export const SET_API_OPEN = 'SET_API_OPEN'
export const SET_API_EDIT = 'SET_API_EDIT'
export const SET_API_ADD = 'SET_API_ADD'
export const SET_API_CLOSE = 'SET_API_CLOSE'

export function setApiOpen(content) {
  return {
    type: SET_API_OPEN,
    content
  }
}

export function setApiEdit(content) {
  return {
    type: SET_API_EDIT,
    content
  }
}

export function setApiAdd(key) {
  return {
    type: SET_API_ADD,
    key
  }
}

export function setApiClose() {
  return {
    type: SET_API_CLOSE
  }
}