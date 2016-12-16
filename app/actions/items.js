export const HANDLE_SELECTED = 'HANDLE_SELECTED'
export const OPERATIONS_SELECTED = 'OPERATIONS_SELECTED'
export const WEBAPIS_SELECTED = 'WEBAPIS_SELECTED'
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT'
export const OPERATIONS_SUBMIT = 'OPERATIONS_SUBMIT'
export const WEBAPIS_SUBMIT = 'WEBAPIS_SUBMIT'
export const ADD_FUNCTIONS_SUBMIT = 'ADD_FUNCTIONS_SUBMIT'
export const ADD_OPERATIONS_SUBMIT = 'ADD_OPERATIONS_SUBMIT'
export const ADD_WEBAPIS_SUBMIT = 'ADD_WEBAPIS_SUBMIT'

/**
 * 勾选action
 */
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

export function webApisSelected(key) {
  return {
    type: WEBAPIS_SELECTED,
    key
  }
}
/**
 * 提交修改action
 */
export function handleSubmit(functionId, functionName) {
  return {
    type: HANDLE_SUBMIT,
    functionId,
    functionName,
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

export function webApisSubmit(key, serviceMethod, serviceUrl) {
  return {
    type: WEBAPIS_SUBMIT,
    key,
    serviceMethod,
    serviceUrl
  }
}
/**
 * 新增修改action
 */
export function addFunctionsSubmit(nextKey, key, functionId, functionName) {
  return {
    type: ADD_FUNCTIONS_SUBMIT,
    nextKey,
    key,
    functionId,
    functionName
  }
}

export function addOperationsSubmit(nextKey, key, opId, opSort, opName, elementClass) {
  return {
    type: ADD_OPERATIONS_SUBMIT,
    nextKey,
    key,
    opId, 
    opSort, 
    opName, 
    elementClass
  }
}

export function addWebApisSubmit(nextKey, key, serviceMethod, serviceUrl) {
  return {
    type: ADD_WEBAPIS_SUBMIT,
    nextKey,
    key,
    serviceMethod,
    serviceUrl,
  }
}

