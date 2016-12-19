// const remote = window.require('electron').remote
// const fs = remote.require('fs')

export const RECEIVE_MENUS = 'RECEIVE_MENUS'
export const OPEN_MENUS = 'OPEN_MENUS'
export const CHECKED_ALL = 'CHECKED_ALL'
export const CHECKED_MENUS = 'CHECKED_MENUS'
export const SELECTED_MENUS = 'SELECTED_MENUS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const COMBINE_ITEMS = 'COMBINE_ITEMS'
export const SECOND_MENUS_SUBMIT = 'SECOND_MENUS_SUBMIT'
export const FIRST_MENUS_SUBMIT = 'FIRST_MENUS_SUBMIT'
export const ADD_FIRST_MENUS = 'ADD_FIRST_MENUS'
export const ADD_SECOND_MENUS = 'ADD_SECOND_MENUS'

export function openMenus(key) {
  return {
    type: OPEN_MENUS,
    key,
  }
}

export function checkedAll(menuId, key) {
  return {
    type: CHECKED_ALL,
    menuId,
    key,
  }
}

export function checkedMenus(key) {
  return {
    type: CHECKED_MENUS,
    key
  }
}

export function receiveItems(key, menus) {
  return {
    type: RECEIVE_ITEMS,
    items: menus,
    key,
  }
}

export function selectedMenus(menuId) {
  return {
    type: SELECTED_MENUS,
    menuId,
  }
}

export function combineItems(key, items) {
  return {
    type: COMBINE_ITEMS,
    items,
    key
  }
}

export function firstMenusSubmit(nextKey, key, menuId, menuCode, menuSort, name) {
  return {
    type: FIRST_MENUS_SUBMIT,
    nextKey,
    key,
    menuId,
    menuCode,
    menuSort, 
    name
  }
}

export function secondMenusSubmit(nextKey, key, menuId, menuCode, menuSort, name, menuParentId, anchor) {
  return {
    type: SECOND_MENUS_SUBMIT,
    nextKey,
    key,
    menuId, 
    menuCode, 
    menuSort, 
    name, 
    menuParentId, 
    anchor
  }
}

export function addFirstMenus(nextKey, key, menuId, menuCode, menuSort, name, icon) {
  return {
    type: ADD_FIRST_MENUS,
    nextKey,
    key,
    menuId,
    menuCode,
    menuSort, 
    name,
    icon    
  }
}

export function addSecondMenus(nextKey, key, menuId, menuCode, menuSort, name, menuParentId, anchor) {
  return {
    type: ADD_SECOND_MENUS,
    nextKey,
    key,
    menuId,
    menuCode,
    menuSort, 
    name,
    menuParentId,
    anchor    
  }
}

//读取本地json文件获取列表,根据参数first,second 索引出点击菜单下的数组
// export function readItemsFile() {
//   return dispatch => {
//     return (fs.readFile('./test.json', 'utf-8', (err, data) => {
//       data = JSON.parse(data)
//       dispatch(receiveMenus(data))
//     }))
//   }
// }


//获取列表成功action
export function receiveMenus() {
  return {
    type: RECEIVE_MENUS,
    // menus:data
menus:
[
    {
        "systemName": "收货系统",
        "menuId": "10001",
        "menuCode": "10001",
        "menuParentId": "-1",
        "icon": "fa-database",
        "menuSort": 1,
        "name": "基础数据管理",
        "level": 1,
        "anchor": null,
        "functions": null,
        "children": [
            {
                "systemName": "收货系统",
                "menuId": "10001-001",
                "menuCode": "10001-001",
                "menuParentId": "10001",
                "icon": null,
                "menuSort": 1,
                "name": "字典数据管理",
                "level": 2,
                "anchor": "#basics/ydsWorkbooks",
                "functions": [
                    {
                        "functionId": "F0001",
                        "functionName": "字典数据管理",
                        "operations": [
                            {
                                "opId": "P0001",
                                "opName": "字典数据管理查看",
                                "opSort": "P0001",
                                "elementClass": "acl_view_ydsWorkBook",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-0-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/{workbookId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-0-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-0-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-0-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-0-0-0-4"
                                    }
                                ],
                                "checked": false,
                                "key": "0-0-0-0-0",
                                "id": "P0001"
                            },
                            {
                                "opId": "P0002",
                                "opName": "字典数据管理新增",
                                "opSort": "P0002",
                                "elementClass": "acl_add_ydsWorkBook",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "0-0-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-0-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/{workbookId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-0-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "0-0-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-0-0-1-4"
                                    }
                                ],
                                "checked": false,
                                "key": "0-0-0-1-0",
                                "id": "P0002"
                            },
                            {
                                "opId": "P0003",
                                "opName": "字典数据管理编辑",
                                "opSort": "P0003",
                                "elementClass": "acl_edit_ydsWorkBook",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/{workbookId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "0-0-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-0-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/{workbookId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-0-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-0-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/{workbookId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "0-0-0-2-4"
                                    }
                                ],
                                "checked": false,
                                "key": "0-0-0-2-0",
                                "id": "P0003"
                            }
                        ],
                        "checked": false,
                        "key": "0-0-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "0-0-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10001-002",
                "menuCode": "10001-002",
                "menuParentId": "10001",
                "icon": null,
                "menuSort": 2,
                "name": "标准产品管理",
                "level": 2,
                "anchor": "#basics/standardProducts",
                "functions": [
                    {
                        "functionId": "F0002",
                        "functionName": "标准产品管理",
                        "operations": [
                            {
                                "opId": "P0008",
                                "opName": "标准产品管理查看",
                                "opSort": "P0008",
                                "elementClass": "acl_view_ydsGood",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-0-6"
                                    }
                                ],
                                "checked": false,
                                "key": "0-1-0-0-0",
                                "id": "P0008"
                            },
                            {
                                "opId": "P0009",
                                "opName": "标准产品管理新增",
                                "opSort": "P0009",
                                "elementClass": "acl_add_ydsGood",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "0-1-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "0-1-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-1-4"
                                    }
                                ],
                                "checked": false,
                                "key": "0-1-0-1-0",
                                "id": "P0009"
                            },
                            {
                                "opId": "P0010",
                                "opName": "标准产品管理编辑",
                                "opSort": "P0010",
                                "elementClass": "acl_edit_ydsGood",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "0-1-0-2-3"
                                    }
                                ],
                                "checked": false,
                                "key": "0-1-0-2-0",
                                "id": "P0010"
                            },
                            {
                                "opId": "P0012",
                                "opName": "标准产品管理提交",
                                "opSort": "P0012",
                                "elementClass": "acl_commitEntity_ydsGood",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "0-1-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "0-1-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-3-4"
                                    }
                                ],
                                "checked": false,
                                "key": "0-1-0-3-0",
                                "id": "P0012"
                            },
                            {
                                "opId": "P0015",
                                "opName": "标准产品管理导出",
                                "opSort": "P0015",
                                "elementClass": "acl_export_ydsGood",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-4-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-4-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ydsgoodsExcel",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-4-3"
                                    }
                                ],
                                "checked": false,
                                "key": "0-1-0-4-0",
                                "id": "P0015"
                            },
                            {
                                "opId": "P0276",
                                "opName": "标准产品管理撤回",
                                "opSort": "P0276",
                                "elementClass": "acl_cancelCommit_ydsGood",
                                "webApis": [],
                                "checked": false,
                                "key": "0-1-0-5-0",
                                "id": "P0276"
                            },
                            {
                                "opId": "P0279",
                                "opName": "标准产品批量提交",
                                "opSort": "P0279",
                                "elementClass": "acl_commitEntities_ydsGood",
                                "webApis": [],
                                "checked": false,
                                "key": "0-1-0-6-0",
                                "id": "P0279"
                            },
                            {
                                "opId": "P0013",
                                "opName": "标准产品管理同步",
                                "opSort": "P0013",
                                "elementClass": "acl_view_ydsGood,acl_sync_ysdGood",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-7-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-7-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-1-0-7-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "0-1-0-7-3"
                                    }
                                ],
                                "checked": false,
                                "key": "0-1-0-7-0",
                                "id": "P0013"
                            }
                        ],
                        "checked": false,
                        "key": "0-1-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "0-1-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10001-003",
                "menuCode": "10001-003",
                "menuParentId": "10001",
                "icon": null,
                "menuSort": 3,
                "name": "标准产品批次",
                "level": 2,
                "anchor": "#spd/ydsGoodsLots",
                "functions": [
                    {
                        "functionId": "F0016",
                        "functionName": "标准产品批次",
                        "operations": [
                            {
                                "opId": "P0105",
                                "opName": "标准产品批次查看",
                                "opSort": "P0105",
                                "elementClass": "acl_view_ydsGoodsLot",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-2-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-2-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-2-0-0-2"
                                    }
                                ],
                                "checked": false,
                                "key": "0-2-0-0-0",
                                "id": "P0105"
                            },
                            {
                                "opId": "P0107",
                                "opName": "标准产品批次新增",
                                "opSort": "P0107",
                                "elementClass": "acl_add_ydsGoodsLot",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-2-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "0-2-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "0-2-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-2-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-2-0-1-4"
                                    }
                                ],
                                "checked": false,
                                "key": "0-2-0-1-0",
                                "id": "P0107"
                            },
                            {
                                "opId": "P0106",
                                "opName": "标准产品批次编辑",
                                "opSort": "P0106",
                                "elementClass": "acl_edit_ydsGoodsLot",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/{goodsLotId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "0-2-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-2-0-2-1"
                                    }
                                ],
                                "checked": false,
                                "key": "0-2-0-2-0",
                                "id": "P0106"
                            }
                        ],
                        "checked": false,
                        "key": "0-2-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "0-2-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10001-004",
                "menuCode": "10001-004",
                "menuParentId": "10001",
                "icon": null,
                "menuSort": 4,
                "name": "企业产品管理",
                "level": 2,
                "anchor": "#basics/ydsEdsGoods",
                "functions": [
                    {
                        "functionId": "F0003",
                        "functionName": "企业产品管理",
                        "operations": [
                            {
                                "opId": "P0016",
                                "opName": "企业产品管理查看",
                                "opSort": "P0016",
                                "elementClass": "acl_view_ydsEdsGoods",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{goodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-0-6"
                                    }
                                ],
                                "checked": false,
                                "key": "0-3-0-0-0",
                                "id": "P0016"
                            },
                            {
                                "opId": "P0018",
                                "opName": "企业产品管理新增",
                                "opSort": "P0018",
                                "elementClass": "acl_add_ydsEdsGoods",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "0-3-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{goodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "0-3-0-1-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-1-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "0-3-0-1-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-1-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/byUse/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-1-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-1-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-1-12"
                                    }
                                ],
                                "checked": false,
                                "key": "0-3-0-1-0",
                                "id": "P0018"
                            },
                            {
                                "opId": "P0020",
                                "opName": "企业产品管理提交",
                                "opSort": "P0020",
                                "elementClass": "acl_commitEntity_ydsEdsGoods",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{ydsEdsGoodsId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "0-3-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{goodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{goodsId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "0-3-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-2-6"
                                    }
                                ],
                                "checked": false,
                                "key": "0-3-0-2-0",
                                "id": "P0020"
                            },
                            {
                                "opId": "P0023",
                                "opName": "企业产品管理导出",
                                "opSort": "P0023",
                                "elementClass": "acl_export_ydsEdsGoods,acl_view_ydsEdsGoods",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/Excel",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-3-2"
                                    }
                                ],
                                "checked": false,
                                "key": "0-3-0-3-0",
                                "id": "P0023"
                            },
                            {
                                "opId": "P0284",
                                "opName": "企业产品管理撤回",
                                "opSort": "P0284",
                                "elementClass": "acl_cancelCommit_ydsEdsGoods",
                                "webApis": [],
                                "checked": false,
                                "key": "0-3-0-4-0",
                                "id": "P0284"
                            },
                            {
                                "opId": "P0280",
                                "opName": "企业产品批量提交",
                                "opSort": "P0280",
                                "elementClass": "acl_commitEntities_ydsEdsGoods",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-5-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-5-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-5-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{ydsEdsGoodsId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "0-3-0-5-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{edsGoodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-5-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-5-5"
                                    }
                                ],
                                "checked": false,
                                "key": "0-3-0-5-0",
                                "id": "P0280"
                            },
                            {
                                "opId": "P0017",
                                "opName": "企业产品管理编辑",
                                "opSort": "P0017",
                                "elementClass": "acl_edit_ydsEdsGoods",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{goodsId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "0-3-0-6-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-6-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-6-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{goodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-6-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-6-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-6-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/byUse/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-6-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-3-0-6-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{edsGoodsId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "0-3-0-6-8"
                                    }
                                ],
                                "checked": false,
                                "key": "0-3-0-6-0",
                                "id": "P0017"
                            }
                        ],
                        "checked": false,
                        "key": "0-3-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "0-3-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10001-005",
                "menuCode": "10001-005",
                "menuParentId": "10001",
                "icon": null,
                "menuSort": 5,
                "name": "企业产品批次",
                "level": 2,
                "anchor": "#spd/ydsEdsGoodsLots",
                "functions": [
                    {
                        "functionId": "F0015",
                        "functionName": "企业产品批次",
                        "operations": [
                            {
                                "opId": "P0102",
                                "opName": "企业产品批次查看",
                                "opSort": "P0102",
                                "elementClass": "acl_view_ydsEdsGoodsLot",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-4-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-4-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-4-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-4-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-4-0-0-4"
                                    }
                                ],
                                "checked": false,
                                "key": "0-4-0-0-0",
                                "id": "P0102"
                            },
                            {
                                "opId": "P0103",
                                "opName": "企业产品批次编辑",
                                "opSort": "P0103",
                                "elementClass": "acl_edit_ydsEdsGoodsLot",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/{edsGoodsLotId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "0-4-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{edsGoodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-4-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-4-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-4-0-1-3"
                                    }
                                ],
                                "checked": false,
                                "key": "0-4-0-1-0",
                                "id": "P0103"
                            },
                            {
                                "opId": "P0104",
                                "opName": "企业产品批次新增",
                                "opSort": "P0104",
                                "elementClass": "acl_add_ydsEdsGoodsLot",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "0-4-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-4-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "0-4-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "0-4-0-2-3"
                                    }
                                ],
                                "checked": false,
                                "key": "0-4-0-2-0",
                                "id": "P0104"
                            }
                        ],
                        "checked": false,
                        "key": "0-4-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "0-4-0-0-0"
            }
        ],
        "topMenu": true,
        "open": false,
        "checked": false,
        "key": "0-0-0-0-0"
    },
    {
        "systemName": "收货系统",
        "menuId": "10002",
        "menuCode": "10003",
        "menuParentId": "-1",
        "icon": "fa-map-signs",
        "menuSort": 2,
        "name": "规则配置管理",
        "level": 1,
        "anchor": null,
        "functions": null,
        "children": [
            {
                "systemName": "收货系统",
                "menuId": "10002-001",
                "menuCode": "10002-001",
                "menuParentId": "10002",
                "icon": null,
                "menuSort": 1,
                "name": "请领流向策略",
                "level": 2,
                "anchor": "#basics/spdDepotRoutes",
                "functions": [
                    {
                        "functionId": "F0036",
                        "functionName": "请领流向策略",
                        "operations": [
                            {
                                "opId": "P0238",
                                "opName": "请领流向策略查看",
                                "opSort": "P0238",
                                "elementClass": "acl_view_spdDepotRoute",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-0-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-0-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-0-0-0-2"
                                    }
                                ],
                                "checked": false,
                                "key": "1-0-0-0-0",
                                "id": "P0238"
                            },
                            {
                                "opId": "P0241",
                                "opName": "请领流向策略删除",
                                "opSort": "P0241",
                                "elementClass": "acl_delete_spdDepotRoute",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes/{routeId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "1-0-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-0-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-0-0-1-2"
                                    }
                                ],
                                "checked": false,
                                "key": "1-0-0-1-0",
                                "id": "P0241"
                            },
                            {
                                "opId": "P0240",
                                "opName": "请领流向策略编辑",
                                "opSort": "P0240",
                                "elementClass": "acl_edit_spdDepotRoute",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-0-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-0-0-2-1"
                                    }
                                ],
                                "checked": false,
                                "key": "1-0-0-2-0",
                                "id": "P0240"
                            },
                            {
                                "opId": "P0239",
                                "opName": "请领流向策略新增",
                                "opSort": "P0239",
                                "elementClass": "acl_add_spdDepotRoute",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "1-0-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "1-0-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-0-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-0-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-0-0-3-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUse/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-0-0-3-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byTakePoint/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-0-0-3-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byTakePoint",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-0-0-3-7"
                                    }
                                ],
                                "checked": false,
                                "key": "1-0-0-3-0",
                                "id": "P0239"
                            }
                        ],
                        "checked": false,
                        "key": "1-0-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "1-0-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10002-002",
                "menuCode": "10002-002",
                "menuParentId": "10002",
                "icon": null,
                "menuSort": 2,
                "name": "使用类型管理",
                "level": 2,
                "anchor": "#spd/spdUsedTypes",
                "functions": [
                    {
                        "functionId": "F0074",
                        "functionName": "使用类型管理",
                        "operations": [
                            {
                                "opId": "P0644",
                                "opName": "使用类型管理查看",
                                "opSort": "P0644",
                                "elementClass": "acl_view_spdUsedType",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotViews/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-1-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-1-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-1-0-0-2"
                                    }
                                ],
                                "checked": false,
                                "key": "1-1-0-0-0",
                                "id": "P0644"
                            },
                            {
                                "opId": "P0645",
                                "opName": "使用类型管理增加",
                                "opSort": "P0645",
                                "elementClass": "acl_add_spdUsedType",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotViews/byUsedDepot",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-1-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "1-1-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepts/orgId,{orgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-1-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotViews/byUsedDepot",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-1-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotViews/byUsedDepot/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-1-0-1-4"
                                    }
                                ],
                                "checked": false,
                                "key": "1-1-0-1-0",
                                "id": "P0645"
                            },
                            {
                                "opId": "P0646",
                                "opName": "使用类型管理编辑",
                                "opSort": "P0646",
                                "elementClass": "acl_edit_spdUsedType",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes/{usedType}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "1-1-0-2-0"
                                    }
                                ],
                                "checked": false,
                                "key": "1-1-0-2-0",
                                "id": "P0646"
                            },
                            {
                                "opId": "P0647",
                                "opName": "使用类型管理删除",
                                "opSort": "P0647",
                                "elementClass": "acl_delete_spdUsedType",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes/{usedType}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "1-1-0-3-0"
                                    }
                                ],
                                "checked": false,
                                "key": "1-1-0-3-0",
                                "id": "P0647"
                            },
                            {
                                "opId": "P0648",
                                "opName": "使用类型管理提交",
                                "opSort": "P0648",
                                "elementClass": "acl_commitEntity_spdUsedType",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes/{usedType}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "1-1-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes/{usedType}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-1-0-4-1"
                                    }
                                ],
                                "checked": false,
                                "key": "1-1-0-4-0",
                                "id": "P0648"
                            },
                            {
                                "opId": "P0649",
                                "opName": "使用类型管理撤回",
                                "opSort": "P0649",
                                "elementClass": "acl_cancelCommit_spdUsedType",
                                "webApis": [],
                                "checked": false,
                                "key": "1-1-0-5-0",
                                "id": "P0649"
                            }
                        ],
                        "checked": false,
                        "key": "1-1-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "1-1-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10002-003",
                "menuCode": "10002-003",
                "menuParentId": "10002",
                "icon": null,
                "menuSort": 3,
                "name": "仓库帐页管理",
                "level": 2,
                "anchor": "#spd/spdDepotCards",
                "functions": [
                    {
                        "functionId": "F0017",
                        "functionName": "仓库帐页管理",
                        "operations": [
                            {
                                "opId": "P0108",
                                "opName": "仓库帐页管理查看",
                                "opSort": "P0108",
                                "elementClass": "acl_view_spdDepotCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/SpdDepotCardByStockTotalViews/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-0-3"
                                    }
                                ],
                                "checked": false,
                                "key": "1-2-0-0-0",
                                "id": "P0108"
                            },
                            {
                                "opId": "P0109",
                                "opName": "仓库帐页管理编辑",
                                "opSort": "P0109",
                                "elementClass": "acl_edit_spdDepotCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "1-2-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/byLoseSheft,{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/byLoseSheft,{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/{shelfId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/SpdDepotCardByStockTotalViews/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/byWMGDepotShelf,{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-1-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/byWMGDepotShelf,{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-1-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/WMGDepotShelf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-1-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/WMGDepotShelf/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-1-9"
                                    }
                                ],
                                "checked": false,
                                "key": "1-2-0-1-0",
                                "id": "P0109"
                            },
                            {
                                "opId": "P0110",
                                "opName": "仓库帐页管理新增",
                                "opSort": "P0110",
                                "elementClass": "acl_add_spdDepotCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/WMGDepotShelf/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/WMGDepotShelf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "1-2-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "1-2-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/SpdDepotCardByStockTotalViews/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-2-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-2-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/byLoseSheft,{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-2-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/byLoseSheft,{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-2-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/byWMGDepotShelf,{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-2-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/byWMGDepotShelf,{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-2-11"
                                    }
                                ],
                                "checked": false,
                                "key": "1-2-0-2-0",
                                "id": "P0110"
                            },
                            {
                                "opId": "P0111",
                                "opName": "仓库帐页管理删除",
                                "opSort": "P0111",
                                "elementClass": "acl_delete_spdDepotCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/{cardId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "1-2-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/SpdDepotCardByStockTotalViews/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-3-4"
                                    }
                                ],
                                "checked": false,
                                "key": "1-2-0-3-0",
                                "id": "P0111"
                            },
                            {
                                "opId": "P0307",
                                "opName": "仓库帐页管理撤回",
                                "opSort": "P0307",
                                "elementClass": "acl_cancelCommit_spdDepotCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-4-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/SpdDepotCardByStockTotalViews/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-4-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/{cardId}/checkState/completed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "1-2-0-4-3"
                                    }
                                ],
                                "checked": false,
                                "key": "1-2-0-4-0",
                                "id": "P0307"
                            },
                            {
                                "opId": "P0277",
                                "opName": "仓库帐页管理提交",
                                "opSort": "P0277",
                                "elementClass": "acl_commitEntity_spdDepotCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/{cardId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "1-2-0-5-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-5-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-5-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/SpdDepotCardByStockTotalViews/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-5-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/{cardId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-2-0-5-4"
                                    }
                                ],
                                "checked": false,
                                "key": "1-2-0-5-0",
                                "id": "P0277"
                            }
                        ],
                        "checked": false,
                        "key": "1-2-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "1-2-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10002-004",
                "menuCode": "10002-004",
                "menuParentId": "10002",
                "icon": null,
                "menuSort": 4,
                "name": "定数配置管理",
                "level": 2,
                "anchor": "#spd/spdFixeds",
                "functions": [
                    {
                        "functionId": "F0056",
                        "functionName": "定数帐页管理",
                        "operations": [
                            {
                                "opId": "P0453",
                                "opName": "定数帐页管理编辑",
                                "opSort": "P0453",
                                "elementClass": "acl_edit_spdDepotFixedCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/{fixedId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "1-3-0-0-4"
                                    }
                                ],
                                "checked": false,
                                "key": "1-3-0-0-0",
                                "id": "P0453"
                            },
                            {
                                "opId": "P0454",
                                "opName": "定数帐页管理新增",
                                "opSort": "P0454",
                                "elementClass": "acl_add_spdDepotFixedCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byGoodsCard,{goodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "1-3-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "1-3-0-1-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/byUsed",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-1-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/byUsed/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-1-8"
                                    }
                                ],
                                "checked": false,
                                "key": "1-3-0-1-0",
                                "id": "P0454"
                            },
                            {
                                "opId": "P0455",
                                "opName": "定数帐页管理删除",
                                "opSort": "P0455",
                                "elementClass": "acl_delete_spdDepotFixedCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/{cardId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/{fixedId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/{cardFixedId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "1-3-0-2-6"
                                    }
                                ],
                                "checked": false,
                                "key": "1-3-0-2-0",
                                "id": "P0455"
                            },
                            {
                                "opId": "P0456",
                                "opName": "定数帐页管理提交",
                                "opSort": "P0456",
                                "elementClass": "acl_commitEntity_spdDepotFixedCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/{cardFixedId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/{cardFixedId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "1-3-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/{cardFixedId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "1-3-0-3-4"
                                    }
                                ],
                                "checked": false,
                                "key": "1-3-0-3-0",
                                "id": "P0456"
                            },
                            {
                                "opId": "P0457",
                                "opName": "定数帐页管理撤回",
                                "opSort": "P0457",
                                "elementClass": "acl_cancelCommit_spdDepotFixedCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-4-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/{cardFixedId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-4-2"
                                    }
                                ],
                                "checked": false,
                                "key": "1-3-0-4-0",
                                "id": "P0457"
                            },
                            {
                                "opId": "P0446",
                                "opName": "定数帐页管理查看",
                                "opSort": "P0446",
                                "elementClass": "acl_view_spdDepotFixedCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-5-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-5-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/{fixedId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-5-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byGoodsCard,{goodsId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-5-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byGoodsCard,{goodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-5-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/{cardFixedId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-3-0-5-5"
                                    }
                                ],
                                "checked": false,
                                "key": "1-3-0-5-0",
                                "id": "P0446"
                            }
                        ],
                        "checked": false,
                        "key": "1-3-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "1-3-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10002-005",
                "menuCode": "10002-005",
                "menuParentId": "10002",
                "icon": null,
                "menuSort": 5,
                "name": "定数帐页管理",
                "level": 2,
                "anchor": "#spd/spdDepotFixedCards",
                "functions": [
                    {
                        "functionId": "F0055",
                        "functionName": "定数配置管理",
                        "operations": [
                            {
                                "opId": "P0448",
                                "opName": "定数配置管理编辑",
                                "opSort": "P0448",
                                "elementClass": "acl_edit_spdFixed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-4-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-4-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "1-4-0-0-2"
                                    }
                                ],
                                "checked": false,
                                "key": "1-4-0-0-0",
                                "id": "P0448"
                            },
                            {
                                "opId": "P0449",
                                "opName": "定数配置管理新增",
                                "opSort": "P0449",
                                "elementClass": "acl_add_spdFixed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "1-4-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-4-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-4-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "1-4-0-1-3"
                                    }
                                ],
                                "checked": false,
                                "key": "1-4-0-1-0",
                                "id": "P0449"
                            },
                            {
                                "opId": "P0450",
                                "opName": "定数配置管理删除",
                                "opSort": "P0450",
                                "elementClass": "acl_delete_spdFixed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-4-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-4-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/{fixedId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "1-4-0-2-2"
                                    }
                                ],
                                "checked": false,
                                "key": "1-4-0-2-0",
                                "id": "P0450"
                            },
                            {
                                "opId": "P0451",
                                "opName": "定数配置管理提交",
                                "opSort": "P0451",
                                "elementClass": "acl_commitEntity_spdFixed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-4-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-4-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/{fixedId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-4-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/{fixedId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "1-4-0-3-3"
                                    }
                                ],
                                "checked": false,
                                "key": "1-4-0-3-0",
                                "id": "P0451"
                            },
                            {
                                "opId": "P0452",
                                "opName": "定数配置管理撤回",
                                "opSort": "P0452",
                                "elementClass": "acl_cancelCommit_spdFixed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-4-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-4-0-4-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/{fixedId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-4-0-4-2"
                                    }
                                ],
                                "checked": false,
                                "key": "1-4-0-4-0",
                                "id": "P0452"
                            },
                            {
                                "opId": "P0445",
                                "opName": "定数配置管理查看",
                                "opSort": "P0445",
                                "elementClass": "acl_view_spdFixed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-4-0-5-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "1-4-0-5-1"
                                    }
                                ],
                                "checked": false,
                                "key": "1-4-0-5-0",
                                "id": "P0445"
                            }
                        ],
                        "checked": false,
                        "key": "1-4-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "1-4-0-0-0"
            }
        ],
        "topMenu": true,
        "open": false,
        "checked": false,
        "key": "1-0-0-0-0"
    },
    {
        "systemName": "收货系统",
        "menuId": "10003",
        "menuCode": "10003",
        "menuParentId": "-1",
        "icon": "fa-cart-arrow-down",
        "menuSort": 3,
        "name": "英雄联盟",
        "level": 1,
        "anchor": null,
        "functions": null,
        "children": [
            {
                "systemName": "收货系统",
                "menuId": "10003-001",
                "menuCode": "10003-001",
                "menuParentId": "10003",
                "icon": null,
                "menuSort": 1,
                "name": "物资价格维护",
                "level": 2,
                "anchor": "#spd/ydsGoodsInfos",
                "functions": [
                    {
                        "functionId": "F0011",
                        "functionName": "物资价格维护",
                        "operations": [
                            {
                                "opId": "P0077",
                                "opName": "物资价格维护新增",
                                "opSort": "P0077",
                                "elementClass": "acl_add_ydsGoodsInfo",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "2-0-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "2-0-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-0-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-0-0-0-3"
                                    }
                                ],
                                "checked": false,
                                "key": "2-0-0-0-0",
                                "id": "P0077"
                            },
                            {
                                "opId": "P0078",
                                "opName": "物资价格维护删除",
                                "opSort": "P0078",
                                "elementClass": "acl_delete_ydsGoodsInfo",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-0-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-0-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-0-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-0-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/{goodsId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "2-0-0-1-4"
                                    }
                                ],
                                "checked": false,
                                "key": "2-0-0-1-0",
                                "id": "P0078"
                            },
                            {
                                "opId": "P0079",
                                "opName": "物资价格维护编辑",
                                "opSort": "P0079",
                                "elementClass": "acl_edit_ydsGoodsInfo",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-0-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-0-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/{goodsId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "2-0-0-2-2"
                                    }
                                ],
                                "checked": false,
                                "key": "2-0-0-2-0",
                                "id": "P0079"
                            },
                            {
                                "opId": "P0080",
                                "opName": "物资价格维护查看",
                                "opSort": "P0080",
                                "elementClass": "acl_view_ydsGoodsInfo",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-0-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-0-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-0-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-0-0-3-3"
                                    }
                                ],
                                "checked": false,
                                "key": "2-0-0-3-0",
                                "id": "P0080"
                            }
                        ],
                        "checked": false,
                        "key": "2-0-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "2-0-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10003-002",
                "menuCode": "10003-002",
                "menuParentId": "10003",
                "icon": null,
                "menuSort": 2,
                "name": "采购合同管理",
                "level": 2,
                "anchor": "#spd/spdPoContracts",
                "functions": [
                    {
                        "functionId": "F0012",
                        "functionName": "采购合同管理",
                        "operations": [
                            {
                                "opId": "P0083",
                                "opName": "采购合同管理编辑",
                                "opSort": "P0083",
                                "elementClass": "acl_edit_spdPoContract,acl_edit_spdPoContractItem,acl_delete_spdPoContractItem,acl_add_spdPoContractItem,acl_view_spdPoContractItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "2-1-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/{conId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/conId,{conId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/{conId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "2-1-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/conId,{conId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/{conItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "2-1-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/PcsDepts/byProcurementDept",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-0-6"
                                    }
                                ],
                                "checked": false,
                                "key": "2-1-0-0-0",
                                "id": "P0083"
                            },
                            {
                                "opId": "P0084",
                                "opName": "采购合同管理新增",
                                "opSort": "P0084",
                                "elementClass": "acl_add_spdPoContract,acl_add_spdPoContractItem,acl_view_spdPoContractItem,acl_edit_spdPoContractItem,acl_delete_spdPoContractItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "2-1-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/PcsDepts/byProcurementType",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "2-1-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/PcsDepts/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/PcsDepts/byProcurementDept",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-1-6"
                                    }
                                ],
                                "checked": false,
                                "key": "2-1-0-1-0",
                                "id": "P0084"
                            },
                            {
                                "opId": "P0085",
                                "opName": "采购合同管理删除",
                                "opSort": "P0085",
                                "elementClass": "acl_delete_spdPoContract,acl_delete_spdPoContractItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/{conId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "2-1-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/conId,{conId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/{conItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "2-1-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-2-4"
                                    }
                                ],
                                "checked": false,
                                "key": "2-1-0-2-0",
                                "id": "P0085"
                            },
                            {
                                "opId": "P0086",
                                "opName": "采购合同管理提交",
                                "opSort": "P0086",
                                "elementClass": "acl_commitEntity_spdPoContract",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/{conId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "2-1-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/{conId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-3-3"
                                    }
                                ],
                                "checked": false,
                                "key": "2-1-0-3-0",
                                "id": "P0086"
                            },
                            {
                                "opId": "P0087",
                                "opName": "采购合同管理审核",
                                "opSort": "P0087",
                                "elementClass": "acl_reviewEntity_spdPoContract",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/{conId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "2-1-0-4-0"
                                    }
                                ],
                                "checked": false,
                                "key": "2-1-0-4-0",
                                "id": "P0087"
                            },
                            {
                                "opId": "P0088",
                                "opName": "采购合同管理撤回",
                                "opSort": "P0088",
                                "elementClass": "acl_cancelCommit_spdPoContract",
                                "webApis": [],
                                "checked": false,
                                "key": "2-1-0-5-0",
                                "id": "P0088"
                            },
                            {
                                "opId": "P0082",
                                "opName": "采购合同管理查看",
                                "opSort": "P0082",
                                "elementClass": "acl_view_spdPoContract,acl_view_spdPoContractItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-6-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-6-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/PcsDepts/byProcurementType",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-6-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/conId,{conId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-1-0-6-3"
                                    }
                                ],
                                "checked": false,
                                "key": "2-1-0-6-0",
                                "id": "P0082"
                            }
                        ],
                        "checked": false,
                        "key": "2-1-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "2-1-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10003-003",
                "menuCode": "10003-003",
                "menuParentId": "10003",
                "icon": null,
                "menuSort": 3,
                "name": "配额调节管理",
                "level": 2,
                "anchor": "#spd/spdPoContractItems",
                "functions": [
                    {
                        "functionId": "F0040",
                        "functionName": "配额调节管理",
                        "operations": [
                            {
                                "opId": "P0478",
                                "opName": "配额调节管理编辑",
                                "opSort": "P0478",
                                "elementClass": "acl_edit_spdPoContractItemAdjust,acl_edit_spdPoContractAdjust",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/{adjustId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "2-2-0-0-5"
                                    }
                                ],
                                "checked": false,
                                "key": "2-2-0-0-0",
                                "id": "P0478"
                            },
                            {
                                "opId": "P0480",
                                "opName": "配额调节管理删除",
                                "opSort": "P0480",
                                "elementClass": "acl_edit_spdPoContractItemAdjust,acl_delete_spdPoContractAdjust",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/{adjustId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "2-2-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-1-5"
                                    }
                                ],
                                "checked": false,
                                "key": "2-2-0-1-0",
                                "id": "P0480"
                            },
                            {
                                "opId": "P0479",
                                "opName": "配额调节管理新增",
                                "opSort": "P0479",
                                "elementClass": "acl_edit_spdPoContractItemAdjust,acl_add_spdPoContractAdjust",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "2-2-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-2-5"
                                    }
                                ],
                                "checked": false,
                                "key": "2-2-0-2-0",
                                "id": "P0479"
                            },
                            {
                                "opId": "P0481",
                                "opName": "配额调节管理提交",
                                "opSort": "P0481",
                                "elementClass": "acl_edit_spdPoContractItemAdjust,acl_commitEntity_spdPoContractAdjust",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-3-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/{adjustId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "2-2-0-3-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/{adjustId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-3-6"
                                    }
                                ],
                                "checked": false,
                                "key": "2-2-0-3-0",
                                "id": "P0481"
                            },
                            {
                                "opId": "P0482",
                                "opName": "配额调节管理审核",
                                "opSort": "P0482",
                                "elementClass": "acl_edit_spdPoContractItemAdjust,acl_reviewEntity_spdPoContractAdjust",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/{adjustId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "2-2-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-4-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-4-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-4-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-4-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-4-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/{adjustId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-4-6"
                                    }
                                ],
                                "checked": false,
                                "key": "2-2-0-4-0",
                                "id": "P0482"
                            },
                            {
                                "opId": "P0098",
                                "opName": "配额调节管理查看",
                                "opSort": "P0098",
                                "elementClass": "acl_view_spdPoContractItemAdjust,acl_view_spdPoContractAdjust",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-5-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-5-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-5-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-5-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-2-0-5-4"
                                    }
                                ],
                                "checked": false,
                                "key": "2-2-0-5-0",
                                "id": "P0098"
                            }
                        ],
                        "checked": false,
                        "key": "2-2-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "2-2-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10003-004",
                "menuCode": "10003-004",
                "menuParentId": "10003",
                "icon": null,
                "menuSort": 4,
                "name": "采购订单管理",
                "level": 2,
                "anchor": "#spd/spdPurchPos",
                "functions": [
                    {
                        "functionId": "F0013",
                        "functionName": "采购订单管理",
                        "operations": [
                            {
                                "opId": "P0089",
                                "opName": "采购订单管理查看",
                                "opSort": "P0089",
                                "elementClass": "acl_view_spdPurch,acl_view_spdPurchItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/detail/poId,{poId}/pdf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/{cardId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/{poId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-0-6"
                                    }
                                ],
                                "checked": false,
                                "key": "2-3-0-0-0",
                                "id": "P0089"
                            },
                            {
                                "opId": "P0090",
                                "opName": "采购订单管理编辑",
                                "opSort": "P0090",
                                "elementClass": "acl_edit_spdPurch,acl_edit_spdPurchItem,acl_view_spdPurchItem,acl_add_spdPurchItem,acl_delete_spdPurchItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/poId,{poId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byPurchase/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byPurchase",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-1-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "2-3-0-1-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/{poId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "2-3-0-1-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/{poItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "2-3-0-1-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/{cardId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-1-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsContractViews/{depotId},{supplierOrg}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-1-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsContractViews/{depotId},{supplierOrg}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-1-12"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/poId,{poId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-1-13"
                                    }
                                ],
                                "checked": false,
                                "key": "2-3-0-1-0",
                                "id": "P0090"
                            },
                            {
                                "opId": "P0091",
                                "opName": "采购订单管理增加",
                                "opSort": "P0091",
                                "elementClass": "acl_add_spdPurch,acl_add_spdPurchItem,acl_view_spdPurchItem,acl_edit_spdPurchItem,acl_delete_spdPurchItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "2-3-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byPurchase",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byPurchase/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byReceivePoint,{ownerOrgId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byOwnerHospital,{ownerOrgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byOwnerDepot,{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byOwnerDepot,{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-2-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "2-3-0-2-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsContractViews/{depotId},{supplierOrg}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-2-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsContractViews/{depotId},{supplierOrg}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-2-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/poId,{poId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-2-10"
                                    }
                                ],
                                "checked": false,
                                "key": "2-3-0-2-0",
                                "id": "P0091"
                            },
                            {
                                "opId": "P0092",
                                "opName": "采购订单管理删除",
                                "opSort": "P0092",
                                "elementClass": "acl_delete_spdPurch,acl_delete_spdPurchItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/{poId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "2-3-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/{poItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "2-3-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/poId,{poId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byPurchase/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byPurchase",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-3-4"
                                    }
                                ],
                                "checked": false,
                                "key": "2-3-0-3-0",
                                "id": "P0092"
                            },
                            {
                                "opId": "P0094",
                                "opName": "采购订单管理审核",
                                "opSort": "P0094",
                                "elementClass": "acl_reviewEntity_spdPurch",
                                "webApis": [],
                                "checked": false,
                                "key": "2-3-0-4-0",
                                "id": "P0094"
                            },
                            {
                                "opId": "P0306",
                                "opName": "采购订单管理打印",
                                "opSort": "P0306",
                                "elementClass": "acl_export_PurchItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/detail/poId,{poId}/pdf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-5-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/detail/poId,{poId}/pdf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-3-0-5-1"
                                    }
                                ],
                                "checked": false,
                                "key": "2-3-0-5-0",
                                "id": "P0306"
                            }
                        ],
                        "checked": false,
                        "key": "2-3-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "2-3-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10003-005",
                "menuCode": "10003-005",
                "menuParentId": "10003",
                "icon": null,
                "menuSort": 5,
                "name": "备货业务管理",
                "level": 2,
                "anchor": "#spd/spdPurchRes",
                "functions": [
                    {
                        "functionId": "F0038",
                        "functionName": "备货业务管理",
                        "operations": [
                            {
                                "opId": "P0258",
                                "opName": "备货业务管理增加",
                                "opSort": "P0258",
                                "elementClass": "acl_add_spdPurchRe,acl_add_spdPurchItemRe,acl_view_spdPurchRe,acl_view_spdPurchItemRe,acl_edit_spdPurchItemRe,acl_delete_spdPurchItemRe",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "2-4-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byStocking",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-4-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byStocking/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-4-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byOwnerSupplier,{ownerOrgId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-4-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byOwnerSupplier,{ownerOrgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-4-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/{poItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "2-4-0-0-5"
                                    }
                                ],
                                "checked": false,
                                "key": "2-4-0-0-0",
                                "id": "P0258"
                            },
                            {
                                "opId": "P0259",
                                "opName": "备货业务管理编辑",
                                "opSort": "P0259",
                                "elementClass": "acl_edit_spdPurchRe,acl_edit_spdPurchItemRe,acl_view_spdPurchItemRe,acl_add_spdPurchItemRe,acl_delete_spdPurchItemRe",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byStocking",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-4-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byStocking/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-4-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/poId,{poId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-4-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/{poId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "2-4-0-1-3"
                                    }
                                ],
                                "checked": false,
                                "key": "2-4-0-1-0",
                                "id": "P0259"
                            },
                            {
                                "opId": "P0260",
                                "opName": "备货业务管理查看",
                                "opSort": "P0260",
                                "elementClass": "acl_view_spdPurchRe,acl_view_spdPurchItemRe",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/poId,{poId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-4-0-2-0"
                                    }
                                ],
                                "checked": false,
                                "key": "2-4-0-2-0",
                                "id": "P0260"
                            },
                            {
                                "opId": "P0261",
                                "opName": "备货业务管理审核",
                                "opSort": "P0261",
                                "elementClass": "acl_reviewEntity_spdPurchRe",
                                "webApis": [],
                                "checked": false,
                                "key": "2-4-0-3-0",
                                "id": "P0261"
                            },
                            {
                                "opId": "P0262",
                                "opName": "备货业务管理提交",
                                "opSort": "P0262",
                                "elementClass": "acl_commitEntity_spdPurchRe",
                                "webApis": [],
                                "checked": false,
                                "key": "2-4-0-4-0",
                                "id": "P0262"
                            },
                            {
                                "opId": "P0264",
                                "opName": "备货业务管理删除",
                                "opSort": "P0264",
                                "elementClass": "acl_delete_spdPurchRe,acl_delete_spdPurchItemRe",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byStocking",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-4-0-5-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byStocking/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-4-0-5-1"
                                    }
                                ],
                                "checked": false,
                                "key": "2-4-0-5-0",
                                "id": "P0264"
                            }
                        ],
                        "checked": false,
                        "key": "2-4-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "2-4-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10003-006",
                "menuCode": "10003-006",
                "menuParentId": "10003",
                "icon": null,
                "menuSort": 6,
                "name": "业务模版管理",
                "level": 2,
                "anchor": "#spd/spdBizExamples",
                "functions": [
                    {
                        "functionId": "F0063",
                        "functionName": "业务模版管理",
                        "operations": [
                            {
                                "opId": "P0493",
                                "opName": "业务模版管理查看",
                                "opSort": "P0493",
                                "elementClass": "acl_view_spdBizExample,acl_view_spdBizExampleItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems/exampleId,{exampleId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems/exampleId,{exampleId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-0-3"
                                    }
                                ],
                                "checked": false,
                                "key": "2-5-0-0-0",
                                "id": "P0493"
                            },
                            {
                                "opId": "P0494",
                                "opName": "业务模版管理新增",
                                "opSort": "P0494",
                                "elementClass": "acl_add_spdBizExample,acl_add_spdBizExampleItem,acl_view_spdBizExampleItem,acl_edit_spdBizExampleItem,acl_delete _spdBizExampleItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "2-5-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems/exampleId,{exampleId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems/exampleId,{exampleId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byUse/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-1-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-1-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-1-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "2-5-0-1-9"
                                    }
                                ],
                                "checked": false,
                                "key": "2-5-0-1-0",
                                "id": "P0494"
                            },
                            {
                                "opId": "P0495",
                                "opName": "业务模版管理编辑",
                                "opSort": "P0495",
                                "elementClass": "acl_edit_spdBizExample,acl_edit_spdBizExampleItem,acl_view_spdBizExampleItem,acl_add_spdBizExampleItem,acl_delete _spdBizExampleItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems/exampleId,{exampleId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems/exampleId,{exampleId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/{cardFixedId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples/{exampleId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "2-5-0-2-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-2-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems/{exampleItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "2-5-0-2-8"
                                    }
                                ],
                                "checked": false,
                                "key": "2-5-0-2-0",
                                "id": "P0495"
                            },
                            {
                                "opId": "P0496",
                                "opName": "业务模版管理删除",
                                "opSort": "P0496",
                                "elementClass": "acl_delete_spdBizExample,acl_delete_spdBizExampleItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "2-5-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples/{exampleId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "2-5-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems/{exampleItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "2-5-0-3-3"
                                    }
                                ],
                                "checked": false,
                                "key": "2-5-0-3-0",
                                "id": "P0496"
                            },
                            {
                                "opId": "P0497",
                                "opName": "业务模版管理提交",
                                "opSort": "P0497",
                                "elementClass": null,
                                "webApis": [],
                                "checked": false,
                                "key": "2-5-0-4-0",
                                "id": "P0497"
                            }
                        ],
                        "checked": false,
                        "key": "2-5-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "2-5-0-0-0"
            }
        ],
        "topMenu": true,
        "open": false,
        "checked": false,
        "key": "2-0-0-0-0"
    },
    {
        "systemName": "收货系统",
        "menuId": "10004",
        "menuCode": "10004",
        "menuParentId": "-1",
        "icon": "fa-ambulance",
        "menuSort": 4,
        "name": "供应配货管理",
        "level": 1,
        "anchor": null,
        "functions": null,
        "children": [
            {
                "systemName": "收货系统",
                "menuId": "10004-001",
                "menuCode": "10004-001",
                "menuParentId": "10004",
                "icon": null,
                "menuSort": 1,
                "name": "供应信息录入",
                "level": 2,
                "anchor": "#spd/spdSellerSends",
                "functions": [
                    {
                        "functionId": "F0004",
                        "functionName": "供应信息录入",
                        "operations": [
                            {
                                "opId": "P0024",
                                "opName": "供应信息录入查看",
                                "opSort": "P0024",
                                "elementClass": "acl_view_spdSellerSend,acl_view_spdSellerSendItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-0-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-0-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/{edsGoodsLotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-0-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/depotId,{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-0-9"
                                    }
                                ],
                                "checked": false,
                                "key": "3-0-0-0-0",
                                "id": "P0024"
                            },
                            {
                                "opId": "P0668",
                                "opName": "导入送货单",
                                "opSort": "P0668",
                                "elementClass": "",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/batchCreateDeliverySheetTasks",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "3-0-0-1-0"
                                    }
                                ],
                                "checked": false,
                                "key": "3-0-0-1-0",
                                "id": "P0668"
                            },
                            {
                                "opId": "P0026",
                                "opName": "供应信息录入编辑",
                                "opSort": "P0026",
                                "elementClass": "acl_edit_spdSellerSend,acl_edit_spdSellerSendItem,acl_view_spdSellerSendItem,acl_add_spdSellerSendItem,acl_delete_spdSellerSendItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/depotId",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId},sendId",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "3-0-0-2-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/sendId,{sendId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-2-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-2-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-2-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-2-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-2-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-2-12"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "3-0-0-2-13"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "3-0-0-2-14"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/{edsGoodsLotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-2-15"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-2-16"
                                    }
                                ],
                                "checked": false,
                                "key": "3-0-0-2-0",
                                "id": "P0026"
                            },
                            {
                                "opId": "P0029",
                                "opName": "供应信息录入审核",
                                "opSort": "P0029",
                                "elementClass": "acl_reviewEntity_spdSellerSend",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-3-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-3-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-3-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "3-0-0-3-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSend/{sendItemId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "3-0-0-3-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-3-9"
                                    }
                                ],
                                "checked": false,
                                "key": "3-0-0-3-0",
                                "id": "P0029"
                            },
                            {
                                "opId": "P0031",
                                "opName": "供应信息录入打印",
                                "opSort": "P0031",
                                "elementClass": "acl_view_spdSellerSend,acl_view_spdSellerSendItem,acl_exportDetail,acl_exportBoxNo,acl_exportLabel",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-4-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-4-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-4-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-4-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-4-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-4-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/sendId,{sendId}/pdf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-4-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSend/sendId,{sendId}/pdf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-4-8"
                                    }
                                ],
                                "checked": false,
                                "key": "3-0-0-4-0",
                                "id": "P0031"
                            },
                            {
                                "opId": "P0025",
                                "opName": "供应信息录入新增",
                                "opSort": "P0025",
                                "elementClass": "acl_add_spdSellerSend,acl_add_spdSellerSendItem,acl_view_spdSellerSendItem,acl_edit_spdSellerSendItem,acl_delete_spdSellerSendItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "3-0-0-5-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "3-0-0-5-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/byDepotCard,{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/byDepotCard,{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{edsGoodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/edsGoodsId,{edsGoodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-12"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-13"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-14"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "3-0-0-5-15"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byReceivePoint,{ownerOrgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-16"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byReceivePoint,{ownerOrgId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-17"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byReceivePointOffer,{manageOrgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-18"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byReceivePointOffer,{manageOrgId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-5-19"
                                    }
                                ],
                                "checked": false,
                                "key": "3-0-0-5-0",
                                "id": "P0025"
                            },
                            {
                                "opId": "P0027",
                                "opName": "供应信息录入删除",
                                "opSort": "P0027",
                                "elementClass": "acl_delete_spdSellerSend,acl_delete_spdSellerSendItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-6-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-6-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-6-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-6-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-6-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-0-0-6-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "3-0-0-6-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "3-0-0-6-7"
                                    }
                                ],
                                "checked": false,
                                "key": "3-0-0-6-0",
                                "id": "P0027"
                            }
                        ],
                        "checked": false,
                        "key": "3-0-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "3-0-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10004-002",
                "menuCode": "10004-002",
                "menuParentId": "10004",
                "icon": null,
                "menuSort": 2,
                "name": "送货信息录入",
                "level": 2,
                "anchor": "#spd/spdSellerSendSupplys",
                "functions": [
                    {
                        "functionId": "F0034",
                        "functionName": "送货信息录入",
                        "operations": [
                            {
                                "opId": "P0226",
                                "opName": "送货信息录入新增",
                                "opSort": "P0226",
                                "elementClass": "acl_add_spdSellerSendSupply,acl_add_spdSellerSendItemSupply,acl_view_spdSellerSendItemSupply",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "3-1-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "3-1-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/byOrder",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/byOrder/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{edsGoodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/edsGoodsId,{edsGoodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-0-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-0-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-0-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-0-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-0-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-0-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "3-1-0-0-12"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byReceivePoint,{ownerOrgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-0-13"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byReceivePoint,{ownerOrgId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-0-14"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsPurchItemViews",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-0-15"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsPurchItemViews/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-0-16"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-0-17"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsPurchItemViews/{rid}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-0-18"
                                    }
                                ],
                                "checked": false,
                                "key": "3-1-0-0-0",
                                "id": "P0226"
                            },
                            {
                                "opId": "P0225",
                                "opName": "送货信息录入编辑",
                                "opSort": "P0225",
                                "elementClass": "acl_edit_spdSellerSendSupply,acl_edit_spdSellerSendItemSupply,acl_view_spdSellerSendItemSupply,acl_delete_spdSellerSendItemSupply,acl_add_spdSellerSendItemSupply",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/byOrder",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/byOrder/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{edsGoodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/edsGoodsId,{edsGoodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-1-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-1-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-1-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-1-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "3-1-0-1-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsPurchItemViews",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-1-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsPurchItemViews/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-1-12"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-1-13"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsPurchItemViews/{rid}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-1-14"
                                    }
                                ],
                                "checked": false,
                                "key": "3-1-0-1-0",
                                "id": "P0225"
                            },
                            {
                                "opId": "P0224",
                                "opName": "送货信息录入查看",
                                "opSort": "P0224",
                                "elementClass": "acl_view_spdSellerSendSupply,acl_view_spdSellerSendItemSupply",
                                "webApis": [],
                                "checked": false,
                                "key": "3-1-0-2-0",
                                "id": "P0224"
                            },
                            {
                                "opId": "P0229",
                                "opName": "送货信息录入打印",
                                "opSort": "P0229",
                                "elementClass": "acl_export_spdSellerSendItemSupply,acl_view_spdSellerSendSupply,acl_view_spdSellerSendItemSupply",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "3-1-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "3-1-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/byOrder",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/byOrder/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-3-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{edsGoodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-3-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/edsGoodsId,{edsGoodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-3-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-3-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-3-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-3-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-3-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-3-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "3-1-0-3-12"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byReceivePoint,{ownerOrgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-3-13"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byReceivePoint,{ownerOrgId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-3-14"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsPurchItemViews",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-3-15"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsPurchItemViews/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-3-16"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-3-17"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsPurchItemViews/{rid}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-3-18"
                                    }
                                ],
                                "checked": false,
                                "key": "3-1-0-3-0",
                                "id": "P0229"
                            },
                            {
                                "opId": "P0225",
                                "opName": "送货信息录入编辑",
                                "opSort": "P0225",
                                "elementClass": "acl_edit_spdSellerSendSupply,acl_edit_spdSellerSendItemSupply,acl_view_spdSellerSendItemSupply,acl_delete_spdSellerSendItemSupply,acl_add_spdSellerSendItemSupply",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/byOrder",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/byOrder/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-4-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-4-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{edsGoodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-4-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/edsGoodsId,{edsGoodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-4-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-4-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-4-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-4-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-4-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-4-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsPurchItemViews/{rid}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-4-10"
                                    }
                                ],
                                "checked": false,
                                "key": "3-1-0-4-0",
                                "id": "P0225"
                            },
                            {
                                "opId": "P0228",
                                "opName": "送货信息录入审核",
                                "opSort": "P0228",
                                "elementClass": "acl_reviewEntity_spdSellerSendSupply",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-5-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/byOrder",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-5-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/byOrder/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-5-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-5-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-5-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-5-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-5-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "3-1-0-5-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSend/{sendItemId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "3-1-0-5-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-5-9"
                                    }
                                ],
                                "checked": false,
                                "key": "3-1-0-5-0",
                                "id": "P0228"
                            },
                            {
                                "opId": "P0227",
                                "opName": "送货信息录入删除",
                                "opSort": "P0227",
                                "elementClass": "acl_delete_spdSellerSendSupply,acl_view_spdSellerSendItemSupply,acl_delete_spdSellerSendItemSupply",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-6-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-6-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-6-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-6-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-6-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-1-0-6-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/{sendId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "3-1-0-6-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "3-1-0-6-7"
                                    }
                                ],
                                "checked": false,
                                "key": "3-1-0-6-0",
                                "id": "P0227"
                            }
                        ],
                        "checked": false,
                        "key": "3-1-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "3-1-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10004-003",
                "menuCode": "10004-003",
                "menuParentId": "10004",
                "icon": null,
                "menuSort": 3,
                "name": "销售发票管理",
                "level": 2,
                "anchor": "#spd/spdSellerSendTaxs",
                "functions": [
                    {
                        "functionId": "F0039",
                        "functionName": "销售发票管理",
                        "operations": [
                            {
                                "opId": "P0265",
                                "opName": "销售发票管理新增",
                                "opSort": "P0265",
                                "elementClass": "acl_add_spdSellerSendTax,acl_add_spdSellerSendTaxItem,acl_view_spdSellerSendTaxItem,acl_delete_spdSellerSendTaxItem,acl_edit_spdSellerSendTaxItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxs",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "3-2-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxs",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "3-2-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxs/bySellerSendTaxsOrg/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxs/bySellerSendTaxsOrg",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxItems/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxItems/taxId,{taxId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-0-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/sellerOrg",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-0-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-0-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "3-2-0-0-9"
                                    }
                                ],
                                "checked": false,
                                "key": "3-2-0-0-0",
                                "id": "P0265"
                            },
                            {
                                "opId": "P0266",
                                "opName": "销售发票管理查看",
                                "opSort": "P0266",
                                "elementClass": "acl_view_spdSellerSendTax,acl_view_spdSellerSendTaxItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxs",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxs/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers/ids,625",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxItems/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers/ids",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxs/bySellerSendTaxsOrg/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-1-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxs/bySellerSendTaxsOrg",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-1-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sellerOrgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-1-8"
                                    }
                                ],
                                "checked": false,
                                "key": "3-2-0-1-0",
                                "id": "P0266"
                            },
                            {
                                "opId": "P0267",
                                "opName": "销售发票管理编辑",
                                "opSort": "P0267",
                                "elementClass": "acl_edit_spdSellerSendTax,acl_edit_spdSellerSendTaxItem,acl_view_spdSellerSendTaxItem,acl_add_spdSellerSendTaxItem,acl_delete_spdSellerSendTaxItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxs/ids,{ids}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "3-2-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxs/{taxId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "3-2-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxs/{taxId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxItems/{taxItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxItems/{taxItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "3-2-0-2-6"
                                    }
                                ],
                                "checked": false,
                                "key": "3-2-0-2-0",
                                "id": "P0267"
                            },
                            {
                                "opId": "P0268",
                                "opName": "销售发票管理删除",
                                "opSort": "P0268",
                                "elementClass": "acl_delete_spdSellerSendTax,acl_delete_spdSellerSendTaxItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxs/{taxId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "3-2-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxs/{taxId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "3-2-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxs/{taxId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "3-2-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendTaxItems/{taxItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "3-2-0-3-3"
                                    }
                                ],
                                "checked": false,
                                "key": "3-2-0-3-0",
                                "id": "P0268"
                            },
                            {
                                "opId": "P0269",
                                "opName": "销售发票管理审核",
                                "opSort": "P0269",
                                "elementClass": "acl_reviewEntity_spdSellerSendTax",
                                "webApis": [],
                                "checked": false,
                                "key": "3-2-0-4-0",
                                "id": "P0269"
                            }
                        ],
                        "checked": false,
                        "key": "3-2-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "3-2-0-0-0"
            }
        ],
        "topMenu": true,
        "open": false,
        "checked": false,
        "key": "3-0-0-0-0"
    },
    {
        "systemName": "收货系统",
        "menuId": "10005",
        "menuCode": "10005",
        "menuParentId": "-1",
        "icon": "fa-university ",
        "menuSort": 5,
        "name": "库房库存管理",
        "level": 1,
        "anchor": null,
        "functions": null,
        "children": [
            {
                "systemName": "收货系统",
                "menuId": "10005-001",
                "menuCode": "10005-001",
                "menuParentId": "10005",
                "icon": null,
                "menuSort": 1,
                "name": "库房收货确认",
                "level": 2,
                "anchor": "#spd/spdReceives",
                "functions": [
                    {
                        "functionId": "F0005",
                        "functionName": "库房收货确认",
                        "operations": [
                            {
                                "opId": "P0032",
                                "opName": "库房收货确认查看",
                                "opSort": "P0032",
                                "elementClass": "acl_view_spdReceive",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/receiveCode,{receiveCode}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/code,{code}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byChecked/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byChecked",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byChecked",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byChecked/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-0-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-0-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-0-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-0-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-0-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-0-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-0-12"
                                    }
                                ],
                                "checked": false,
                                "key": "4-0-0-0-0",
                                "id": "P0032"
                            },
                            {
                                "opId": "P0282",
                                "opName": "库房收货确认保存",
                                "opSort": "P0282",
                                "elementClass": "acl_update_spdReceive",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-0-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/{receiveItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-0-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/{receiveItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-0-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/code,{code}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/receiveCode,{receiveCode}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-1-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-1-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/{receiveId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-0-0-1-8"
                                    }
                                ],
                                "checked": false,
                                "key": "4-0-0-1-0",
                                "id": "P0282"
                            },
                            {
                                "opId": "P0281",
                                "opName": "库房收货确认收货",
                                "opSort": "P0281",
                                "elementClass": "acl_confirm_spdReceive",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/{receiveId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-0-0-2-0"
                                    }
                                ],
                                "checked": false,
                                "key": "4-0-0-2-0",
                                "id": "P0281"
                            },
                            {
                                "opId": "P0655",
                                "opName": "库房收货确认收货入库",
                                "opSort": "P0655",
                                "elementClass": "acl_inStorage_spdReceive",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/{receiveId}/checkState/byQuick/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-0-0-3-0"
                                    }
                                ],
                                "checked": false,
                                "key": "4-0-0-3-0",
                                "id": "P0655"
                            }
                        ],
                        "checked": false,
                        "key": "4-0-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "4-0-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10005-002",
                "menuCode": "10005-002",
                "menuParentId": "10005",
                "icon": null,
                "menuSort": 2,
                "name": "库房收货记录",
                "level": 2,
                "anchor": "#spd/spdReceivesHis",
                "functions": [
                    {
                        "functionId": "F0014",
                        "functionName": "库房收货记录",
                        "operations": [
                            {
                                "opId": "P0100",
                                "opName": "库房收货记录查看",
                                "opSort": "P0100",
                                "elementClass": "acl_view_spdReceive,acl_view_spdReceiveItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-1-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-1-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-1-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byHis/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-1-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/receiveId,{receiveId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-1-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byHis",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-1-0-0-5"
                                    }
                                ],
                                "checked": false,
                                "key": "4-1-0-0-0",
                                "id": "P0100"
                            },
                            {
                                "opId": "P0237",
                                "opName": "库房收货记录同步",
                                "opSort": "P0237",
                                "elementClass": "acl_exportReceiveToHis",
                                "webApis": [],
                                "checked": false,
                                "key": "4-1-0-1-0",
                                "id": "P0237"
                            },
                            {
                                "opId": "P0101",
                                "opName": "库房收货记录打印",
                                "opSort": "P0101",
                                "elementClass": "acl_exportReceive",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/receiveId,{receiveId}/pdf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-1-0-2-0"
                                    }
                                ],
                                "checked": false,
                                "key": "4-1-0-2-0",
                                "id": "P0101"
                            }
                        ],
                        "checked": false,
                        "key": "4-1-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "4-1-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10005-003",
                "menuCode": "10005-003",
                "menuParentId": "10005",
                "icon": null,
                "menuSort": 3,
                "name": "库房入库调度",
                "level": 2,
                "anchor": "#spd/spdDispatchers",
                "functions": [
                    {
                        "functionId": "F0022",
                        "functionName": "库房入库调度",
                        "operations": [
                            {
                                "opId": "P0231",
                                "opName": "库房入库调度查看",
                                "opSort": "P0231",
                                "elementClass": "acl_view_spdDispatcher",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers/byReceipt/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byYetDispatchedSpdReceives,{dispatcherId}/count",
                                        "serviceMethod": "GET",
                                        "checked": true,
                                        "key": "4-2-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byYetDispatchedSpdReceives,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byNotDispatchedSpdReceives,{dispatcherId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byNotDispatchedSpdReceives,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers/byReceipt",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-0-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/receiveIds,{receiveIds}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-0-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatcherRefs/dispatcherId,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-0-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatcherRefs",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-0-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/yetDispatchedSpdReceives/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-0-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/yetDispatchedSpdReceives",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-0-11"
                                    }
                                ],
                                "checked": false,
                                "key": "4-2-0-0-0",
                                "id": "P0231"
                            },
                            {
                                "opId": "P0232",
                                "opName": "库房入库调度新增",
                                "opSort": "P0232",
                                "elementClass": "acl_add_spdDispatcher",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "4-2-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers/byReceipt",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatcherRefs/dispatcherId,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byYetDispatchedSpdReceives,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byYetDispatchedSpdReceives,{dispatcherId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byNotDispatchedSpdReceives,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byNotDispatchedSpdReceives,{dispatcherId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-1-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/receiveIds,{receiveIds}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-1-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/ownerOrgId,{ownerOrgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-1-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/ownerOrgId,{ownerOrgId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-1-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "4-2-0-1-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byReceivePointDept/{manageOrgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-1-11"
                                    },
                                    {
                                        "serviceUrl": "//yard/pcs/pcsDepots/byReceivePointDept/{manageOrgId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-1-12"
                                    }
                                ],
                                "checked": false,
                                "key": "4-2-0-1-0",
                                "id": "P0232"
                            },
                            {
                                "opId": "P0233",
                                "opName": "库房入库调度编辑",
                                "opSort": "P0233",
                                "elementClass": "acl_edit_spdDispatcher",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers/{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatcherRefs/{dispatcherRefId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-2-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/receiveIds,{receiveIds}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatcherRefs/dispatcherId,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byNotDispatchedSpdReceives,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byNotDispatchedSpdReceives,{dispatcherId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byYetDispatchedSpdReceives,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-2-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byYetDispatchedSpdReceives,{dispatcherId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-2-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/notDispatchedSpdReceives",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-2-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/notDispatchedSpdReceives/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-2-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatcherRefs",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "4-2-0-2-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-2-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatcherRefs/{dispatcherRefId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "4-2-0-2-12"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes/{routeId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-2-0-2-13"
                                    }
                                ],
                                "checked": false,
                                "key": "4-2-0-2-0",
                                "id": "P0233"
                            },
                            {
                                "opId": "P0234",
                                "opName": "库房入库调度删除",
                                "opSort": "P0234",
                                "elementClass": "acl_delete_spdDispatcher",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers/{dispatcherId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "4-2-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatcherRefs/dispatcherId,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byYetDispatchedSpdReceives,{dispatcherId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers/byReceipt",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byYetDispatchedSpdReceives,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-2-0-3-4"
                                    }
                                ],
                                "checked": false,
                                "key": "4-2-0-3-0",
                                "id": "P0234"
                            },
                            {
                                "opId": "P0287",
                                "opName": "库房入库调度调度",
                                "opSort": "P0297",
                                "elementClass": "acl_confirmSpdDispatcher",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers/{routeId}/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-2-0-4-0"
                                    }
                                ],
                                "checked": false,
                                "key": "4-2-0-4-0",
                                "id": "P0287"
                            },
                            {
                                "opId": "P0236",
                                "opName": "库房入库调度审核",
                                "opSort": "P0236",
                                "elementClass": "acl_reviewEntity_spdDispatcher",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers/{routeId}/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-2-0-5-0"
                                    }
                                ],
                                "checked": false,
                                "key": "4-2-0-5-0",
                                "id": "P0236"
                            }
                        ],
                        "checked": false,
                        "key": "4-2-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "4-2-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10005-004",
                "menuCode": "10005-004",
                "menuParentId": "10005",
                "icon": null,
                "menuSort": 4,
                "name": "库房出库调度",
                "level": 2,
                "anchor": "#spd/spdApplyDispatchers",
                "functions": [
                    {
                        "functionId": "F0035",
                        "functionName": "库房出库调度",
                        "operations": [
                            {
                                "opId": "P0245",
                                "opName": "库房出库调度查看",
                                "opSort": "P0245",
                                "elementClass": "acl_view_spdApplyDispatcher",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyIds,{applyIds}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers/byPicking",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byNotDispatchedSpdApply,{dispatcherId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byNotDispatchedSpdApply,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byYetDisaptchedSpdApply,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byYetDisaptchedSpdApply,{dispatcherId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-0-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-0-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-0-8"
                                    }
                                ],
                                "checked": false,
                                "key": "4-3-0-0-0",
                                "id": "P0245"
                            },
                            {
                                "opId": "P0246",
                                "opName": "库房出库调度新增",
                                "opSort": "P0246",
                                "elementClass": "acl_add_spdApplyDispatcher",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyIds,{applyIds}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "4-3-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers/byPicking",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byYetDisaptchedSpdApply,{dispatcherId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byYetDisaptchedSpdApply,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byNotDispatchedSpdApply,{dispatcherId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byNotDispatchedSpdApply,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-1-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byReceivePointDept/{manageOrgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-1-7"
                                    },
                                    {
                                        "serviceUrl": "//yard/pcs/pcsDepots/byReceivePointDept/{manageOrgId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-1-8"
                                    }
                                ],
                                "checked": false,
                                "key": "4-3-0-1-0",
                                "id": "P0246"
                            },
                            {
                                "opId": "P0247",
                                "opName": "库房出库调度编辑",
                                "opSort": "P0247",
                                "elementClass": "acl_edit_spdApplyDispatcher",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers/{dispatcherId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-3-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyIds,{applyIds}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byYetDisaptchedSpdApply,{dispatcherId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byYetDisaptchedSpdApply,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byNotDispatchedSpdApply,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byNotDispatchedSpdApply,{dispatcherId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/notDispatchedSpdApply",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-2-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/notDispatchedSpdApply/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-2-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-2-8"
                                    }
                                ],
                                "checked": false,
                                "key": "4-3-0-2-0",
                                "id": "P0247"
                            },
                            {
                                "opId": "P0248",
                                "opName": "库房出库调度删除",
                                "opSort": "P0248",
                                "elementClass": "acl_delete_spdApplyDispatcher",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers/byPicking",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byYetDisaptchedSpdApply,{dispatcherId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byYetDisaptchedSpdApply,{dispatcherId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-3-0-3-2"
                                    }
                                ],
                                "checked": false,
                                "key": "4-3-0-3-0",
                                "id": "P0248"
                            },
                            {
                                "opId": "P0250",
                                "opName": "库房出库调度审核",
                                "opSort": "P0236",
                                "elementClass": "acl_reviewEntity_spdApplyDispatcher",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers/{routeId}/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-3-0-4-0"
                                    }
                                ],
                                "checked": false,
                                "key": "4-3-0-4-0",
                                "id": "P0250"
                            },
                            {
                                "opId": "P0198",
                                "opName": "库房出库调度调度",
                                "opSort": "P0198",
                                "elementClass": "acl_confirmSpdApplyDispatcher",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDispatchers/{routeId}/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-3-0-5-0"
                                    }
                                ],
                                "checked": false,
                                "key": "4-3-0-5-0",
                                "id": "P0198"
                            }
                        ],
                        "checked": false,
                        "key": "4-3-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "4-3-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10005-005",
                "menuCode": "10005-005",
                "menuParentId": "10005",
                "icon": null,
                "menuSort": 5,
                "name": "库房补货计划",
                "level": 2,
                "anchor": "#spd/spdApplyReqReplenishments",
                "functions": [
                    {
                        "functionId": "F0058",
                        "functionName": "库房补货计划",
                        "operations": [
                            {
                                "opId": "P0460",
                                "opName": "库房补货计划查看",
                                "opSort": "P0460",
                                "elementClass": "acl_view_spdApplyReqReplenishment",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/SpdApplyReqReplenishments/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-4-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/SpdApplyReqReplenishments",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-4-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqReplenishmentViews/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-4-0-0-2"
                                    }
                                ],
                                "checked": false,
                                "key": "4-4-0-0-0",
                                "id": "P0460"
                            },
                            {
                                "opId": "P0499",
                                "opName": "库房补货计划新增",
                                "opSort": "P0499",
                                "elementClass": "acl_add_spdApplyReqReplenishment",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqReplenishmentViews",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-4-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqReplenishmentViews/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-4-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqReplenishmentViews/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-4-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs/{applyReqId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "4-4-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-4-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-4-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "4-4-0-1-6"
                                    }
                                ],
                                "checked": false,
                                "key": "4-4-0-1-0",
                                "id": "P0499"
                            },
                            {
                                "opId": "P0502",
                                "opName": "库房补货计划提交",
                                "opSort": "P0502",
                                "elementClass": "acl_batchCommited_spdApplyReqReplenishment",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs/{applyReqId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-4-0-2-0"
                                    }
                                ],
                                "checked": false,
                                "key": "4-4-0-2-0",
                                "id": "P0502"
                            },
                            {
                                "opId": "P0501",
                                "opName": "库房补货计划删除",
                                "opSort": "P0501",
                                "elementClass": "acl_batchDelete_spdApplyReqReplenishment",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs/{applyReqId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "4-4-0-3-0"
                                    }
                                ],
                                "checked": false,
                                "key": "4-4-0-3-0",
                                "id": "P0501"
                            },
                            {
                                "opId": "P0500",
                                "opName": "库房补货计划保存",
                                "opSort": "P0500",
                                "elementClass": "acl_update_spdApplyReqReplenishment",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs/{applyReqId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-4-0-4-0"
                                    }
                                ],
                                "checked": false,
                                "key": "4-4-0-4-0",
                                "id": "P0500"
                            },
                            {
                                "opId": "P0503",
                                "opName": "库房补货计划审核",
                                "opSort": "P0503",
                                "elementClass": "acl_batchReview_spdApplyReqReplenishment",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs/{applyReqId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-4-0-5-0"
                                    }
                                ],
                                "checked": false,
                                "key": "4-4-0-5-0",
                                "id": "P0503"
                            }
                        ],
                        "checked": false,
                        "key": "4-4-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "4-4-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10005-006",
                "menuCode": "10005-006",
                "menuParentId": "10005",
                "icon": null,
                "menuSort": 6,
                "name": "申领审核管理",
                "level": 2,
                "anchor": "#spd/spdApplys",
                "functions": [
                    {
                        "functionId": "F0023",
                        "functionName": "申领审核管理",
                        "operations": [
                            {
                                "opId": "P0147",
                                "opName": "申领审核管理查看",
                                "opSort": "P0147",
                                "elementClass": "acl_view_spdApply,acl_view_spdApplyItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/{edsGoodsLotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-0-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-0-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-0-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-0-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes/{routeId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-0-10"
                                    }
                                ],
                                "checked": false,
                                "key": "4-5-0-0-0",
                                "id": "P0147"
                            },
                            {
                                "opId": "P0459",
                                "opName": "申领审核管理批量审核",
                                "opSort": "P0459",
                                "elementClass": "acl_reviewEntities_spdApply",
                                "webApis": [],
                                "checked": false,
                                "key": "4-5-0-1-0",
                                "id": "P0459"
                            },
                            {
                                "opId": "P0148",
                                "opName": "申领审核管理编辑",
                                "opSort": "P0148",
                                "elementClass": "acl_edit_spdApply,acl_edit_spdApplyItem,acl_view_spdApplyItem,acl_add_spdApplyItem,acl_delete_spdApplyItem,acl_update_spdApplyItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/{goodsLotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/{applyItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-5-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-2-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/{applyId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-5-0-2-7"
                                    }
                                ],
                                "checked": false,
                                "key": "4-5-0-2-0",
                                "id": "P0148"
                            },
                            {
                                "opId": "P0149",
                                "opName": "申领审核管理新增",
                                "opSort": "P0149",
                                "elementClass": "acl_add_spdApply,acl_add_spdApplyItem,acl_view_spdApplyItem,acl_edit_spdApplyItem,acl_delete_spdApplyItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "4-5-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-3-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-3-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-3-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byUse/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-3-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-3-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-5-0-3-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "4-5-0-3-10"
                                    }
                                ],
                                "checked": false,
                                "key": "4-5-0-3-0",
                                "id": "P0149"
                            },
                            {
                                "opId": "P0150",
                                "opName": "申领审核管理删除",
                                "opSort": "P0150",
                                "elementClass": "acl_delete_spdApply,acl_delete_spdApplyItem,acl_view_spdApplyItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/{applyItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "4-5-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/{applyId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "4-5-0-4-1"
                                    }
                                ],
                                "checked": false,
                                "key": "4-5-0-4-0",
                                "id": "P0150"
                            },
                            {
                                "opId": "P0152",
                                "opName": "申领审核管理审核",
                                "opSort": "P0152",
                                "elementClass": "acl_reviewEntity_spdApply,acl_confirm_spdApply",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/{applyId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-5-0-5-0"
                                    }
                                ],
                                "checked": false,
                                "key": "4-5-0-5-0",
                                "id": "P0152"
                            },
                            {
                                "opId": "P0153",
                                "opName": "申领审核管理撤回",
                                "opSort": "P0153",
                                "elementClass": "acl_cancelCommit_spdApply",
                                "webApis": [],
                                "checked": false,
                                "key": "4-5-0-6-0",
                                "id": "P0153"
                            },
                            {
                                "opId": "P0657",
                                "opName": "申领审核管理一键完成",
                                "opSort": "P0657",
                                "elementClass": "acl_inStorage_spdApply",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/{applyId}/checkState/byQuick/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-5-0-7-0"
                                    }
                                ],
                                "checked": false,
                                "key": "4-5-0-7-0",
                                "id": "P0657"
                            }
                        ],
                        "checked": false,
                        "key": "4-5-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "4-5-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10005-007",
                "menuCode": "10005-007",
                "menuParentId": "10005",
                "icon": null,
                "menuSort": 7,
                "name": "申领出库确认",
                "level": 2,
                "anchor": "#spd/spdApplyOutStockNotarizes",
                "functions": [
                    {
                        "functionId": "F0052",
                        "functionName": "申领出库确认",
                        "operations": [
                            {
                                "opId": "P0417",
                                "opName": "申领出库确认查看",
                                "opSort": "P0417",
                                "elementClass": "acl_view_spdApplyOutStockNotarize",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byOutStockOperation",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-6-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byOutStockOperation/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-6-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-6-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-6-0-0-3"
                                    }
                                ],
                                "checked": false,
                                "key": "4-6-0-0-0",
                                "id": "P0417"
                            },
                            {
                                "opId": "P0475",
                                "opName": "申领出库确认编辑",
                                "opSort": "P0475",
                                "elementClass": "acl_edit_spdApplyOutStockNotarize",
                                "webApis": [],
                                "checked": false,
                                "key": "4-6-0-1-0",
                                "id": "P0475"
                            },
                            {
                                "opId": "P0509",
                                "opName": "申领出库确认打印",
                                "opSort": "P0509",
                                "elementClass": "acl_print_spdApplyOutStockNotarize",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}/pdf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-6-0-2-0"
                                    }
                                ],
                                "checked": false,
                                "key": "4-6-0-2-0",
                                "id": "P0509"
                            },
                            {
                                "opId": "P0508",
                                "opName": "申领出库确认审核",
                                "opSort": "P0508",
                                "elementClass": "acl_confirm_spdApplyOutStock",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byOutStockOperation/{applyId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-6-0-3-0"
                                    }
                                ],
                                "checked": false,
                                "key": "4-6-0-3-0",
                                "id": "P0508"
                            }
                        ],
                        "checked": false,
                        "key": "4-6-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "4-6-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10005-008",
                "menuCode": "10005-008",
                "menuParentId": "10005",
                "icon": null,
                "menuSort": 8,
                "name": "库房申领记录",
                "level": 2,
                "anchor": "#spd/spdApplyStoreroomHiss",
                "functions": [
                    {
                        "functionId": "F0062",
                        "functionName": "库房申领记录",
                        "operations": [
                            {
                                "opId": "P0476",
                                "opName": "库房申领记录查看",
                                "opSort": "P0476",
                                "elementClass": "acl_view_spdApplyOutStockNotarize",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byStoreroomHis",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-7-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byStoreroomHis/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-7-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-7-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-7-0-0-3"
                                    }
                                ],
                                "checked": false,
                                "key": "4-7-0-0-0",
                                "id": "P0476"
                            }
                        ],
                        "checked": false,
                        "key": "4-7-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "4-7-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10005-009",
                "menuCode": "10005-009",
                "menuParentId": "10005",
                "icon": null,
                "menuSort": 9,
                "name": "定数打包管理",
                "level": 2,
                "anchor": "#spd/spdFixedMakePackings",
                "functions": [
                    {
                        "functionId": "F0021",
                        "functionName": "定数打包管理",
                        "operations": [
                            {
                                "opId": "P0135",
                                "opName": "定数打包管理新增",
                                "opSort": "P0135",
                                "elementClass": "acl_add_spdFixedMake,acl_add_spdFixedMakeItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "4-8-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "4-8-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUMdepot/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUMdepot",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsMakeFixedSelViews/byStockQty/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-0-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsMakeFixedSelViews/byStockQty/{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-0-7"
                                    }
                                ],
                                "checked": false,
                                "key": "4-8-0-0-0",
                                "id": "P0135"
                            },
                            {
                                "opId": "P0137",
                                "opName": "定数打包管理提交",
                                "opSort": "P0137",
                                "elementClass": "acl_commitEntity_spdFixedMake",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes/{makeId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-8-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes/{makeId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-1-1"
                                    }
                                ],
                                "checked": false,
                                "key": "4-8-0-1-0",
                                "id": "P0137"
                            },
                            {
                                "opId": "P0133",
                                "opName": "定数打包管理查看",
                                "opSort": "P0133",
                                "elementClass": "acl_view_spdFixedMake,acl_view_spdFixedMakeItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems/makeId,{makeId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems/makeId,{makeId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-2-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-2-7"
                                    }
                                ],
                                "checked": false,
                                "key": "4-8-0-2-0",
                                "id": "P0133"
                            },
                            {
                                "opId": "P0136",
                                "opName": "定数打包管理删除",
                                "opSort": "P0136",
                                "elementClass": "acl_delete_spdFixedMake,,acl_delete_spdFixedMakeItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes/{makeId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "4-8-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-3-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-3-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems/makeId,{makeId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-3-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems/makeId,{makeId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-3-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-3-8"
                                    }
                                ],
                                "checked": false,
                                "key": "4-8-0-3-0",
                                "id": "P0136"
                            },
                            {
                                "opId": "P0138",
                                "opName": "定数打包管理审核",
                                "opSort": "P0138",
                                "elementClass": "acl_reviewEntity_spdFixedMake",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes/{makeId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-8-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes/{makeId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-4-1"
                                    }
                                ],
                                "checked": false,
                                "key": "4-8-0-4-0",
                                "id": "P0138"
                            },
                            {
                                "opId": "P0139",
                                "opName": "定数打包管理撤回",
                                "opSort": "P0139",
                                "elementClass": "acl_cancelCommit_spdFixedMake",
                                "webApis": [],
                                "checked": false,
                                "key": "4-8-0-5-0",
                                "id": "P0139"
                            },
                            {
                                "opId": "P0134",
                                "opName": "定数打包管理编辑",
                                "opSort": "P0134",
                                "elementClass": "acl_edit_spdFixedMake,acl_add_spdFixedMakeItem,acl_edit_spdFixedMakeItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotStocks/byDepot/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-6-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotStocks/byDepot/{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-6-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "4-8-0-6-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems/makeId,{makeId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-6-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems/makeId,{makeId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-6-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-6-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-6-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-6-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-6-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-6-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-6-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-8-0-6-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "4-8-0-6-12"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems/{makeItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "4-8-0-6-13"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-6-14"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsMakeFixedSelViews/byStockQty/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-6-15"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsMakeFixedSelViews/byStockQty/{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-6-16"
                                    }
                                ],
                                "checked": false,
                                "key": "4-8-0-6-0",
                                "id": "P0134"
                            },
                            {
                                "opId": "P0653",
                                "opName": "定数打包管理打印",
                                "opSort": "P0653",
                                "elementClass": "acl_export_spdFixedMakeItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spd/spdFixedMakeItems/makeId,{makeId}/pdf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "4-8-0-7-0"
                                    }
                                ],
                                "checked": false,
                                "key": "4-8-0-7-0",
                                "id": "P0653"
                            }
                        ],
                        "checked": false,
                        "key": "4-8-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "4-8-0-0-0"
            }
        ],
        "topMenu": true,
        "open": false,
        "checked": false,
        "key": "4-0-0-0-0"
    },
    {
        "systemName": "收货系统",
        "menuId": "10006",
        "menuCode": "10006",
        "menuParentId": "-1",
        "icon": "fa fa-bed",
        "menuSort": 6,
        "name": "科室库存管理",
        "level": 1,
        "anchor": null,
        "functions": null,
        "children": [
            {
                "systemName": "收货系统",
                "menuId": "10006-001",
                "menuCode": "10006-001",
                "menuParentId": "10006",
                "icon": null,
                "menuSort": 1,
                "name": "科室收货确认",
                "level": 2,
                "anchor": "#spd/spdReceiveAbteilungs",
                "functions": [
                    {
                        "functionId": "F0020",
                        "functionName": "科室收货确认",
                        "operations": [
                            {
                                "opId": "P0116",
                                "opName": "科室收货确认查看",
                                "opSort": "P0116",
                                "elementClass": "acl_view_spdReceiveAbteilung",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/{taskId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": true,
                                        "key": "5-0-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/receiveCode,{receiveCode}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byAbteilungCode/code,{code}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byAbteilungChecked",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byAbteilungChecked/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-0-6"
                                    }
                                ],
                                "checked": true,
                                "key": "5-0-0-0-0",
                                "id": "P0116"
                            },
                            {
                                "opId": "P0117",
                                "opName": "科室收货确认保存",
                                "opSort": "P0117",
                                "elementClass": "acl_update_spdReceiveAbteilung",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/{receiveId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/{receiveItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "5-0-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/receiveCode,{receiveCode}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byAbteilungChecked",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byAbteilungChecked/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-1-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/{receiveItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-1-7"
                                    }
                                ],
                                "checked": true,
                                "key": "5-0-0-1-0",
                                "id": "P0117"
                            },
                            {
                                "opId": "P0114",
                                "opName": "科室收货确认确认收货",
                                "opSort": "P0114",
                                "elementClass": "acl_confirm_spdReceiveAbteilung",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/{receiveId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "5-0-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/receiveCode,{receiveCode}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/{receiveId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "5-0-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byAbteilungChecked/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byAbteilungChecked",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-0-0-2-6"
                                    }
                                ],
                                "checked": true,
                                "key": "5-0-0-2-0",
                                "id": "P0114"
                            },
                            {
                                "opId": "P0656",
                                "opName": "科室收货确认收货入库",
                                "opSort": "P0656",
                                "elementClass": "acl_inStorage_spdReceiveAbteilung",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/{receiveId}/checkState/byQuick/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "5-0-0-3-0"
                                    }
                                ],
                                "checked": true,
                                "key": "5-0-0-3-0",
                                "id": "P0656"
                            }
                        ],
                        "checked": true,
                        "key": "5-0-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": true,
                "key": "5-0-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10006-002",
                "menuCode": "10006-002",
                "menuParentId": "10006",
                "icon": null,
                "menuSort": 2,
                "name": "科室收货记录",
                "level": 2,
                "anchor": "#spd/spdReceiveAbteilungHiss",
                "functions": [
                    {
                        "functionId": "F0043",
                        "functionName": "科室收货记录",
                        "operations": [
                            {
                                "opId": "P0315",
                                "opName": "科室收货确认打印",
                                "opSort": "P0315",
                                "elementClass": "acl_export_Receive",
                                "webApis": [],
                                "checked": true,
                                "key": "5-1-0-0-0",
                                "id": "P0315"
                            },
                            {
                                "opId": "P0316",
                                "opName": "科室收货记录同步",
                                "opSort": "P0316",
                                "elementClass": "acl_syn_ReceiveToHis",
                                "webApis": [],
                                "checked": true,
                                "key": "5-1-0-1-0",
                                "id": "P0316"
                            },
                            {
                                "opId": "P0115",
                                "opName": "科室收货记录查看",
                                "opSort": "P0115",
                                "elementClass": "acl_view_spdReceiveAbteilungs,acl_view_spdReceiveItemAbteilung",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/receiveId,{receiveId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-1-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/receiveId,{receiveId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-1-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byAbteilungHis/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-1-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/byAbteilungHis",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-1-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSends/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-1-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-1-0-2-5"
                                    }
                                ],
                                "checked": true,
                                "key": "5-1-0-2-0",
                                "id": "P0115"
                            }
                        ],
                        "checked": true,
                        "key": "5-1-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": true,
                "key": "5-1-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10006-003",
                "menuCode": "10006-003",
                "menuParentId": "10006",
                "icon": null,
                "menuSort": 3,
                "name": "科室请领计划",
                "level": 2,
                "anchor": "#spd/spdApplyReqs",
                "functions": [
                    {
                        "functionId": "F0057",
                        "functionName": "科室请领计划",
                        "operations": [
                            {
                                "opId": "P0458",
                                "opName": "科室请领计划查看",
                                "opSort": "P0458",
                                "elementClass": "acl_view_spdApplyReq",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-2-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-2-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-2-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsByStockSelectViews/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-2-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsByStockSelectViews",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-2-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs/byManual/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-2-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs/byManual",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-2-0-0-6"
                                    }
                                ],
                                "checked": true,
                                "key": "5-2-0-0-0",
                                "id": "P0458"
                            },
                            {
                                "opId": "P0506",
                                "opName": "科室请领计划删除",
                                "opSort": "P0506",
                                "elementClass": "acl_batchDelete_spdApplyReqRep",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs/{applyReqId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "5-2-0-1-0"
                                    }
                                ],
                                "checked": true,
                                "key": "5-2-0-1-0",
                                "id": "P0506"
                            },
                            {
                                "opId": "P0505",
                                "opName": "科室请领计划保存",
                                "opSort": "P0505",
                                "elementClass": "acl_update_spdApplyReq",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs/{applyReqId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "5-2-0-2-0"
                                    }
                                ],
                                "checked": true,
                                "key": "5-2-0-2-0",
                                "id": "P0505"
                            },
                            {
                                "opId": "P0504",
                                "opName": "科室请领计划增加",
                                "opSort": "P0504",
                                "elementClass": "acl_add_spdApplyReq",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqAbteilungViews",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-2-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqAbteilungViews/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-2-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqAbteilungViews/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-2-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "5-2-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs/{applyReqId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "5-2-0-3-4"
                                    }
                                ],
                                "checked": true,
                                "key": "5-2-0-3-0",
                                "id": "P0504"
                            },
                            {
                                "opId": "P0507",
                                "opName": "科室请领计划提交",
                                "opSort": "P0507",
                                "elementClass": "acl_batchCommited_spdApplyReq",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyReqs/{applyReqId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "5-2-0-4-0"
                                    }
                                ],
                                "checked": true,
                                "key": "5-2-0-4-0",
                                "id": "P0507"
                            }
                        ],
                        "checked": true,
                        "key": "5-2-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": true,
                "key": "5-2-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10006-004",
                "menuCode": "10006-004",
                "menuParentId": "10006",
                "icon": null,
                "menuSort": 4,
                "name": "申领入库确认",
                "level": 2,
                "anchor": "#spd/spdApplyChecks",
                "functions": [
                    {
                        "functionId": "F0024",
                        "functionName": "申领入库确认",
                        "operations": [
                            {
                                "opId": "P0154",
                                "opName": "申领入库确认查看",
                                "opSort": "P0154",
                                "elementClass": "acl_view_spdApplyCheck",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-3-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-3-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/byCommited/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-3-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/byCommited",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-3-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-3-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-3-0-0-5"
                                    }
                                ],
                                "checked": true,
                                "key": "5-3-0-0-0",
                                "id": "P0154"
                            },
                            {
                                "opId": "P0155",
                                "opName": "申领入库确认编辑",
                                "opSort": "P0155",
                                "elementClass": null,
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/byCommited/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-3-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/byCommited",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-3-0-1-1"
                                    }
                                ],
                                "checked": true,
                                "key": "5-3-0-1-0",
                                "id": "P0155"
                            },
                            {
                                "opId": "P0159",
                                "opName": "申领入库确认审核",
                                "opSort": "P0159",
                                "elementClass": "acl_confirm_spdApplyCheck",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/{applyId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "5-3-0-2-0"
                                    }
                                ],
                                "checked": true,
                                "key": "5-3-0-2-0",
                                "id": "P0159"
                            },
                            {
                                "opId": "P0510",
                                "opName": "申领入库确认打印",
                                "opSort": "P0510",
                                "elementClass": "acl_print_spdApplyCheck",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}/pdf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-3-0-3-0"
                                    }
                                ],
                                "checked": true,
                                "key": "5-3-0-3-0",
                                "id": "P0510"
                            }
                        ],
                        "checked": true,
                        "key": "5-3-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": true,
                "key": "5-3-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10006-005",
                "menuCode": "10006-005",
                "menuParentId": "10006",
                "icon": null,
                "menuSort": 5,
                "name": "科室申领记录",
                "level": 2,
                "anchor": "#spd/spdApplyAbteilungHiss",
                "functions": [
                    {
                        "functionId": "F0062",
                        "functionName": "科室申领记录",
                        "operations": [
                            {
                                "opId": "P0477",
                                "opName": "科室申领记录查看",
                                "opSort": "P0477",
                                "elementClass": null,
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-4-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-4-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/byAbteilungHis",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-4-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/byAbteilungHis/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-4-0-0-3"
                                    }
                                ],
                                "checked": true,
                                "key": "5-4-0-0-0",
                                "id": "P0477"
                            },
                            {
                                "opId": "P0512",
                                "opName": "科室申领记录打印",
                                "opSort": "P0512",
                                "elementClass": "acl_export_spdApplyItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}/pdf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "5-4-0-1-0"
                                    }
                                ],
                                "checked": true,
                                "key": "5-4-0-1-0",
                                "id": "P0512"
                            }
                        ],
                        "checked": true,
                        "key": "5-4-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": true,
                "key": "5-4-0-0-0"
            }
        ],
        "topMenu": true,
        "open": true,
        "checked": true,
        "key": "5-0-0-0-0"
    },
    {
        "systemName": "收货系统",
        "menuId": "10007",
        "menuCode": "10007",
        "menuParentId": "-1",
        "icon": "fa-cube",
        "menuSort": 7,
        "name": "仓库业务管理",
        "level": 1,
        "anchor": null,
        "functions": null,
        "children": [
            {
                "systemName": "收货系统",
                "menuId": "10007-001",
                "menuCode": "10007-001",
                "menuParentId": "10007",
                "icon": null,
                "menuSort": 1,
                "name": "仓库帐页查询",
                "level": 2,
                "anchor": "#spd/spdDepotCardAbteilungs",
                "functions": [
                    {
                        "functionId": "F0051",
                        "functionName": "仓库帐页查询",
                        "operations": [
                            {
                                "opId": "P0408",
                                "opName": "仓库帐页查询查看",
                                "opSort": "P0408",
                                "elementClass": "acl_view_spdDepotCardAbteilung",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/SpdDepotCardByStockTotalViews/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-0-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byAbteilung/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-0-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byAbteilung",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-0-0-0-2"
                                    }
                                ],
                                "checked": false,
                                "key": "6-0-0-0-0",
                                "id": "P0408"
                            }
                        ],
                        "checked": false,
                        "key": "6-0-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "6-0-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10007-002",
                "menuCode": "10007-002",
                "menuParentId": "10007",
                "icon": null,
                "menuSort": 2,
                "name": "仓库库存查询",
                "level": 2,
                "anchor": "#spd/spdMyDepotStocks",
                "functions": [
                    {
                        "functionId": "F0030",
                        "functionName": "仓库库存查询",
                        "operations": [
                            {
                                "opId": "P0196",
                                "opName": "仓库库存查询查看",
                                "opSort": "P0196",
                                "elementClass": "acl_view_spdMyDepotStocks",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotStocks/byMyStock/count",
                                        "serviceMethod": "GEt",
                                        "checked": false,
                                        "key": "6-1-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotStocks/byMyStock",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-1-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-1-0-0-2"
                                    }
                                ],
                                "checked": false,
                                "key": "6-1-0-0-0",
                                "id": "P0196"
                            }
                        ],
                        "checked": false,
                        "key": "6-1-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "6-1-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10007-003",
                "menuCode": "10007-003",
                "menuParentId": "10007",
                "icon": null,
                "menuSort": 3,
                "name": "仓库退货管理",
                "level": 2,
                "anchor": "#spd/spdApplyRefunds",
                "functions": [
                    {
                        "functionId": "F0071",
                        "functionName": "仓库退货管理",
                        "operations": [
                            {
                                "opId": "P0632",
                                "opName": "仓库退货管理查看",
                                "opSort": "P0632",
                                "elementClass": "acl_view_spdApplyRefund,acl_view_spdApplyRefundItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byRefund/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byRefund",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/{applyItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-0-5"
                                    }
                                ],
                                "checked": false,
                                "key": "6-2-0-0-0",
                                "id": "P0632"
                            },
                            {
                                "opId": "P0633",
                                "opName": "仓库退货管理编辑",
                                "opSort": "P0633",
                                "elementClass": "acl_edit_spdApplyRefund,acl_edit_spdApplyRefundItem,acl_view_spdApplyRefundItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byRefund/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byRefund",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/{applyItemId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/{applyItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-2-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/{applyId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-2-0-1-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "6-2-0-1-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/{applyItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "6-2-0-1-8"
                                    }
                                ],
                                "checked": false,
                                "key": "6-2-0-1-0",
                                "id": "P0633"
                            },
                            {
                                "opId": "P0634",
                                "opName": "仓库退货管理审核",
                                "opSort": "P0634",
                                "elementClass": "acl_reviewEntity_spdApplyRefund,acl_view_spdApplyRefund,acl_view_spdApplyRefundItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byRefund/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byRefund",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/{applyId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-2-0-2-2"
                                    }
                                ],
                                "checked": false,
                                "key": "6-2-0-2-0",
                                "id": "P0634"
                            },
                            {
                                "opId": "P0635",
                                "opName": "仓库退货管理增加",
                                "opSort": "P0635",
                                "elementClass": "acl_add_spdApplyRefund,acl_add_spdApplyRefundItem,acl_view_spdApplyRefundItem,acl_edit_spdApplyRefundItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "6-2-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "6-2-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/{applyItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "6-2-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/{applyItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-2-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byAllot/{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-3-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byAllot/{applyId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-3-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-3-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-3-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-3-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-3-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-3-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-3-11"
                                    },
                                    {
                                        "serviceUrl": " /yard/spd/spdGoodsLotStockViews/{id}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-2-0-3-12"
                                    }
                                ],
                                "checked": false,
                                "key": "6-2-0-3-0",
                                "id": "P0635"
                            },
                            {
                                "opId": "P0636",
                                "opName": "仓库退货管理删除",
                                "opSort": "P0636",
                                "elementClass": "acl_delete_spdApplyRefund",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/{applyId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "6-2-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/{applyItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "6-2-0-4-1"
                                    }
                                ],
                                "checked": false,
                                "key": "6-2-0-4-0",
                                "id": "P0636"
                            },
                            {
                                "opId": "P0637",
                                "opName": "仓库退货管理批量审核",
                                "opSort": "P0637",
                                "elementClass": "acl_reviewEntities_spdApplyRefund",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/{applyId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-2-0-5-0"
                                    }
                                ],
                                "checked": false,
                                "key": "6-2-0-5-0",
                                "id": "P0637"
                            }
                        ],
                        "checked": false,
                        "key": "6-2-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "6-2-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10007-004",
                "menuCode": "10007-004",
                "menuParentId": "10007",
                "icon": null,
                "menuSort": 4,
                "name": "退货入库确认",
                "level": 2,
                "anchor": "#spd/spdApplyRefundInStockNotarizes",
                "functions": [
                    {
                        "functionId": "F0072",
                        "functionName": "退货入库确认",
                        "operations": [
                            {
                                "opId": "P0638",
                                "opName": "退货入库确认确认",
                                "opSort": "P0638",
                                "elementClass": "acl_confirm_spdApplyRefundInStock",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/{applyId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-3-0-0-0"
                                    }
                                ],
                                "checked": false,
                                "key": "6-3-0-0-0",
                                "id": "P0638"
                            },
                            {
                                "opId": "P0639",
                                "opName": "退货入库确认查看",
                                "opSort": "P0639",
                                "elementClass": "acl_view_spdApplyRefundInStock",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/byRefund",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-3-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/byRefund/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-3-0-1-1"
                                    }
                                ],
                                "checked": false,
                                "key": "6-3-0-1-0",
                                "id": "P0639"
                            }
                        ],
                        "checked": false,
                        "key": "6-3-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "6-3-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10007-005",
                "menuCode": "10007-005",
                "menuParentId": "10007",
                "icon": null,
                "menuSort": 5,
                "name": "仓库退货记录",
                "level": 2,
                "anchor": "#spd/spdApplyRefundHiss",
                "functions": [
                    {
                        "functionId": "F0073",
                        "functionName": "仓库退货记录",
                        "operations": [
                            {
                                "opId": "P0640",
                                "opName": "仓库退货记录查看",
                                "opSort": "P0640",
                                "elementClass": "acl_view_spdApplyRefundInStockNotarize",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/byRefundHis",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-4-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/byRefundHis/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-4-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-4-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-4-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/{id}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-4-0-0-4"
                                    }
                                ],
                                "checked": false,
                                "key": "6-4-0-0-0",
                                "id": "P0640"
                            }
                        ],
                        "checked": false,
                        "key": "6-4-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "6-4-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10007-006",
                "menuCode": "10007-006",
                "menuParentId": "10007",
                "icon": null,
                "menuSort": 6,
                "name": "仓库调拨管理",
                "level": 2,
                "anchor": "#spd/spdApplyAllots",
                "functions": [
                    {
                        "functionId": "F0037",
                        "functionName": "仓库调拨管理",
                        "operations": [
                            {
                                "opId": "P0096",
                                "opName": "仓库调拨管理查看",
                                "opSort": "P0096",
                                "elementClass": "acl_view_spdApplyAllot,acl_view_spdApplyAllotItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byAllot",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byAllot/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-0-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-0-7"
                                    },
                                    {
                                        "serviceUrl": " /yard/spd/spdGoodsLotStockViews/{id}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-0-8"
                                    }
                                ],
                                "checked": false,
                                "key": "6-5-0-0-0",
                                "id": "P0096"
                            },
                            {
                                "opId": "P0484",
                                "opName": "仓库调拨管理审核",
                                "opSort": "P0484",
                                "elementClass": "acl_reviewEntity_spdApplyAllot",
                                "webApis": [
                                    {
                                        "serviceUrl": " /yard/spd/spdApplys/{applyId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-5-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-1-1"
                                    }
                                ],
                                "checked": false,
                                "key": "6-5-0-1-0",
                                "id": "P0484"
                            },
                            {
                                "opId": "P0483",
                                "opName": "仓库调拨管理增加",
                                "opSort": "P0483",
                                "elementClass": "acl_add_spdApplyAllot,acl_add_spdApplyAllotItem,acl_view_spdApplyAllotItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "6-5-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "6-5-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byAllot/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/{applyItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "6-5-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/{applyItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-5-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byAllot/{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byAllot/{applyId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-2-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-2-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-2-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-2-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-2-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-2-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-2-12"
                                    },
                                    {
                                        "serviceUrl": " /yard/spd/spdGoodsLotStockViews/{id}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-2-13"
                                    }
                                ],
                                "checked": false,
                                "key": "6-5-0-2-0",
                                "id": "P0483"
                            },
                            {
                                "opId": "P0485",
                                "opName": "仓库调拨管理批量审核",
                                "opSort": "P0485",
                                "elementClass": "acl_reviewEntities_spdApplyAllot",
                                "webApis": [
                                    {
                                        "serviceUrl": " /yard/spd/spdApplys/{applyId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-5-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-3-1"
                                    }
                                ],
                                "checked": false,
                                "key": "6-5-0-3-0",
                                "id": "P0485"
                            },
                            {
                                "opId": "P0486",
                                "opName": "仓库调拨管理删除",
                                "opSort": "P0486",
                                "elementClass": "acl_delete_spdApplyAllot,acl_delete_spdApplyAllotItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/{applyId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "6-5-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/{applyItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "6-5-0-4-1"
                                    }
                                ],
                                "checked": false,
                                "key": "6-5-0-4-0",
                                "id": "P0486"
                            },
                            {
                                "opId": "P0487",
                                "opName": "仓库调拨管理批量提交",
                                "opSort": "P0487",
                                "elementClass": "acl_commitEntities_spdApplyAllot,acl_view_spdApplyAllot,acl_view_spdApplyAllotItem",
                                "webApis": [],
                                "checked": false,
                                "key": "6-5-0-5-0",
                                "id": "P0487"
                            },
                            {
                                "opId": "P0488",
                                "opName": "仓库调拨管理编辑",
                                "opSort": "P0488",
                                "elementClass": "acl_edit_spdApplyAllot,acl_add_spdApplyAllotItem,acl_edit_spdApplyAllotItem,acl_view_spdApplyAllotItem,,acl_delete_spdApplyAllotItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/{applyId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-5-0-6-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "6-5-0-6-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplys/byAllot/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-6-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/{applyItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "6-5-0-6-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/{applyItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-5-0-6-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byAllot/{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-6-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byAllot/{applyId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-6-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-6-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-6-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-6-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-6-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-6-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-6-12"
                                    },
                                    {
                                        "serviceUrl": " /yard/spd/spdGoodsLotStockViews/{id}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-6-13"
                                    }
                                ],
                                "checked": false,
                                "key": "6-5-0-6-0",
                                "id": "P0488"
                            },
                            {
                                "opId": "P0015",
                                "opName": "His仓库调拨导入",
                                "opSort": "P0489",
                                "elementClass": "acl_import_ifHisAllot",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ifHisAllot/import",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-5-0-7-0"
                                    }
                                ],
                                "checked": false,
                                "key": "6-5-0-7-0",
                                "id": "P0015"
                            }
                        ],
                        "checked": false,
                        "key": "6-5-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "6-5-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10007-007",
                "menuCode": "10007-007",
                "menuParentId": "10007",
                "icon": null,
                "menuSort": 7,
                "name": "调拨入库确认",
                "level": 2,
                "anchor": "#spd/spdApplyAllotInStockNotarizes",
                "functions": [
                    {
                        "functionId": "F0046",
                        "functionName": "调拨入库确认",
                        "operations": [
                            {
                                "opId": "P0112",
                                "opName": "调拨入库确认查看",
                                "opSort": "P0112",
                                "elementClass": "acl_view_spdApplyAllotInStock",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-6-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-6-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-6-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/byAllot",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-6-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/byAllot/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-6-0-0-4"
                                    }
                                ],
                                "checked": false,
                                "key": "6-6-0-0-0",
                                "id": "P0112"
                            },
                            {
                                "opId": "P0113",
                                "opName": "调拨入库确认确认",
                                "opSort": "P0113",
                                "elementClass": "acl_confirm_spdApplyAllotInStock",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/{applyId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-6-0-1-0"
                                    }
                                ],
                                "checked": false,
                                "key": "6-6-0-1-0",
                                "id": "P0113"
                            }
                        ],
                        "checked": false,
                        "key": "6-6-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "6-6-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10007-008",
                "menuCode": "10007-008",
                "menuParentId": "10007",
                "icon": null,
                "menuSort": 8,
                "name": "仓库调拨记录",
                "level": 2,
                "anchor": "#spd/spdApplyAllotHiss",
                "functions": [
                    {
                        "functionId": "F0064",
                        "functionName": "仓库调拨记录",
                        "operations": [
                            {
                                "opId": "P0511",
                                "opName": "仓库调拨记录查看",
                                "opSort": "P0511",
                                "elementClass": "acl_view_spdApplyAllotHis",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/byApplyAllotHis",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-7-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyChecks/byApplyAllotHis/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-7-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-7-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdApplyItems/applyId,{applyId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-7-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/{id}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-7-0-0-4"
                                    }
                                ],
                                "checked": false,
                                "key": "6-7-0-0-0",
                                "id": "P0511"
                            }
                        ],
                        "checked": false,
                        "key": "6-7-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "6-7-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10007-009",
                "menuCode": "10007-009",
                "menuParentId": "10007",
                "icon": null,
                "menuSort": 9,
                "name": "使用消耗管理",
                "level": 2,
                "anchor": "#spd/spdUseds",
                "functions": [
                    {
                        "functionId": "F0025",
                        "functionName": "使用消耗管理",
                        "operations": [
                            {
                                "opId": "P0161",
                                "opName": "使用消耗管理查看",
                                "opSort": "P0161",
                                "elementClass": "acl_view_spdUsed,acl_view_spdUsedItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdUseds",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUseds/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems/usedId,{usedId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems/usedId,{usedId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes/{usedType}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byDepot/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byDepot/{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-0-6"
                                    }
                                ],
                                "checked": false,
                                "key": "6-8-0-0-0",
                                "id": "P0161"
                            },
                            {
                                "opId": "P0162",
                                "opName": "使用消耗管理编辑",
                                "opSort": "P0162",
                                "elementClass": "acl_edit_spdUsed,acl_delete_spdUsedItem,acl_edit_spdUsedItem,acl_view_spdUsedItem,acl_add_spdUsedItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems/usedId,{usedId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems/usedId,{usedId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUseds/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUseds",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUseds/{usedId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-8-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems/{usedItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-8-0-1-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems/{usedItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "6-8-0-1-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "6-8-0-1-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/{usedId}/ifHisUseds",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-1-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/{usedId}/ifHisUseds/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-1-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes/{usedType}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-1-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byDepot/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-1-12"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byDepot/{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-1-13"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/{id}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-1-14"
                                    }
                                ],
                                "checked": false,
                                "key": "6-8-0-1-0",
                                "id": "P0162"
                            },
                            {
                                "opId": "P0163",
                                "opName": "使用消耗管理增加",
                                "opSort": "P0163",
                                "elementClass": "acl_add_spdUsed,acl_add_spdUsedItem,acl_view_spdUsedItem,acl_edit_spdUsedItem,acl_delete_spdUsedItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/PcsDepts/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUse/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUseds",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "6-8-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "6-8-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems/{usedItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-8-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems/{usedItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "6-8-0-2-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUseds",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUseds/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems/usedId,{usedId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems/usedId,{usedId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byUse/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-12"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-13"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-14"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-15"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-16"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-17"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/byUse/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-18"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byDepot/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-19"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byDepot/{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-20"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/{id}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-8-0-2-21"
                                    }
                                ],
                                "checked": false,
                                "key": "6-8-0-2-0",
                                "id": "P0163"
                            },
                            {
                                "opId": "P0164",
                                "opName": "使用消耗管理删除",
                                "opSort": "P0164",
                                "elementClass": "acl_delete_spdUsed,acl_delete_spdUsedItem,acl_view_spdUsedItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdUseds/{usedId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "6-8-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems/{usedItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "6-8-0-3-1"
                                    }
                                ],
                                "checked": false,
                                "key": "6-8-0-3-0",
                                "id": "P0164"
                            },
                            {
                                "opId": "P0165",
                                "opName": "使用消耗管理提交",
                                "opSort": "P0165",
                                "elementClass": "acl_commitEntity_spdUsed",
                                "webApis": [],
                                "checked": false,
                                "key": "6-8-0-4-0",
                                "id": "P0165"
                            }
                        ],
                        "checked": false,
                        "key": "6-8-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "6-8-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10007-010",
                "menuCode": "10007-010",
                "menuParentId": "10007",
                "icon": null,
                "menuSort": 10,
                "name": "使用消耗确认",
                "level": 2,
                "anchor": "#spd/spdUsedChecks",
                "functions": [
                    {
                        "functionId": "F0027",
                        "functionName": "使用消耗确认",
                        "operations": [
                            {
                                "opId": "P0175",
                                "opName": "使用消耗确认查看",
                                "opSort": "P0175",
                                "elementClass": "acl_view_spdUsed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdUseds/byCheck",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-9-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUseds/byCheck/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-9-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems/usedId,{usedId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-9-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems/usedId,{usedId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-9-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes/{usedType}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-9-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byDepot/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-9-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byDepot/{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-9-0-0-6"
                                    }
                                ],
                                "checked": false,
                                "key": "6-9-0-0-0",
                                "id": "P0175"
                            },
                            {
                                "opId": "P0176",
                                "opName": "使用消耗确认编辑",
                                "opSort": "P0176",
                                "elementClass": "acl_edit_spdUsed",
                                "webApis": [],
                                "checked": false,
                                "key": "6-9-0-1-0",
                                "id": "P0176"
                            },
                            {
                                "opId": "P0180",
                                "opName": "使用消耗确认审核",
                                "opSort": "P0180",
                                "elementClass": "acl_reviewEntity_spdUsedCheck",
                                "webApis": [
                                    {
                                        "serviceUrl": " /yard/spd/spdUseds/{usedId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-9-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUseds/{usedId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-9-0-2-1"
                                    }
                                ],
                                "checked": false,
                                "key": "6-9-0-2-0",
                                "id": "P0180"
                            }
                        ],
                        "checked": false,
                        "key": "6-9-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "6-9-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10007-011",
                "menuCode": "10007-011",
                "menuParentId": "10007",
                "icon": null,
                "menuSort": 11,
                "name": "使用消耗记录",
                "level": 2,
                "anchor": "#spd/spdUsedHiss",
                "functions": [
                    {
                        "functionId": "F0026",
                        "functionName": "使用消耗记录",
                        "operations": [
                            {
                                "opId": "P0168",
                                "opName": "使用消耗记录查看",
                                "opSort": "P0168",
                                "elementClass": "acl_view_spdUsedCheck,acl_view_spdUsedHisItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdUseds/byHis",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-10-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUseds/byHis/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-10-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems/usedId,{usedId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-10-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems/usedId,{usedId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-10-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes/{usedType}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-10-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byDepot/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-10-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byDepot/{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "6-10-0-0-6"
                                    }
                                ],
                                "checked": false,
                                "key": "6-10-0-0-0",
                                "id": "P0168"
                            }
                        ],
                        "checked": false,
                        "key": "6-10-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "6-10-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10007-012",
                "menuCode": "10007-012",
                "menuParentId": "10007",
                "icon": null,
                "menuSort": 12,
                "name": "收货信息录入",
                "level": 2,
                "anchor": "#spd/spdReceiveEnterIngs",
                "functions": [
                    {
                        "functionId": "F0026",
                        "functionName": "收货信息录入",
                        "operations": [
                            {
                                "opId": "P0665",
                                "opName": "收货信息录入查看",
                                "opSort": "P0665",
                                "elementClass": "acl_view_spdReceiveEnterIng,acl_view_spdReceiveEnterIngItem",
                                "webApis": [],
                                "checked": false,
                                "key": "6-11-0-0-0",
                                "id": "P0665"
                            },
                            {
                                "opId": "P0665",
                                "opName": "收货信息录入新增",
                                "opSort": "P0665",
                                "elementClass": "acl_add_spdReceiveEnterIng,acl_add_spdReceiveEnterIngItem,acl_view_spdReceiveEnterIngItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "6-11-0-1-0"
                                    }
                                ],
                                "checked": false,
                                "key": "6-11-0-1-0",
                                "id": "P0665"
                            },
                            {
                                "opId": "P0665",
                                "opName": "收货信息录入编辑",
                                "opSort": "P0665",
                                "elementClass": "acl_edit_spdReceiveEnterIng,acl_view_spdReceiveEnterIngItem,acl_add_spdReceiveEnterIngItem,acl_delete_spdReceiveEnterIngItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/{receiveId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-11-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "6-11-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/{receiveItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-11-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceiveItems/{receiveItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "6-11-0-2-3"
                                    }
                                ],
                                "checked": false,
                                "key": "6-11-0-2-0",
                                "id": "P0665"
                            },
                            {
                                "opId": "P0665",
                                "opName": "收货信息录入删除",
                                "opSort": "P0665",
                                "elementClass": "acl_delete_spdReceiveEnterIng",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/{receiveId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "6-11-0-3-0"
                                    }
                                ],
                                "checked": false,
                                "key": "6-11-0-3-0",
                                "id": "P0665"
                            },
                            {
                                "opId": "P0665",
                                "opName": "收货信息录入提交",
                                "opSort": "P0665",
                                "elementClass": "acl_commitEntity_spdReceiveEnterIng",
                                "webApis": [],
                                "checked": false,
                                "key": "6-11-0-4-0",
                                "id": "P0665"
                            },
                            {
                                "opId": "P0665",
                                "opName": "收货信息录入撤回",
                                "opSort": "P0665",
                                "elementClass": "acl_cancelCommit_spdReceiveEnterIng",
                                "webApis": [],
                                "checked": false,
                                "key": "6-11-0-5-0",
                                "id": "P0665"
                            },
                            {
                                "opId": "P0665",
                                "opName": "收货信息录入审核",
                                "opSort": "P0665",
                                "elementClass": "acl_reviewEntity_spdReceiveEnterIng",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives/{receiveId}/checkState/byQuick/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "6-11-0-6-0"
                                    }
                                ],
                                "checked": false,
                                "key": "6-11-0-6-0",
                                "id": "P0665"
                            }
                        ],
                        "checked": false,
                        "key": "6-11-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "6-11-0-0-0"
            }
        ],
        "topMenu": true,
        "open": false,
        "checked": false,
        "key": "6-0-0-0-0"
    },
    {
        "systemName": "收货系统",
        "menuId": "10008",
        "menuCode": "10008",
        "menuParentId": "-1",
        "icon": "fa-cubes",
        "menuSort": 8,
        "name": "仓库作业管理",
        "level": 1,
        "anchor": null,
        "functions": null,
        "children": [
            {
                "systemName": "收货系统",
                "menuId": "10008-001",
                "menuCode": "10008-001",
                "menuParentId": "10008",
                "icon": null,
                "menuSort": 1,
                "name": "收货上架作业",
                "level": 2,
                "anchor": "#spd/spdTasks",
                "functions": [
                    {
                        "functionId": "F0041",
                        "functionName": "收货上架作业",
                        "operations": [
                            {
                                "opId": "P0298",
                                "opName": "收货上架作业查看",
                                "opSort": "P0298",
                                "elementClass": null,
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-0-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-0-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/byPutaway",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-0-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/byPutaway/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-0-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskItems/taskId,{taskId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-0-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-0-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-0-0-0-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-0-0-0-7"
                                    }
                                ],
                                "checked": false,
                                "key": "7-0-0-0-0",
                                "id": "P0298"
                            },
                            {
                                "opId": "P0299",
                                "opName": "收货上架作业确认",
                                "opSort": "P0299",
                                "elementClass": "acl_confirm_spdTask",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/{taskId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-0-0-1-0"
                                    }
                                ],
                                "checked": false,
                                "key": "7-0-0-1-0",
                                "id": "P0299"
                            },
                            {
                                "opId": "P0300",
                                "opName": "收货上架作业保存",
                                "opSort": "P0300",
                                "elementClass": "acl_update_spdTask",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskItems/{taskItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-0-0-2-0"
                                    }
                                ],
                                "checked": false,
                                "key": "7-0-0-2-0",
                                "id": "P0300"
                            }
                        ],
                        "checked": false,
                        "key": "7-0-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "7-0-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10008-002",
                "menuCode": "10008-002",
                "menuParentId": "10008",
                "icon": null,
                "menuSort": 2,
                "name": "拣货下架作业",
                "level": 2,
                "anchor": "#spd/spdTaskOuts",
                "functions": [
                    {
                        "functionId": "F0042",
                        "functionName": "拣货下架作业",
                        "operations": [
                            {
                                "opId": "P0301",
                                "opName": "拣货下架作业查看",
                                "opSort": "P0301",
                                "elementClass": null,
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/byOffShelf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-1-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/byOffShelf/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-1-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-1-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskItems",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-1-0-0-3"
                                    }
                                ],
                                "checked": false,
                                "key": "7-1-0-0-0",
                                "id": "P0301"
                            },
                            {
                                "opId": "P0302",
                                "opName": "拣货下架作业确认",
                                "opSort": "P0302",
                                "elementClass": "acl_confirm_spdTaskOut",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/{taskId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-1-0-1-0"
                                    }
                                ],
                                "checked": false,
                                "key": "7-1-0-1-0",
                                "id": "P0302"
                            },
                            {
                                "opId": "P0303",
                                "opName": "拣货下架作业保存",
                                "opSort": "P0303",
                                "elementClass": "acl_update_spdTaskOut",
                                "webApis": [],
                                "checked": false,
                                "key": "7-1-0-2-0",
                                "id": "P0303"
                            }
                        ],
                        "checked": false,
                        "key": "7-1-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "7-1-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10008-003",
                "menuCode": "10008-003",
                "menuParentId": "10008",
                "icon": null,
                "menuSort": 3,
                "name": "仓库作业记录",
                "level": 2,
                "anchor": "#spd/spdTaskHiss",
                "functions": [
                    {
                        "functionId": "F0053",
                        "functionName": "仓库作业记录",
                        "operations": [
                            {
                                "opId": "P0308",
                                "opName": "仓库作业记录查看",
                                "opSort": "P0308",
                                "elementClass": null,
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/byHis",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-2-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/byHis/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-2-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-2-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepts/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-2-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskItems/taskId,{taskId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-2-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-2-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-2-0-0-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-2-0-0-7"
                                    }
                                ],
                                "checked": false,
                                "key": "7-2-0-0-0",
                                "id": "P0308"
                            },
                            {
                                "opId": "P0498",
                                "opName": "仓库作业记录打印",
                                "opSort": "P0498",
                                "elementClass": "acl_exportPdf_spdTaskHis",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskItems/taskId,{taskId}/pdf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-2-0-1-0"
                                    }
                                ],
                                "checked": false,
                                "key": "7-2-0-1-0",
                                "id": "P0498"
                            }
                        ],
                        "checked": false,
                        "key": "7-2-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "7-2-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10008-004",
                "menuCode": "10008-004",
                "menuParentId": "10008",
                "icon": null,
                "menuSort": 4,
                "name": "库存盘点管理",
                "level": 2,
                "anchor": "#spd/spdInventory",
                "functions": [
                    {
                        "functionId": "F0047",
                        "functionName": "库存盘点管理",
                        "operations": [
                            {
                                "opId": "P0403",
                                "opName": "库存盘点管理删除",
                                "opSort": "P0403",
                                "elementClass": "acl_delete_spdInventory",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdInventorys/{inventoryId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "7-3-0-0-0"
                                    }
                                ],
                                "checked": false,
                                "key": "7-3-0-0-0",
                                "id": "P0403"
                            },
                            {
                                "opId": "P0447",
                                "opName": "库存盘点管理撤回",
                                "opSort": "P0447",
                                "elementClass": "acl_cancelCommit_spdInventory",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventorys/{inventoryId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-1-1"
                                    }
                                ],
                                "checked": false,
                                "key": "7-3-0-1-0",
                                "id": "P0447"
                            },
                            {
                                "opId": "P0416",
                                "opName": "库存盘点管理打印",
                                "opSort": "P0416",
                                "elementClass": "acl_print_Inventory,acl_view_spdInventory",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryItems/inventoryId,{inventoryId}/pdf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-2-0"
                                    }
                                ],
                                "checked": false,
                                "key": "7-3-0-2-0",
                                "id": "P0416"
                            },
                            {
                                "opId": "P0413",
                                "opName": "库存盘点管理提交",
                                "opSort": "P0413",
                                "elementClass": "acl_commitEntity_spdInventory",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventorys/{inventoryId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-3-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventorys/{inventoryId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-3-2"
                                    }
                                ],
                                "checked": false,
                                "key": "7-3-0-3-0",
                                "id": "P0413"
                            },
                            {
                                "opId": "P0414",
                                "opName": "库存盘点管理审核",
                                "opSort": "P0414",
                                "elementClass": "acl_reviewEntity_spdInventory",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdInventorys/{inventoryId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-3-0-4-0"
                                    }
                                ],
                                "checked": false,
                                "key": "7-3-0-4-0",
                                "id": "P0414"
                            },
                            {
                                "opId": "P0400",
                                "opName": "库存盘点管理查看",
                                "opSort": "P0400",
                                "elementClass": "acl_view_spdInventory,acl_view_spdInventoryItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-5-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-5-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-5-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-5-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-5-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryItems/inventoryId,{inventoryId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-5-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventorys/byUser/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-5-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventorys/byUser",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-5-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/depotId,{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-5-8"
                                    }
                                ],
                                "checked": false,
                                "key": "7-3-0-5-0",
                                "id": "P0400"
                            },
                            {
                                "opId": "P0401",
                                "opName": "库存盘点管理增加",
                                "opSort": "P0401",
                                "elementClass": "acl_add_spdInventory,acl_add_spdInventoryItem,acl_edit_spdInventoryItem,acl_view_spdInventoryItem,acl_delete_spdInventoryItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdInventorys/byUser/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-6-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventorys/byUser",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-6-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryItems/inventoryId,{inventoryId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-6-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUMdepot/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-6-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUMdepot",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-6-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/depotId,{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-6-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotInventorys",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "7-3-0-6-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventorys",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-6-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventorys",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "7-3-0-6-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-6-9"
                                    }
                                ],
                                "checked": false,
                                "key": "7-3-0-6-0",
                                "id": "P0401"
                            },
                            {
                                "opId": "P0402",
                                "opName": "库存盘点管理编辑",
                                "opSort": "P0402",
                                "elementClass": "acl_edit_spdInventory,acl_view_spdInventory,acl_view_spdInventoryItem,acl_save_Inventory",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdInventorys/byUser/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-7-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-7-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotInventorys/byUser",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-7-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-7-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryItems/inventoryId,{inventoryId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-3-0-7-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryItems/{inventoryItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-3-0-7-5"
                                    }
                                ],
                                "checked": false,
                                "key": "7-3-0-7-0",
                                "id": "P0402"
                            },
                            {
                                "opId": "P0660",
                                "opName": "库存盘点管理保存",
                                "opSort": "P0660",
                                "elementClass": "acl_save_Inventory",
                                "webApis": [],
                                "checked": false,
                                "key": "7-3-0-8-0",
                                "id": "P0660"
                            }
                        ],
                        "checked": false,
                        "key": "7-3-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "7-3-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10008-005",
                "menuCode": "10008-005",
                "menuParentId": "10008",
                "icon": null,
                "menuSort": 5,
                "name": "报损报溢申请",
                "level": 2,
                "anchor": "#spd/spdPlApplys",
                "functions": [
                    {
                        "functionId": "F0020",
                        "functionName": "报损报溢申请",
                        "operations": [
                            {
                                "opId": "P0312",
                                "opName": "报损报溢申请提交",
                                "opSort": "P0312",
                                "elementClass": "acl_commitEntity_spdPlApply",
                                "webApis": [],
                                "checked": false,
                                "key": "7-4-0-0-0",
                                "id": "P0312"
                            },
                            {
                                "opId": "P0314",
                                "opName": "报损报溢申请查看",
                                "opSort": "P0314",
                                "elementClass": "acl_view_spdPlApply,acl_view_spdPlItemApply",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPlApplys",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlApplys/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-1-1"
                                    }
                                ],
                                "checked": false,
                                "key": "7-4-0-1-0",
                                "id": "P0314"
                            },
                            {
                                "opId": "P0309",
                                "opName": "报损报溢申请新增",
                                "opSort": "P0309",
                                "elementClass": "acl_add_spdPlApply,acl_add_spdPlItemApply,acl_view_spdPlApply,acl_view_spdPlItemApply",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPlApplys/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlApplys",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/PcsDepts/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUMdepot/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUMdepot",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/PcsDepts/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPls",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "7-4-0-2-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-2-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-2-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-2-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "7-4-0-2-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotStocks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-2-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotStocks/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-2-12"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/{goodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-2-13"
                                    }
                                ],
                                "checked": false,
                                "key": "7-4-0-2-0",
                                "id": "P0309"
                            },
                            {
                                "opId": "P0310",
                                "opName": "报损报溢申请编辑",
                                "opSort": "P0310",
                                "elementClass": "acl_edit_spdPlApply,acl_edit_spdPlItemApply,acl_view_spdPlApply,acl_view_spdPlItemApply,acl_delete_spdPlItemApply",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPlItems/plId,{plId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlItems/plId,{plId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlApplys/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlApplys",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-3-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPls/{plId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-4-0-3-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-3-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-3-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlItems/{plItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-4-0-3-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "7-4-0-3-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byDepot/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-3-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsLotStockViews/byDepot/{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-3-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/{goodsId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-4-0-3-12"
                                    }
                                ],
                                "checked": false,
                                "key": "7-4-0-3-0",
                                "id": "P0310"
                            },
                            {
                                "opId": "P0311",
                                "opName": "报损报溢申请删除",
                                "opSort": "P0311",
                                "elementClass": "acl_delete_spdPlApply",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPls/{plId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "7-4-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlItems/{plItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "7-4-0-4-1"
                                    }
                                ],
                                "checked": false,
                                "key": "7-4-0-4-0",
                                "id": "P0311"
                            }
                        ],
                        "checked": false,
                        "key": "7-4-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "7-4-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10008-006",
                "menuCode": "10008-006",
                "menuParentId": "10008",
                "icon": null,
                "menuSort": 6,
                "name": "报损报溢审核",
                "level": 2,
                "anchor": "#spd/spdPls",
                "functions": [
                    {
                        "functionId": "F0054",
                        "functionName": "报损报溢审核",
                        "operations": [
                            {
                                "opId": "P0439",
                                "opName": "报损报溢审核查看",
                                "opSort": "P0439",
                                "elementClass": "acl_view_spdPl",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPls/{plId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-5-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlItems/plId,{plId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-5-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlItems/{plItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-5-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlItems/plId,{plId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-5-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPls",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-5-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPls/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-5-0-0-5"
                                    }
                                ],
                                "checked": false,
                                "key": "7-5-0-0-0",
                                "id": "P0439"
                            },
                            {
                                "opId": "P0441",
                                "opName": "报损报溢审核审核",
                                "opSort": "P0441",
                                "elementClass": "acl_reviewEntity_spdPl",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPls/{plId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-5-0-1-0"
                                    }
                                ],
                                "checked": false,
                                "key": "7-5-0-1-0",
                                "id": "P0441"
                            },
                            {
                                "opId": "P0442",
                                "opName": "报损报溢审核提交",
                                "opSort": "P0442",
                                "elementClass": "acl_commitEntity_spdPl",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPls/{plId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-5-0-2-0"
                                    }
                                ],
                                "checked": false,
                                "key": "7-5-0-2-0",
                                "id": "P0442"
                            },
                            {
                                "opId": "P0444",
                                "opName": "报损报溢审核撤回",
                                "opSort": "P0444",
                                "elementClass": "acl_cancelCommit_spdPl",
                                "webApis": [],
                                "checked": false,
                                "key": "7-5-0-3-0",
                                "id": "P0444"
                            },
                            {
                                "opId": "P0658",
                                "opName": "报损报溢审核保存",
                                "opSort": "P0658",
                                "elementClass": "acl_update_pl",
                                "webApis": [],
                                "checked": false,
                                "key": "7-5-0-4-0",
                                "id": "P0658"
                            },
                            {
                                "opId": "P0659",
                                "opName": "报损报溢审核确认",
                                "opSort": "P0659",
                                "elementClass": "acl_confirm_pl",
                                "webApis": [],
                                "checked": false,
                                "key": "7-5-0-5-0",
                                "id": "P0659"
                            }
                        ],
                        "checked": false,
                        "key": "7-5-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "7-5-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10008-007",
                "menuCode": "10008-007",
                "menuParentId": "10008",
                "icon": null,
                "menuSort": 7,
                "name": "报损报溢记录",
                "level": 2,
                "anchor": "#spd/spdPlHiss",
                "functions": [
                    {
                        "functionId": "F0029",
                        "functionName": "报损报溢记录",
                        "operations": [
                            {
                                "opId": "P0197",
                                "opName": "报损报溢记录查看",
                                "opSort": "P0197",
                                "elementClass": "acl_view_spdPl",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPlItems/plId,{plId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-6-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlItems/plId,{plId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-6-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlsHis/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-6-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlsHis",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-6-0-0-3"
                                    }
                                ],
                                "checked": false,
                                "key": "7-6-0-0-0",
                                "id": "P0197"
                            }
                        ],
                        "checked": false,
                        "key": "7-6-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "7-6-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10008-009",
                "menuCode": "10008-009",
                "menuParentId": "10008",
                "icon": null,
                "menuSort": 9,
                "name": "定数拆包管理",
                "level": 2,
                "anchor": "#spd/spdFixedMakeUnPackings",
                "functions": [
                    {
                        "functionId": "F0044",
                        "functionName": "定数拆包管理",
                        "operations": [
                            {
                                "opId": "P0461",
                                "opName": "定数拆包管理查看",
                                "opSort": "P0461",
                                "elementClass": "acl_view_spdFixedMakeUnPacking",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems/makeId,{makeId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems/makeId,{makeId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-0-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeUnPackings/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-0-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeUnPackings",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-0-8"
                                    }
                                ],
                                "checked": false,
                                "key": "7-7-0-0-0",
                                "id": "P0461"
                            },
                            {
                                "opId": "P0462",
                                "opName": "定数拆包管理编辑",
                                "opSort": "P0462",
                                "elementClass": "acl_edit_spdFixedMakeUnPacking,acl_add_spdFixedMakeItemUnPacking",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotStocks/byDepot/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotStocks/byDepot/{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "7-7-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems/makeId,{makeId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems/makeId,{makeId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-1-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-1-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-1-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-1-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-1-10"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-7-0-1-11"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-7-0-1-12"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems/{makeItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "7-7-0-1-13"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-1-14"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedBarcodes/byUnPacking/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-1-15"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedBarcodes/byUnPacking/{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-1-16"
                                    }
                                ],
                                "checked": false,
                                "key": "7-7-0-1-0",
                                "id": "P0462"
                            },
                            {
                                "opId": "P0463",
                                "opName": "定数拆包管理增加",
                                "opSort": "P0463",
                                "elementClass": "acl_add_spdFixedMakeUnPacking,acl_add_spdFixedMakeItemUnPacking",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "7-7-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "7-7-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUMdepot/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUMdepot",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedBarcodes/byUnPacking/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-2-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedBarcodes/byUnPacking/{depotId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-2-7"
                                    }
                                ],
                                "checked": false,
                                "key": "7-7-0-2-0",
                                "id": "P0463"
                            },
                            {
                                "opId": "P0464",
                                "opName": "定数拆包管理删除",
                                "opSort": "P0464",
                                "elementClass": "acl_delete_spdFixedMakeUnPacking",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes/{makeId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "7-7-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-3-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-3-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems/makeId,{makeId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-3-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakeItems/makeId,{makeId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-3-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-3-8"
                                    }
                                ],
                                "checked": false,
                                "key": "7-7-0-3-0",
                                "id": "P0464"
                            },
                            {
                                "opId": "P0465",
                                "opName": "定数拆包管理提交",
                                "opSort": "P0465",
                                "elementClass": "acl_commitEntity_spdFixedMakeUnPacking,acl_view_spdFixedMakeUnPacking",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes/{makeId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-7-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes/{makeId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-4-1"
                                    }
                                ],
                                "checked": false,
                                "key": "7-7-0-4-0",
                                "id": "P0465"
                            },
                            {
                                "opId": "P0466",
                                "opName": "定数拆包管理审核",
                                "opSort": "P0466",
                                "elementClass": "acl_reviewEntity_spdFixedMakeUnPacking",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes/{makeId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-7-0-5-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedMakes/{makeId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-7-0-5-1"
                                    }
                                ],
                                "checked": false,
                                "key": "7-7-0-5-0",
                                "id": "P0466"
                            },
                            {
                                "opId": "P0467",
                                "opName": "定数拆包管理撤回",
                                "opSort": "P0467",
                                "elementClass": "acl_cancelCommit_spdFixedMakeUnPacking",
                                "webApis": [],
                                "checked": false,
                                "key": "7-7-0-6-0",
                                "id": "P0467"
                            }
                        ],
                        "checked": false,
                        "key": "7-7-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "7-7-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10008-008",
                "menuCode": "10008-008",
                "menuParentId": "10008",
                "icon": null,
                "menuSort": 8,
                "name": "定数条码查询",
                "level": 2,
                "anchor": "#spd/spdFixedBarcodes",
                "functions": [
                    {
                        "functionId": "F0059",
                        "functionName": "定数条码查询",
                        "operations": [
                            {
                                "opId": "P0468",
                                "opName": "定数条码查询查看",
                                "opSort": "P0468",
                                "elementClass": "acl_view_spdFixedBarcodes",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedBarcodes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-8-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedBarcodes/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-8-0-0-1"
                                    }
                                ],
                                "checked": false,
                                "key": "7-8-0-0-0",
                                "id": "P0468"
                            },
                            {
                                "opId": "P0652",
                                "opName": "定数条码查询打印",
                                "opSort": "P0652",
                                "elementClass": "acl_export_spdFixedBarcode",
                                "webApis": [],
                                "checked": false,
                                "key": "7-8-0-1-0",
                                "id": "P0652"
                            }
                        ],
                        "checked": false,
                        "key": "7-8-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "7-8-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10008-010",
                "menuCode": "10008-010",
                "menuParentId": "10008",
                "icon": null,
                "menuSort": 10,
                "name": "定数上架作业",
                "level": 2,
                "anchor": "#spd/spdTaskFixeds",
                "functions": [
                    {
                        "functionId": "F0060",
                        "functionName": "定数上架作业",
                        "operations": [
                            {
                                "opId": "P0469",
                                "opName": "定数上架作业查看",
                                "opSort": "P0469",
                                "elementClass": null,
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/byFixedPutaway",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-9-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/byFixedPutaway/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-9-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskFixedItems/taskId,{taskId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-9-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskFixedItemBarcodes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-9-0-0-3"
                                    }
                                ],
                                "checked": false,
                                "key": "7-9-0-0-0",
                                "id": "P0469"
                            },
                            {
                                "opId": "P0470",
                                "opName": "定数上架作业保存",
                                "opSort": "P0470",
                                "elementClass": "acl_update_spdTaskFixed",
                                "webApis": [],
                                "checked": false,
                                "key": "7-9-0-1-0",
                                "id": "P0470"
                            },
                            {
                                "opId": "P0471",
                                "opName": "定数上架作业确认",
                                "opSort": "P0471",
                                "elementClass": "acl_confirm_spdTaskFixed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/{taskId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-9-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskItems/{taskItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-9-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskFixedItemBarcodes",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "7-9-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskFixedItemBarcodes",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "7-9-0-2-3"
                                    }
                                ],
                                "checked": false,
                                "key": "7-9-0-2-0",
                                "id": "P0471"
                            }
                        ],
                        "checked": false,
                        "key": "7-9-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "7-9-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10008-011",
                "menuCode": "10008-011",
                "menuParentId": "10008",
                "icon": null,
                "menuSort": 11,
                "name": "定数下架作业",
                "level": 2,
                "anchor": "#spd/spdTaskFixedOuts",
                "functions": [
                    {
                        "functionId": "F0061",
                        "functionName": "定数下架作业",
                        "operations": [
                            {
                                "opId": "P0472",
                                "opName": "定数下架作业查看",
                                "opSort": "P0472",
                                "elementClass": null,
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/byFixedOffShelf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-10-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/byFixedOffShelf/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-10-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskFixedItems/taskId,{taskId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-10-0-0-2"
                                    }
                                ],
                                "checked": false,
                                "key": "7-10-0-0-0",
                                "id": "P0472"
                            },
                            {
                                "opId": "P0473",
                                "opName": "定数下架作业保存",
                                "opSort": "P0473",
                                "elementClass": "acl_update_spdTaskFixedOut",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskItems/{taskItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-10-0-1-0"
                                    }
                                ],
                                "checked": false,
                                "key": "7-10-0-1-0",
                                "id": "P0473"
                            },
                            {
                                "opId": "P0474",
                                "opName": "定数下架作业确认",
                                "opSort": "P0474",
                                "elementClass": "acl_confirm_spdTaskFixedOut",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/{taskId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-10-0-2-0"
                                    }
                                ],
                                "checked": false,
                                "key": "7-10-0-2-0",
                                "id": "P0474"
                            }
                        ],
                        "checked": false,
                        "key": "7-10-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "7-10-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10008-012",
                "menuCode": "10008-012",
                "menuParentId": "10008",
                "icon": null,
                "menuSort": 12,
                "name": "定数作业记录",
                "level": 2,
                "anchor": "#spd/spdTaskFixedHiss",
                "functions": [
                    {
                        "functionId": "F0065",
                        "functionName": "定数作业记录",
                        "operations": [
                            {
                                "opId": "P0613",
                                "opName": "定数作业记录查看",
                                "opSort": "P0613",
                                "elementClass": null,
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/byFixedHis",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-11-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTasks/byFixedHis/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-11-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-11-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepts/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-11-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskFixedItems/taskId,{taskId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-11-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskFixedItems/taskId,{taskId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-11-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-11-0-0-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-11-0-0-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-11-0-0-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskFixedItemBarcodes",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-11-0-0-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedBarcodes/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-11-0-0-10"
                                    }
                                ],
                                "checked": false,
                                "key": "7-11-0-0-0",
                                "id": "P0613"
                            },
                            {
                                "opId": "P0662",
                                "opName": "定数作业记录打印",
                                "opSort": "P0662",
                                "elementClass": "acl_exportPdf_spdTaskFixedHis",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdTaskFixedItems/taskId,{taskId}/pdf",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-11-0-1-0"
                                    }
                                ],
                                "checked": false,
                                "key": "7-11-0-1-0",
                                "id": "P0662"
                            }
                        ],
                        "checked": false,
                        "key": "7-11-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "7-11-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10008-013",
                "menuCode": "10008-013",
                "menuParentId": "10008",
                "icon": null,
                "menuSort": 13,
                "name": "定数盘点管理",
                "level": 2,
                "anchor": "#spd/spdInventoryFixeds",
                "functions": [
                    {
                        "functionId": "F0066",
                        "functionName": "定数盘点管理",
                        "operations": [
                            {
                                "opId": "P0618",
                                "opName": "定数盘点管理新增",
                                "opSort": "P0618",
                                "elementClass": "acl_add_spdInventoryFixed,acl_add_spdInventoryFixedItem,acl_view_spdInventoryFixedItem,acl_edit_spdInventoryFixedItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryFixeds/byUser/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryFixeds/byUser",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byFixedDepot/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byFixedDepot",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventorys",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "7-12-0-0-5"
                                    }
                                ],
                                "checked": false,
                                "key": "7-12-0-0-0",
                                "id": "P0618"
                            },
                            {
                                "opId": "P0615",
                                "opName": "定数盘点管理编辑",
                                "opSort": "P0615",
                                "elementClass": "acl_edit_spdInventoryFixed,acl_edit_spdInventoryFixedItem,acl_view_spdInventoryFixedItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryFixeds/byUser/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryFixeds/byUser",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryFixedItems/inventoryId,{inventoryId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryFixedItems/inventoryId,{inventoryId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryFixedItems/{inventoryFixedItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-12-0-1-6"
                                    }
                                ],
                                "checked": false,
                                "key": "7-12-0-1-0",
                                "id": "P0615"
                            },
                            {
                                "opId": "P0617",
                                "opName": "定数盘点管理审核",
                                "opSort": "P0617",
                                "elementClass": "acl_reviewEntity_spdInventoryFixed,acl_reviewEntity_spdInventoryFixedItem",
                                "webApis": [],
                                "checked": false,
                                "key": "7-12-0-2-0",
                                "id": "P0617"
                            },
                            {
                                "opId": "P0641",
                                "opName": "定数盘点管理提交",
                                "opSort": "P0641",
                                "elementClass": "acl_commitEntity_spdInventoryFixed",
                                "webApis": [],
                                "checked": false,
                                "key": "7-12-0-3-0",
                                "id": "P0641"
                            },
                            {
                                "opId": "P0642",
                                "opName": "定数盘点管理撤回",
                                "opSort": "P0642",
                                "elementClass": "acl_cancelCommit_spdInventoryFixed",
                                "webApis": [],
                                "checked": false,
                                "key": "7-12-0-4-0",
                                "id": "P0642"
                            },
                            {
                                "opId": "P0643",
                                "opName": "定数盘点管理打印",
                                "opSort": "P0643",
                                "elementClass": "acl_export_spdInventoryFixed,acl_view_spdInventoryFixed",
                                "webApis": [],
                                "checked": false,
                                "key": "7-12-0-5-0",
                                "id": "P0643"
                            },
                            {
                                "opId": "P0614",
                                "opName": "定数盘点管理查看",
                                "opSort": "P0614",
                                "elementClass": "acl_view_spdInventoryFixedItem,acl_view_spdInventoryFixed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedBarcodes/byAvailable/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-6-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedBarcodes/byAvailable",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-6-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedBarcodes/{depotId}/byAvailable",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-6-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedBarcodes/{depotId}/byAvailable/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-6-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedBarcodes/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-6-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryFixeds/byUser/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-6-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryFixeds/byUser",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-6-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-6-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryFixedItems/inventoryId,{inventoryId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-6-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryFixedItems/inventoryId,{inventoryId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-6-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-6-10"
                                    }
                                ],
                                "checked": false,
                                "key": "7-12-0-6-0",
                                "id": "P0614"
                            },
                            {
                                "opId": "P0616",
                                "opName": "定数盘点管理删除",
                                "opSort": "P0616",
                                "elementClass": "acl_delete_spdInventoryFixed,acl_delete_spdInventoryFixedItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryFixeds/byUser/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-7-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventoryFixeds/byUser",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-12-0-7-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdInventorys/{inventory}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "7-12-0-7-2"
                                    }
                                ],
                                "checked": false,
                                "key": "7-12-0-7-0",
                                "id": "P0616"
                            }
                        ],
                        "checked": false,
                        "key": "7-12-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "7-12-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10008-014",
                "menuCode": "10008-014",
                "menuParentId": "10008",
                "icon": null,
                "menuSort": 14,
                "name": "定数损溢申请",
                "level": 2,
                "anchor": "#spd/spdPlApplyFixeds",
                "functions": [
                    {
                        "functionId": "F0067",
                        "functionName": "定数损溢申请",
                        "operations": [
                            {
                                "opId": "P0620",
                                "opName": "定数损溢申请新增",
                                "opSort": "P0620",
                                "elementClass": "acl_add_spdPlApplyFixed,acl_add_spdPlFixedItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPlFixedItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "7-13-0-0-0"
                                    }
                                ],
                                "checked": false,
                                "key": "7-13-0-0-0",
                                "id": "P0620"
                            },
                            {
                                "opId": "P0621",
                                "opName": "定数损溢申请编辑",
                                "opSort": "P0621",
                                "elementClass": "acl_edit_spdPlApplyFixed",
                                "webApis": [],
                                "checked": false,
                                "key": "7-13-0-1-0",
                                "id": "P0621"
                            },
                            {
                                "opId": "P0622",
                                "opName": "定数损溢申请删除",
                                "opSort": "P0622",
                                "elementClass": "acl_delete_spdPlApplyFixed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPlFixedItems/{plFixedItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "7-13-0-2-0"
                                    }
                                ],
                                "checked": false,
                                "key": "7-13-0-2-0",
                                "id": "P0622"
                            },
                            {
                                "opId": "P0623",
                                "opName": "定数损溢申请提交",
                                "opSort": "P0623",
                                "elementClass": "acl_commitEntity_spdPlApplyFixed",
                                "webApis": [],
                                "checked": false,
                                "key": "7-13-0-3-0",
                                "id": "P0623"
                            },
                            {
                                "opId": "P0619",
                                "opName": "定数损溢申请查看",
                                "opSort": "P0619",
                                "elementClass": "acl_view_spdPlApplyFixed,acl_view_spdPlFixedItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPlFixedItems/plId,{plId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-13-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlApplyFixeds",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-13-0-4-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlApplyFixeds/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-13-0-4-2"
                                    }
                                ],
                                "checked": false,
                                "key": "7-13-0-4-0",
                                "id": "P0619"
                            }
                        ],
                        "checked": false,
                        "key": "7-13-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "7-13-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10008-015",
                "menuCode": "10008-015",
                "menuParentId": "10008",
                "icon": null,
                "menuSort": 15,
                "name": "定数损溢审核",
                "level": 2,
                "anchor": "#spd/spdPlFixeds",
                "functions": [
                    {
                        "functionId": "F0068",
                        "functionName": "定数损溢审核",
                        "operations": [
                            {
                                "opId": "P0625",
                                "opName": "定数损溢审核编辑",
                                "opSort": "P0625",
                                "elementClass": "acl_edit_spdPlFixed,acl_edit_spdPlFixedItem",
                                "webApis": [],
                                "checked": false,
                                "key": "7-14-0-0-0",
                                "id": "P0625"
                            },
                            {
                                "opId": "P0628",
                                "opName": "定数损溢审核新增",
                                "opSort": "P0628",
                                "elementClass": "acl_add_spdPlFixed,acl_add_spdPlFixedItem",
                                "webApis": [],
                                "checked": false,
                                "key": "7-14-0-1-0",
                                "id": "P0628"
                            },
                            {
                                "opId": "P0624",
                                "opName": "定数损溢审核查看",
                                "opSort": "P0624",
                                "elementClass": "acl_view_spdPlFixed,acl_view_spdPlFixedItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPlFixeds",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-14-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlFixeds/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-14-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixedBarcodes/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-14-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlFixedItems/plId,{plId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-14-0-2-3"
                                    }
                                ],
                                "checked": false,
                                "key": "7-14-0-2-0",
                                "id": "P0624"
                            },
                            {
                                "opId": "P0627",
                                "opName": "定数损溢审核审核",
                                "opSort": "P0627",
                                "elementClass": "acl_check_spdPlFixed,acl_check_spdPlFixedItem",
                                "webApis": [],
                                "checked": false,
                                "key": "7-14-0-3-0",
                                "id": "P0627"
                            },
                            {
                                "opId": "P0626",
                                "opName": "定数损溢审核提交",
                                "opSort": "P0626",
                                "elementClass": "acl_commit_spdPlFixed,acl_commit_spdPlFixedItem",
                                "webApis": [],
                                "checked": false,
                                "key": "7-14-0-4-0",
                                "id": "P0626"
                            },
                            {
                                "opId": "P0650",
                                "opName": "定数损溢审核保存",
                                "opSort": "P0650",
                                "elementClass": "acl_update_plFixed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPlFixedItems/{plFixedItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "7-14-0-5-0"
                                    }
                                ],
                                "checked": false,
                                "key": "7-14-0-5-0",
                                "id": "P0650"
                            },
                            {
                                "opId": "P0651",
                                "opName": "定数损溢审核确认",
                                "opSort": "P0651",
                                "elementClass": "acl_confirm_plFixed",
                                "webApis": [],
                                "checked": false,
                                "key": "7-14-0-6-0",
                                "id": "P0651"
                            }
                        ],
                        "checked": false,
                        "key": "7-14-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "7-14-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10008-016",
                "menuCode": "10008-016",
                "menuParentId": "10008",
                "icon": null,
                "menuSort": 16,
                "name": "定数损溢记录",
                "level": 2,
                "anchor": "#spd/spdPlFixedHiss",
                "functions": [
                    {
                        "functionId": "F0069",
                        "functionName": "定数损溢记录",
                        "operations": [
                            {
                                "opId": "P0629",
                                "opName": "定数损溢记录查看",
                                "opSort": "P0629",
                                "elementClass": "acl_view_spdPlFixed,acl_view_spdPlFixedItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPlFixedsHis",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-15-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPlFixedsHis/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "7-15-0-0-1"
                                    }
                                ],
                                "checked": false,
                                "key": "7-15-0-0-0",
                                "id": "P0629"
                            }
                        ],
                        "checked": false,
                        "key": "7-15-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "7-15-0-0-0"
            }
        ],
        "topMenu": true,
        "open": false,
        "checked": false,
        "key": "7-0-0-0-0"
    },
    {
        "systemName": "收货系统",
        "menuId": "10009",
        "menuCode": "10009",
        "menuParentId": "-1",
        "icon": "fa-medkit",
        "menuSort": 9,
        "name": "院内配送管理",
        "level": 1,
        "anchor": null,
        "functions": null,
        "children": [
            {
                "systemName": "收货系统",
                "menuId": "10009-001",
                "menuCode": "10009-001",
                "menuParentId": "10009",
                "icon": null,
                "menuSort": 1,
                "name": "运输调度管理",
                "level": 2,
                "anchor": null,
                "functions": [
                    {
                        "functionId": "F0049",
                        "functionName": "运输调度管理",
                        "operations": [
                            {
                                "opId": "P0405",
                                "opName": "运输调度管理查看",
                                "opSort": "P0405",
                                "elementClass": null,
                                "webApis": [],
                                "checked": false,
                                "key": "8-0-0-0-0",
                                "id": "P0405"
                            }
                        ],
                        "checked": false,
                        "key": "8-0-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "8-0-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10009-002",
                "menuCode": "10009-002",
                "menuParentId": "10009",
                "icon": null,
                "menuSort": 2,
                "name": "周转装箱作业",
                "level": 2,
                "anchor": null,
                "functions": [
                    {
                        "functionId": "F0050",
                        "functionName": "周转装箱作业\n",
                        "operations": [
                            {
                                "opId": "P0406",
                                "opName": "周转装箱作业查看\n",
                                "opSort": "P0406",
                                "elementClass": null,
                                "webApis": [],
                                "checked": false,
                                "key": "8-1-0-0-0",
                                "id": "P0406"
                            }
                        ],
                        "checked": false,
                        "key": "8-1-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "8-1-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10009-003",
                "menuCode": "10009-003",
                "menuParentId": "10009",
                "icon": null,
                "menuSort": 3,
                "name": "物流配送签收",
                "level": 2,
                "anchor": null,
                "functions": [
                    {
                        "functionId": "F0018",
                        "functionName": "物流配送签收",
                        "operations": [
                            {
                                "opId": "P0407",
                                "opName": "物流配送签收查看",
                                "opSort": "P0407",
                                "elementClass": null,
                                "webApis": [],
                                "checked": false,
                                "key": "8-2-0-0-0",
                                "id": "P0407"
                            }
                        ],
                        "checked": false,
                        "key": "8-2-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "8-2-0-0-0"
            }
        ],
        "topMenu": true,
        "open": false,
        "checked": false,
        "key": "8-0-0-0-0"
    },
    {
        "systemName": "收货系统",
        "menuId": "10010",
        "menuCode": "10010",
        "menuParentId": "-1",
        "icon": "fa fa-credit-card",
        "menuSort": 10,
        "name": "结算对账管理",
        "level": 1,
        "anchor": null,
        "functions": null,
        "children": [
            {
                "systemName": "收货系统",
                "menuId": "10010-001",
                "menuCode": "10010-001",
                "menuParentId": "10010",
                "icon": null,
                "menuSort": 1,
                "name": "物权交接确认",
                "level": 2,
                "anchor": "#spd/spdWiths",
                "functions": [
                    {
                        "functionId": "F0019",
                        "functionName": "物权交接确认",
                        "operations": [
                            {
                                "opId": "P0005",
                                "opName": "物权交接确认确认",
                                "opSort": "P0005",
                                "elementClass": "acl_confirm_spdWith,acl_view_spdWith,acl_view_spdWithItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdWithItems/withId,{withId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-0-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-0-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdWiths/1/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "9-0-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdWiths/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-0-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdWiths",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-0-0-0-4"
                                    }
                                ],
                                "checked": false,
                                "key": "9-0-0-0-0",
                                "id": "P0005"
                            },
                            {
                                "opId": "P0033",
                                "opName": "物权交接确认查看",
                                "opSort": "P0033",
                                "elementClass": "acl_view_spdWith,acl_view_spdWithItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdWiths/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-0-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdWiths",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-0-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdWithItems/withId,{withId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-0-0-1-2"
                                    }
                                ],
                                "checked": false,
                                "key": "9-0-0-1-0",
                                "id": "P0033"
                            },
                            {
                                "opId": "P0004",
                                "opName": "物权交接确认保存",
                                "opSort": "P0004",
                                "elementClass": "acl_update_spdWith,acl_view_spdWith,acl_view_spdWithItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdWiths",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-0-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdWithItems/withId,{withId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-0-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdWithItems/{withItemId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "9-0-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdWiths/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-0-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/{workbookId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-0-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/{workbookId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "9-0-0-2-5"
                                    }
                                ],
                                "checked": false,
                                "key": "9-0-0-2-0",
                                "id": "P0004"
                            }
                        ],
                        "checked": false,
                        "key": "9-0-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "9-0-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10010-002",
                "menuCode": "10010-002",
                "menuParentId": "10010",
                "icon": null,
                "menuSort": 2,
                "name": "物权交接记录",
                "level": 2,
                "anchor": "#spd/spdWithHiss",
                "functions": [
                    {
                        "functionId": "F0070",
                        "functionName": "物权交接记录",
                        "operations": [
                            {
                                "opId": "P0630",
                                "opName": "物权交接记录查看",
                                "opSort": "P0630",
                                "elementClass": "acl_view_spdWithHis",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdWiths/byHis/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-1-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdWiths/byHis",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-1-0-0-1"
                                    }
                                ],
                                "checked": false,
                                "key": "9-1-0-0-0",
                                "id": "P0630"
                            },
                            {
                                "opId": "P0631",
                                "opName": "物权交接记录打印",
                                "opSort": "P0631",
                                "elementClass": "acl_exportPdf_spdWithHis",
                                "webApis": [],
                                "checked": false,
                                "key": "9-1-0-1-0",
                                "id": "P0631"
                            }
                        ],
                        "checked": false,
                        "key": "9-1-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "9-1-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10010-003",
                "menuCode": "10010-003",
                "menuParentId": "10010",
                "icon": null,
                "menuSort": 3,
                "name": "物资结算申请",
                "level": 2,
                "anchor": "#spd/spdSettles",
                "functions": [
                    {
                        "functionId": "F0031",
                        "functionName": "物资结算申请",
                        "operations": [
                            {
                                "opId": "P0203",
                                "opName": "物资结算查看",
                                "opSort": "P0203",
                                "elementClass": "acl_view_spdSettle,acl_view_spdSettleItem,acl_view_spdSettleAccount",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleItems/settleId,{settleId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleItems/settleId,{settleId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles/{settleId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleAccounts/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleAccounts",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-0-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleAccounts/settleId,{settleId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-0-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleAccounts/settleId,{settleId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-0-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/bySettleTaxsOrg/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-0-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/bySettleTaxsOrg",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-0-10"
                                    }
                                ],
                                "checked": false,
                                "key": "9-2-0-0-0",
                                "id": "P0203"
                            },
                            {
                                "opId": "P0204",
                                "opName": "物资结算编辑",
                                "opSort": "P0204",
                                "elementClass": "acl_edit_spdSettle,acl_edit_spdSettleItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleItems/settleId,{settleId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleItems/settleId,{settleId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles/{settleId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleAccounts",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleAccounts/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-1-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles/{settleId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "9-2-0-1-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxItems/taxId,{taxId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-1-8"
                                    }
                                ],
                                "checked": false,
                                "key": "9-2-0-1-0",
                                "id": "P0204"
                            },
                            {
                                "opId": "P0205",
                                "opName": "物资结算增加",
                                "opSort": "P0205",
                                "elementClass": "acl_add_spdSettle,acl_add_spdSettleItem,acl_view_spdSettleItem,acl_view_spdSettleAccount",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleItems/settleId,{settleId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles/{settleId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleAccounts/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleAccounts",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/PcsDepts/bySupplierDept",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-2-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "9-2-0-2-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "9-2-0-2-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/bySettleTaxsOrg/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-2-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/bySettleTaxsOrg",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-2-10"
                                    }
                                ],
                                "checked": false,
                                "key": "9-2-0-2-0",
                                "id": "P0205"
                            },
                            {
                                "opId": "P0206",
                                "opName": "物资结算删除",
                                "opSort": "P0206",
                                "elementClass": "acl_delete_spdSettle,acl_delete_spdSettleItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleItems/settleId,{settleId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleItems/settleId,{settleId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles/{settleId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-3-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleAccounts",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-3-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleAccounts/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-3-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles/{settleId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "9-2-0-3-7"
                                    }
                                ],
                                "checked": false,
                                "key": "9-2-0-3-0",
                                "id": "P0206"
                            },
                            {
                                "opId": "P0208",
                                "opName": "物资结算审核",
                                "opSort": "P0208",
                                "elementClass": "acl_reviewEntity_spdSettle,acl_view_spdSettle",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-4-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleItems/settleId,{settleId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-4-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleItems/settleId,{settleId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-4-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles/{settleId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-4-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleAccounts/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-4-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleAccounts",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-2-0-4-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettles/{settleId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "9-2-0-4-7"
                                    }
                                ],
                                "checked": false,
                                "key": "9-2-0-4-0",
                                "id": "P0208"
                            }
                        ],
                        "checked": false,
                        "key": "9-2-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "9-2-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10010-004",
                "menuCode": "10010-004",
                "menuParentId": "10010",
                "icon": null,
                "menuSort": 4,
                "name": "结算发票管理",
                "level": 2,
                "anchor": "#spd/spdSettleTaxs",
                "functions": [
                    {
                        "functionId": "F0032",
                        "functionName": "结算发票管理",
                        "operations": [
                            {
                                "opId": "P0210",
                                "opName": "结算发票查看",
                                "opSort": "P0210",
                                "elementClass": "acl_view_spdSettleTax,acl_view_spdSettleTaxItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxItems/taxId,{taxId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-3-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/bySettleTaxsOrg/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-3-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/bySettleTaxsOrg",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-3-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/bySettleTaxsOrg/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-3-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/bySettleTaxsOrg",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-3-0-0-4"
                                    }
                                ],
                                "checked": false,
                                "key": "9-3-0-0-0",
                                "id": "P0210"
                            },
                            {
                                "opId": "P0211",
                                "opName": "结算发票编辑",
                                "opSort": "P0211",
                                "elementClass": "acl_edit_spdSettleTax,acl_edit_spdSettleTaxItem,acl_view_spdSettleTaxItem,acl_add_spdSettleTaxItem,acl_delete_spdSettleTaxItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/{taxId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "9-3-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/bySettleTaxsOrg/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-3-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/bySettleTaxsOrg",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-3-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxItems/taxId,{taxId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-3-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/{taxId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "9-3-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-3-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleItems/buyerOrg",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-3-0-1-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleItems/buyerOrg/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-3-0-1-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxItems",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "9-3-0-1-8"
                                    }
                                ],
                                "checked": false,
                                "key": "9-3-0-1-0",
                                "id": "P0211"
                            },
                            {
                                "opId": "P0213",
                                "opName": "结算发票删除",
                                "opSort": "P0213",
                                "elementClass": "acl_delete_spdSettleTax,acl_delete_spdSettleTaxItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxItems/{taxItemId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "9-3-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/bySettleTaxsOrg/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-3-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/bySettleTaxsOrg",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-3-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/{taxId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "9-3-0-2-3"
                                    }
                                ],
                                "checked": false,
                                "key": "9-3-0-2-0",
                                "id": "P0213"
                            },
                            {
                                "opId": "P0212",
                                "opName": "结算发票增加",
                                "opSort": "P0212",
                                "elementClass": "acl_add_spdSettleTax,acl_add_spdSettleTaxItem,acl_view_spdSettleTaxItem,acl_edit_spdSettleTaxItem,acl_delete_spdSettleTaxItem",
                                "webApis": [],
                                "checked": false,
                                "key": "9-3-0-3-0",
                                "id": "P0212"
                            },
                            {
                                "opId": "P0215",
                                "opName": "结算发票审核",
                                "opSort": "P0215",
                                "elementClass": "acl_reviewEntity_spdSettleTax,acl_reviewEntity_spdSettleTaxItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/bySettleTaxsOrg/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-3-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/bySettleTaxsOrg",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-3-0-4-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/{taxId}/checkState/reviewed",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "9-3-0-4-2"
                                    }
                                ],
                                "checked": false,
                                "key": "9-3-0-4-0",
                                "id": "P0215"
                            }
                        ],
                        "checked": false,
                        "key": "9-3-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "9-3-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10010-005",
                "menuCode": "10010-005",
                "menuParentId": "10010",
                "icon": null,
                "menuSort": 5,
                "name": "结算对账查询",
                "level": 2,
                "anchor": "#spd/spdSettleTaxHiss",
                "functions": [
                    {
                        "functionId": "F0033",
                        "functionName": "结算对账查询",
                        "operations": [
                            {
                                "opId": "P0217",
                                "opName": "结算对账查看",
                                "opSort": "P0217",
                                "elementClass": "acl_view_spdSettleTaxHis,acl_view_spdSettleTaxItemHis",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/byHis",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-4-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSettleTaxs/byHis/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "9-4-0-0-1"
                                    }
                                ],
                                "checked": false,
                                "key": "9-4-0-0-0",
                                "id": "P0217"
                            }
                        ],
                        "checked": false,
                        "key": "9-4-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "9-4-0-0-0"
            }
        ],
        "topMenu": true,
        "open": false,
        "checked": false,
        "key": "9-0-0-0-0"
    },
    {
        "systemName": "收货系统",
        "menuId": "10011",
        "menuCode": "10011",
        "menuParentId": "-1",
        "icon": "fa-heartbeat",
        "menuSort": 11,
        "name": "患者关系管理",
        "level": 1,
        "anchor": null,
        "functions": null,
        "children": [
            {
                "systemName": "收货系统",
                "menuId": "10011-001",
                "menuCode": "10011-001",
                "menuParentId": "10011",
                "icon": null,
                "menuSort": 1,
                "name": "患者信息查询",
                "level": 2,
                "anchor": "#spd/spdHisPatients",
                "functions": [
                    {
                        "functionId": "F0045",
                        "functionName": "患者信息查询",
                        "operations": [
                            {
                                "opId": "P0132",
                                "opName": "患者信息查询查看",
                                "opSort": "P0132",
                                "elementClass": "acl_view_spdHisPatient,acl_view_spdHisPatientUsed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdHisPatients/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "10-0-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdHisPatients",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "10-0-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdHisPatientUseds/patientId,{patientId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "10-0-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdHisPatientUseds/patientId,{patientId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "10-0-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedItems/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "10-0-0-0-4"
                                    }
                                ],
                                "checked": false,
                                "key": "10-0-0-0-0",
                                "id": "P0132"
                            }
                        ],
                        "checked": false,
                        "key": "10-0-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "10-0-0-0-0"
            }
        ],
        "topMenu": true,
        "open": false,
        "checked": false,
        "key": "10-0-0-0-0"
    },
    {
        "systemName": "收货系统",
        "menuId": "10012",
        "menuCode": "10012",
        "menuParentId": "-1",
        "icon": "fa-bar-chart",
        "menuSort": 12,
        "name": "业务报表查询",
        "level": 1,
        "anchor": null,
        "functions": null,
        "children": [
            {
                "systemName": "收货系统",
                "menuId": "10012-001",
                "menuCode": "10012-001",
                "menuParentId": "10012",
                "icon": null,
                "menuSort": 1,
                "name": "全院库存查询",
                "level": 2,
                "anchor": "#spd/spdDepotStocks",
                "functions": [
                    {
                        "functionId": "F0022",
                        "functionName": "全院库存查询",
                        "operations": [
                            {
                                "opId": "P0140",
                                "opName": "全院库存查询查看",
                                "opSort": "P0140",
                                "elementClass": "acl_view_spdDepotStocks",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotStocks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "11-0-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotStocks/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "11-0-0-0-1"
                                    }
                                ],
                                "checked": false,
                                "key": "11-0-0-0-0",
                                "id": "P0140"
                            }
                        ],
                        "checked": false,
                        "key": "11-0-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "11-0-0-0-0"
            }
        ],
        "topMenu": true,
        "open": false,
        "checked": false,
        "key": "11-0-0-0-0"
    },
    {
        "systemName": "收货系统",
        "menuId": "10013",
        "menuCode": "10013",
        "menuParentId": "-1",
        "icon": "fa-cogs",
        "menuSort": 13,
        "name": "应用配置管理",
        "level": 1,
        "anchor": null,
        "functions": null,
        "children": [
            {
                "systemName": "收货系统",
                "menuId": "10013-001",
                "menuCode": "10013-001",
                "menuParentId": "10013",
                "icon": null,
                "menuSort": 1,
                "name": "业务机构管理",
                "level": 2,
                "anchor": "#pcs/orgs",
                "functions": [
                    {
                        "functionId": "F0006",
                        "functionName": "业务机构管理",
                        "operations": [
                            {
                                "opId": "P0040",
                                "opName": "业务机构查看",
                                "opSort": "P0040",
                                "elementClass": "acl_view_pcsOrg",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepts",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-0-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepts/orgId,{orgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-0-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-0-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs/{orgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-0-0-0-3"
                                    }
                                ],
                                "checked": false,
                                "key": "12-0-0-0-0",
                                "id": "P0040"
                            },
                            {
                                "opId": "P0041",
                                "opName": "业务机构增加",
                                "opSort": "P0041",
                                "elementClass": "acl_add_pcsOrg,acl_add_pcsDept",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepts",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-0-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "12-0-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs/{orgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-0-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "12-0-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-0-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepts",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "12-0-0-1-5"
                                    }
                                ],
                                "checked": false,
                                "key": "12-0-0-1-0",
                                "id": "P0041"
                            },
                            {
                                "opId": "P0042",
                                "opName": "业务机构编辑",
                                "opSort": "P0042",
                                "elementClass": "acl_edit_pcsOrg,acl_edit_pcsDept",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs/{orgId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "12-0-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepts/{deptId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "12-0-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-0-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs/{orgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-0-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "12-0-0-2-4"
                                    }
                                ],
                                "checked": false,
                                "key": "12-0-0-2-0",
                                "id": "P0042"
                            },
                            {
                                "opId": "P0286",
                                "opName": "业务机构撤回",
                                "opSort": "P0286",
                                "elementClass": "acl_cancelCommit_pcsOrg",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs/{orgId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "12-0-0-3-0"
                                    }
                                ],
                                "checked": false,
                                "key": "12-0-0-3-0",
                                "id": "P0286"
                            },
                            {
                                "opId": "P0043",
                                "opName": "业务机构删除",
                                "opSort": "P0043",
                                "elementClass": "acl_delete_pcsOrg,acl_delete_pcsDept",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-0-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs/{orgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-0-0-4-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "12-0-0-4-2"
                                    }
                                ],
                                "checked": false,
                                "key": "12-0-0-4-0",
                                "id": "P0043"
                            },
                            {
                                "opId": "P0044",
                                "opName": "业务机构提交",
                                "opSort": "P0044",
                                "elementClass": "acl_commitEntity_pcsOrg",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs/{orgId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "12-0-0-5-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-0-0-5-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs/{orgId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-0-0-5-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdSellerSendItems/{sendItemId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "12-0-0-5-3"
                                    }
                                ],
                                "checked": false,
                                "key": "12-0-0-5-0",
                                "id": "P0044"
                            }
                        ],
                        "checked": false,
                        "key": "12-0-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "12-0-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10013-002",
                "menuCode": "10013-002",
                "menuParentId": "10013",
                "icon": null,
                "menuSort": 2,
                "name": "部门仓库管理",
                "level": 2,
                "anchor": "#pcs/depots",
                "functions": [
                    {
                        "functionId": "F0007",
                        "functionName": "部门仓库管理",
                        "operations": [
                            {
                                "opId": "P0047",
                                "opName": "部门仓库查看",
                                "opSort": "P0047",
                                "elementClass": "acl_view_pcsDepot,acl_view_pcsDepotArea,acl_view_pcsDepotShelf",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/depotId,{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/areaId,{areaId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/areaId,{areaId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-0-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-0-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-0-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-0-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-0-9"
                                    },
                                    {
                                        "serviceUrl": "yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-0-10"
                                    }
                                ],
                                "checked": false,
                                "key": "12-1-0-0-0",
                                "id": "P0047"
                            },
                            {
                                "opId": "P0051",
                                "opName": "部门仓库提交",
                                "opSort": "P0051",
                                "elementClass": "acl_commitEntity_pcsDepot",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/depotId,{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/areaId,{areaId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/{depotId}/checkState/commited",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "12-1-0-1-6"
                                    }
                                ],
                                "checked": false,
                                "key": "12-1-0-1-0",
                                "id": "P0051"
                            },
                            {
                                "opId": "P0283",
                                "opName": "部门仓库撤回",
                                "opSort": "P0283",
                                "elementClass": "acl_cancelCommit_pcsDepot",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/depotId,{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/areaId,{areaId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-2-2"
                                    }
                                ],
                                "checked": false,
                                "key": "12-1-0-2-0",
                                "id": "P0283"
                            },
                            {
                                "opId": "P0049",
                                "opName": "部门仓库编辑",
                                "opSort": "P0049",
                                "elementClass": "acl_edit_pcsDepot,acl_edit_pcsDepotArea,acl_edit_pcsDepotShelf,acl_view_pcsDepotArea,acl_view_pcsDepotShelf,acl_add_pcsDepotShelf,acl_add_pcsDepotArea",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/depotId,{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/{shelfId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "12-1-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/PcsDepts/byUse",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/areaId,{areaId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-3-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/areaId,{areaId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-3-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/{areaId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "12-1-0-3-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-3-7"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-3-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-3-9"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "12-1-0-3-10"
                                    }
                                ],
                                "checked": false,
                                "key": "12-1-0-3-0",
                                "id": "P0049"
                            },
                            {
                                "opId": "P0048",
                                "opName": "部门仓库增加",
                                "opSort": "P0048",
                                "elementClass": "acl_add_pcsDepot,acl_add_pcsDepotArea,acl_add_pcsDepotShelf,acl_view_pcsDepotArea,acl_view_pcsDepotShelf,acl_edit_pcsDepotArea,acl_edit_pcsDepotShelf",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "12-1-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "12-1-0-4-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/areaId,{areaId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-4-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/areaId,{areaId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-4-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "12-1-0-4-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/{areaId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "12-1-0-4-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-4-6"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-4-7"
                                    },
                                    {
                                        "serviceUrl": "yard/pcs/pcsDepots/{depotId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-1-0-4-8"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "12-1-0-4-9"
                                    }
                                ],
                                "checked": false,
                                "key": "12-1-0-4-0",
                                "id": "P0048"
                            }
                        ],
                        "checked": false,
                        "key": "12-1-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "12-1-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10013-004",
                "menuCode": "10013-004",
                "menuParentId": "10013",
                "icon": null,
                "menuSort": 4,
                "name": "角色权限管理",
                "level": 2,
                "anchor": "#pcs/roles",
                "functions": [
                    {
                        "functionId": "F0009",
                        "functionName": "角色权限管理",
                        "operations": [
                            {
                                "opId": "P0065",
                                "opName": "角色权限管理批量删除",
                                "opSort": "P0065",
                                "elementClass": "acl_deleteEntitis_pcsRoleOp",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoles",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoles/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoleTypes/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-0-2"
                                    }
                                ],
                                "checked": false,
                                "key": "12-2-0-0-0",
                                "id": "P0065"
                            },
                            {
                                "opId": "P0061",
                                "opName": "角色权限查看",
                                "opSort": "P0061",
                                "elementClass": "acl_view_pcsRole",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoles/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoleOps/roleId",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoles",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoleTypes/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-1-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/sysSystemFunctionOpViews/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-1-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoleOps/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-1-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoleOps",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-1-6"
                                    }
                                ],
                                "checked": false,
                                "key": "12-2-0-1-0",
                                "id": "P0061"
                            },
                            {
                                "opId": "P0062",
                                "opName": "角色权限编辑",
                                "opSort": "P0062",
                                "elementClass": "acl_edit_pcsRole,acl_add_pcsRoleOp,acl_delete_pcsRoleOp,acl_view_pcsRoleOp",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoles",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoles/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/sysSystemFunctionOpViews",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoleOps",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoleOps/roleId,{roleId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-2-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoleOps/{roleId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-2-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoles",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "12-2-0-2-6"
                                    }
                                ],
                                "checked": false,
                                "key": "12-2-0-2-0",
                                "id": "P0062"
                            },
                            {
                                "opId": "P0063",
                                "opName": "角色权限删除",
                                "opSort": "P0063",
                                "elementClass": "acl_delete_pcsRole",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoles",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoles/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoleTypeOps/{id}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "12-2-0-3-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoleOps/{id}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "12-2-0-3-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoles/{roleId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "12-2-0-3-4"
                                    }
                                ],
                                "checked": false,
                                "key": "12-2-0-3-0",
                                "id": "P0063"
                            },
                            {
                                "opId": "P0064",
                                "opName": "角色权限增加",
                                "opSort": "P0064",
                                "elementClass": "acl_add_pcsRole,acl_add_pcsRoleOp,acl_delete_pcsRoleOp,acl_view_pcsRoleOp",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoles/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoles",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-4-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoleTypes/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-4-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoleOps/{id}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-2-0-4-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoles",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "12-2-0-4-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoleOps",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "12-2-0-4-5"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoles",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "12-2-0-4-6"
                                    }
                                ],
                                "checked": false,
                                "key": "12-2-0-4-0",
                                "id": "P0064"
                            }
                        ],
                        "checked": false,
                        "key": "12-2-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "12-2-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10013-005",
                "menuCode": "10013-005",
                "menuParentId": "10013",
                "icon": null,
                "menuSort": 5,
                "name": "业务用户管理",
                "level": 2,
                "anchor": "#pcs/users",
                "functions": [
                    {
                        "functionId": "F0010",
                        "functionName": "业务用户管理",
                        "operations": [
                            {
                                "opId": "P0661",
                                "opName": "业务用户权限刷新",
                                "opSort": "P0661",
                                "elementClass": "acl_refreshAuthorty_pcsUser",
                                "webApis": [],
                                "checked": false,
                                "key": "12-3-0-0-0",
                                "id": "P0661"
                            },
                            {
                                "opId": "P0068",
                                "opName": "业务用户查看",
                                "opSort": "P0068",
                                "elementClass": "acl_view_pcsUser",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUserRoles/userId,{userId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-3-0-1-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-3-0-1-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsOrgs",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-3-0-1-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsRoles/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-3-0-1-3"
                                    }
                                ],
                                "checked": false,
                                "key": "12-3-0-1-0",
                                "id": "P0068"
                            },
                            {
                                "opId": "P0070",
                                "opName": "业务用户增加",
                                "opSort": "P0070",
                                "elementClass": "acl_add_pcsUser",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUserRoles",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "12-3-0-2-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUserRoles/{id}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-3-0-2-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "12-3-0-2-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-3-0-2-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "12-3-0-2-4"
                                    }
                                ],
                                "checked": false,
                                "key": "12-3-0-2-0",
                                "id": "P0070"
                            },
                            {
                                "opId": "P0071",
                                "opName": "业务用户删除",
                                "opSort": "P0071",
                                "elementClass": "acl_delete_pcsUser",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-3-0-3-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUserRoles/{id}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "12-3-0-3-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers/{userId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "12-3-0-3-2"
                                    }
                                ],
                                "checked": false,
                                "key": "12-3-0-3-0",
                                "id": "P0071"
                            },
                            {
                                "opId": "P0069",
                                "opName": "业务用户编辑",
                                "opSort": "P0069",
                                "elementClass": "acl_edit_pcsUser,acl_add_pcsUserRole,acl_delete_pcsUserRole,acl_view_pcsUserRole",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepts/{deptId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-3-0-4-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers/{userId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "12-3-0-4-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUserRoles/userId,{userId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "12-3-0-4-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUsers/{userId}",
                                        "serviceMethod": "PUT",
                                        "checked": false,
                                        "key": "12-3-0-4-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsUserRoles",
                                        "serviceMethod": "POST",
                                        "checked": false,
                                        "key": "12-3-0-4-4"
                                    }
                                ],
                                "checked": false,
                                "key": "12-3-0-4-0",
                                "id": "P0069"
                            }
                        ],
                        "checked": false,
                        "key": "12-3-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "12-3-0-0-0"
            }
        ],
        "topMenu": true,
        "open": false,
        "checked": false,
        "key": "12-0-0-0-0"
    },
    {
        "systemName": "收货系统",
        "menuId": "10014",
        "menuCode": "10014",
        "menuParentId": "-1",
        "icon": "fa-exclamation-triangle",
        "menuSort": 14,
        "name": "异常数据管理",
        "level": 1,
        "anchor": null,
        "functions": null,
        "children": [
            {
                "systemName": "收货系统",
                "menuId": "10014-001",
                "menuCode": "10014-001",
                "menuParentId": "10014",
                "icon": null,
                "menuSort": 1,
                "name": "错误日志管理",
                "level": 2,
                "anchor": "#basics/loggingEvents",
                "functions": [
                    {
                        "functionId": "F0075",
                        "functionName": "错误日志管理",
                        "operations": [
                            {
                                "opId": "P0663",
                                "opName": "错误日志管理查看",
                                "opSort": "P0663",
                                "elementClass": "acl_view_loggingEvent",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/loggingEvents",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "13-0-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/loggingEvents/{eventId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "13-0-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/loggingEvents/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "13-0-0-0-2"
                                    }
                                ],
                                "checked": false,
                                "key": "13-0-0-0-0",
                                "id": "P0663"
                            },
                            {
                                "opId": "P0664",
                                "opName": "错误日志管理删除",
                                "opSort": "P0664",
                                "elementClass": "acl_delete_loggingEvent",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/loggingEvents/{eventId}",
                                        "serviceMethod": "DELETE",
                                        "checked": false,
                                        "key": "13-0-0-1-0"
                                    }
                                ],
                                "checked": false,
                                "key": "13-0-0-1-0",
                                "id": "P0664"
                            }
                        ],
                        "checked": false,
                        "key": "13-0-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "13-0-0-0-0"
            },
            {
                "systemName": "收货系统",
                "menuId": "10014-002",
                "menuCode": "10014-002",
                "menuParentId": "10014",
                "icon": null,
                "menuSort": 2,
                "name": "数据检查报告",
                "level": 2,
                "anchor": "#basics/sysDataCheckTaskReports",
                "functions": [
                    {
                        "functionId": "F0076",
                        "functionName": "数据检查报告",
                        "operations": [
                            {
                                "opId": "P0666",
                                "opName": "数据检查报告查看",
                                "opSort": "P0666",
                                "elementClass": "acl_view_sysDataCheckTaskReport",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/sysDataCheckTaskReports",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "13-1-0-0-0"
                                    },
                                    {
                                        "serviceUrl": "/yard/sysDataCheckTaskReports/{id}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "13-1-0-0-1"
                                    },
                                    {
                                        "serviceUrl": "/yard/sysDataCheckTaskReports/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "13-1-0-0-2"
                                    },
                                    {
                                        "serviceUrl": "/yard/sysDataCheckTasks/ids,{ids}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "13-1-0-0-3"
                                    },
                                    {
                                        "serviceUrl": "/yard/sysDataCheckTaskItems/{reportId}",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "13-1-0-0-4"
                                    },
                                    {
                                        "serviceUrl": "/yard/sysDataCheckTaskItems/{reportId}/count",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "13-1-0-0-5"
                                    }
                                ],
                                "checked": false,
                                "key": "13-1-0-0-0",
                                "id": "P0666"
                            },
                            {
                                "opId": "P0667",
                                "opName": "数据检查任务执行",
                                "opSort": "P0667",
                                "elementClass": "acl_checkData_sysCheckDataTask",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/sysDataCheckTaskManualStart",
                                        "serviceMethod": "GET",
                                        "checked": false,
                                        "key": "13-1-0-1-0"
                                    }
                                ],
                                "checked": false,
                                "key": "13-1-0-1-0",
                                "id": "P0667"
                            }
                        ],
                        "checked": false,
                        "key": "13-1-0-0-0"
                    }
                ],
                "children": [],
                "topMenu": false,
                "checked": false,
                "key": "13-1-0-0-0"
            }
        ],
        "topMenu": true,
        "open": false,
        "checked": false,
        "key": "13-0-0-0-0"
    }
]
  }
}



