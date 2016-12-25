export const SET_OPEN = 'SET_OPEN'
export const SET_EDIT = 'SET_EDIT'
export const SET_ADDITEMS = 'SET_ADDITEMS'

export function setOpen() {
  return {
    type: SET_OPEN
  }
}

export function setEdit() {
  return {
    type: SET_EDIT
  }
}

export function setAddItems() {
  return {
    type: SET_ADDITEMS
  }
}