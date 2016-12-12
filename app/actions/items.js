export const HANDLE_SUBMIT = 'HANDLE_SUBMIT'
export const HANDLE_SELECTED = 'HANDLE_SELECTED'
export const OPERATIONS_SELECTED = 'OPERATIONS_SELECTED'
export const WEBAPIS_SELECTED = 'WEBAPIS_SELECTED'
export const OPERATIONS_SUBMIT = 'OPERATIONS_SUBMIT'
export const WEBAPIS_SUBMIT = 'WEBAPIS_SUBMIT'

export function handleSubmit(functionId, functionName) {
  return {
    type: HANDLE_SUBMIT,
    functionId,
    functionName,
  }
}

export function handleSelected(id) {
  return {
    type: HANDLE_SELECTED,
    id
  }
}

export function operationsSeleted(id) {
  return {
    type: OPERATIONS_SELECTED,
    id
  }
}

export function operationsSubmit(id, opId, opName, opSort, elementClass) {
  return {
    type: OPERATIONS_SUBMIT,
    id,
    opId, 
    opName,
    opSort,
    elementClass
  }
}

export function webApisSelected(id) {
  return {
    type: WEBAPIS_SELECTED,
    id
  }
}

export function webApisSubmit(id, serviceMethod, serviceUrl) {
  return {
    type: WEBAPIS_SUBMIT,
    id,
    serviceMethod,
    serviceUrl
  }
}


