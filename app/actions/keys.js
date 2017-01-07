export const SET_OPEN = 'SET_OPEN'
export const SET_EDIT = 'SET_EDIT'
export const SET_ADD = 'SET_ADD'
export const SET_CLOSE = 'SET_CLOSE'

export function setOpen(content) {
  return {
    type: SET_OPEN,
    content
  }
}

export function setEdit(content) {
  return {
    type: SET_EDIT,
    content
  }
}

export function setAdd(key, array) {
  return {
    type: SET_ADD,
    key,
    array
  }
}

export function setClose() {
  return {
    type: SET_CLOSE
  }
}