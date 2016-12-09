export const HANDLE_SUBMIT = 'HANDLE_SUBMIT'
export const HANDLE_SELECTED = 'HANDLE_SELECTED'
export const OPERATIONS_SELECTED = 'OPERATIONS_SELECTED'
export const WEBAPIS_SELECTED = 'WEBAPIS_SELECTED'

export function handleSubmit(functionId, functionName) {
  return {
    type: HANDLE_SUBMIT,
    functionId,
    functionName,
  }
}

export function handleSelected() {
  return {
    type: HANDLE_SELECTED
  }
}

export function operationsSeleted(opId) {
  return {
    type: OPERATIONS_SELECTED,
    opId
  }
}

export function webApis(opId) {
  return {
    type: WEBAPIS_SELECTED
  }
}

