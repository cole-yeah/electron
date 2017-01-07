export const SET_TOP_EDIT = 'SET_TOP_EDIT'
export const SET_TOP_ADD = 'SET_TOP_ADD'
export const SET_TOP_CLOSE = 'SET_TOP_CLOSE'


export function setTopEdit(dataType, content) {
  return {
    type: SET_TOP_EDIT,
    dataType,
    content
  }
}

export function setTopAdd(content) {
  return {
    type: SET_TOP_ADD,
    content
  }
}

export function setTopClose() {
  return {
    type: SET_TOP_CLOSE
  }
}