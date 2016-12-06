export const HANDLE_CLOSE = 'HANDLE_CLOSE'
export const HANDLE_OPEN = 'HANDLE_OPEN'
export const HANDLE_EDIT = 'HANDLE_EDIT'
export const OPERATION_OPEN = 'OPERATION_OPEN'
export const OPERATION_CLOSE = 'OPERATION_CLOSE'
export const OPERATION_EDIT = 'OPERATION_EDIT'

export function handleClose() {
  return {
    type: HANDLE_CLOSE
  }
}

export function handleOpen() {
  return {
    type: HANDLE_OPEN
  }
}

export function handleEdit() {
  return {
    type: HANDLE_EDIT
  }
}

export function operationOpen(opId) {
  return {
    type: OPERATION_OPEN,
    opId,
  }
}

export function operationClose() {
  return {
    type: OPERATION_CLOSE
  }
}

export function operationEdit(opId) {
  return {
    type: OPERATION_EDIT,
    opId,
  }
}
