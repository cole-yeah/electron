export const SET_OPER_OPEN = 'SET_OPER_OPEN'
export const SET_OPER_EDIT = 'SET_OPER_EDIT'
export const SET_OPER_ADD = 'SET_OPER_ADD'
export const SET_OPER_CLOSE = 'SET_OPER_CLOSE'

export function setOperOpen(content) {
  return {
    type: SET_OPER_OPEN,
    content
  }
}

export function setOperEdit(content) {
  return {
    type: SET_OPER_EDIT,
    content
  }
}

export function setOperAdd(key, array) {
  return {
    type: SET_OPER_ADD,
    key,
    array
  }
}

export function setOperClose() {
  return {
    type: SET_OPER_CLOSE
  }
}