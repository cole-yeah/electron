export const HANDLE_SELECTED = 'HANDLE_SELECTED'
export const OPERATIONS_SELECTED = 'OPERATIONS_SELECTED'
export const WEBAPIS_SELECTED = 'WEBAPIS_SELECTED'
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT'
export const OPERATIONS_SUBMIT = 'OPERATIONS_SUBMIT'
export const WEBAPIS_SUBMIT = 'WEBAPIS_SUBMIT'
export const ADD_FUNCTIONS_SUBMIT = 'ADD_FUNCTIONS_SUBMIT'
export const ADD_OPERATIONS_SUBMIT = 'ADD_OPERATIONS_SUBMIT'
export const ADD_WEBAPIS_SUBMIT = 'ADD_WEBAPIS_SUBMIT'
export const HANDLE_DELETE = 'HANDLE_DELETE'
import { setOperClose } from './oper'
import { setClose } from './keys'
import { setApiClose } from './api'
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
 * 派发修改functions action
 */
export function dispatchHandleSubmit(idArray, nextKey, key, functionId, functionName) {
  return dispatch => {
    dispatch(handleSubmit(idArray, nextKey, key, functionId, functionName))
    dispatch(setClose())
  }
}
/**
 * 派发修改operations action
 */
export function dispatchOperationsSubmit(idArray, nextKey, key, opId, opSort, opName, elementClass) {
  return dispatch => {
    dispatch(operationsSubmit(idArray, nextKey, key, opId, opSort, opName, elementClass))
    dispatch(setOperClose())
  }
}
/**
 * 派发修改webApis action
 */
export function dispatchWebApisSubmit(nextKey, key, serviceMethod, serviceUrl) {
  return dispatch => {
    dispatch(webApisSubmit(nextKey, key, serviceMethod, serviceUrl))
    dispatch(setApiClose())
  }
}
/**
 * 提交修改action
 */
export function handleSubmit(idArray, nextKey, key, functionId, functionName) {
  return {
    type: HANDLE_SUBMIT,
    idArray,
    nextKey,
    key,
    functionId,
    functionName,
  }
}

export function operationsSubmit(idArray, nextKey, key, opId, opSort, opName, elementClass) {
  return {
    type: OPERATIONS_SUBMIT,
    idArray,
    nextKey,
    key,
    opId,
    opSort,
    opName,
    elementClass,
  }
}

export function webApisSubmit(nextKey, key, serviceMethod, serviceUrl) {
  return {
    type: WEBAPIS_SUBMIT,
    nextKey,
    key,
    serviceMethod,
    serviceUrl
  }
}
/**
 * 派发新增functions action
 */
export function dispatchAddActions(idArray, nextKey, key, functionId, functionName) {
  return dispatch => {
    idArray.includes(functionId) ? alert('该functionId已存在！') : (dispatch(addFunctionsSubmit(nextKey, key, functionId, functionName)), dispatch(setClose()))
  }
}
/**
 * 派发新增operations action
 */
export function dispatchAddOperActions(idArray, nextKey, key, opId, opSort, opName, elementClass) {
  return dispatch => {
    idArray.includes(opId) ? alert('该opId已存在！') : (dispatch(addOperationsSubmit(nextKey, key, opId, opSort, opName, elementClass)), dispatch(setOperClose()))
  }
}
/**
 * 派发新增webApis action
 */
export function dispatchAddApiActions(nextKey, key, serviceMethod, serviceUrl) {
  return dispatch => {
    dispatch(addWebApisSubmit(nextKey, key, serviceMethod, serviceUrl))
    dispatch(setApiClose())
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

export function handleDelete(dataType, key) {
  return {
    type: HANDLE_DELETE,
    dataType,
    key
  }
}