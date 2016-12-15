export const HANDLE_SUBMIT = 'HANDLE_SUBMIT'
export const HANDLE_SELECTED = 'HANDLE_SELECTED'
export const OPERATIONS_SELECTED = 'OPERATIONS_SELECTED'
export const WEBAPIS_SELECTED = 'WEBAPIS_SELECTED'
export const OPERATIONS_SUBMIT = 'OPERATIONS_SUBMIT'
export const WEBAPIS_SUBMIT = 'WEBAPIS_SUBMIT'
export const ADD_OPERATIONS_SUBMIT = 'ADD_OPERATIONS_SUBMIT'
export const ADD_WEBAPIS_SUBMIT = 'ADD_WEBAPIS_SUBMIT'

export function handleSubmit(functionId, functionName) {
  return {
    type: HANDLE_SUBMIT,
    functionId,
    functionName,
  }
}

export function handleSelected(key) {
  return {
    type: HANDLE_SELECTED,
    key
  }
}

export function operationsSelected(key) {
  return {
    type: OPERATIONS_SELECTED,
    key
  }
}

export function operationsSubmit( key, opId,  opSort, opName,elementClass) {
  return {
    type: OPERATIONS_SUBMIT,
    key,
    opId, 
    opSort,
    opName,
    elementClass
  }
}

export function webApisSelected(key) {
  return {
    type: WEBAPIS_SELECTED,
    key
  }
}

export function webApisSubmit(key, serviceMethod, serviceUrl) {
  return {
    type: WEBAPIS_SUBMIT,
    key,
    serviceMethod,
    serviceUrl
  }
}

export function addOperationsSubmit(opId, opSort, opName, elementClass) {
  return {
    type: ADD_OPERATIONS_SUBMIT,
    opId, 
    opSort, 
    opName, 
    elementClass
  }
}

export function addWebApisSubmit(opId, serviceMethod, serviceUrl) {
  return {
    type: ADD_WEBAPIS_SUBMIT,
    serviceMethod,
    serviceUrl,
    opId
  }
}

