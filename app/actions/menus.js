// const remote = window.require('electron').remote
// const fs = remote.require('fs')

export const RECEIVE_MENUS = 'RECEIVE_MENUS'
export const OPEN_MENUS = 'OPEN_MENUS'
export const CHECKED_ALL = 'CHECKED_ALL'
export const CHECKED_MENUS = 'CHECKED_MENUS'
export const SELECTED_MENUS = 'SELECTED_MENUS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const COMBINE_ITEMS = 'COMBINE_ITEMS'
export const EDIT_FIRST_MENUS = 'EDIT_FIRST_MENUS'

export function openMenus(menuId) {
  return {
    type: OPEN_MENUS,
    menuId,
  }
}

export function checkedAll(menuId, id) {
  return {
    type: CHECKED_ALL,
    menuId,
    id,
  }
}

export function checkedMenus(menuParentId, menuId) {
  return {
    type: CHECKED_MENUS,
    menuId,
    menuParentId
  }
}

export function receiveItems(id,menus) {
  return {
    type: RECEIVE_ITEMS,
    items: menus,
    id,
  }
}

export function dispatchActions(menuId, items) {
  return dispatch => {
    dispatch(selectedMenus(menuId))
    dispatch(receiveItems(menuId,items))
  }
}

export function selectedMenus(menuId) {
  return {
    type: SELECTED_MENUS,
    menuId,
  }
}

export function combineItems(id, items) {
  return {
    type: COMBINE_ITEMS,
    items,
    id
  }
}

export function editFirstMenus() {
  return {
    type: EDIT_FIRST_MENUS,
  }
}

//读取本地json文件获取列表,根据参数first,second 索引出点击菜单下的数组
// export function readItemsFile() {
//   return dispatch => {
//     return (fs.readFile('./test.json', 'utf-8', (err, data) => {
//         data = JSON.parse(data)
//         // const items = (data)
//         dispatch(receiveMenus(data))
//     }))
//   }
// }

//写入本地json文件
// export function writeItemsFile(data) {
//     return (fs.writeFile('./test.json', data) {
//         console.log('Ok')
//     })
// } 

//获取列表成功action
export function receiveMenus() {
  console.log('获取data数据')
  return {
    type: RECEIVE_MENUS,
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
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/{workbookId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/count",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0002",
                                "opName": "字典数据管理新增",
                                "opSort": "P0002",
                                "elementClass": "acl_add_ydsWorkBook",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/{workbookId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/count",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0003",
                                "opName": "字典数据管理编辑",
                                "opSort": "P0003",
                                "elementClass": "acl_edit_ydsWorkBook",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/{workbookId}",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/{workbookId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/{workbookId}",
                                        "serviceMethod": "PUT"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "children": [],
                "topMenu": false
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
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/byUse",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0009",
                                "opName": "标准产品管理新增",
                                "opSort": "P0009",
                                "elementClass": "acl_add_ydsGood",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/count",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0010",
                                "opName": "标准产品管理编辑",
                                "opSort": "P0010",
                                "elementClass": "acl_edit_ydsGood",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "PUT"
                                    }
                                ]
                            },
                            {
                                "opId": "P0012",
                                "opName": "标准产品管理提交",
                                "opSort": "P0012",
                                "elementClass": "acl_commitEntity_ydsGood",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}/checkState/commited",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}/checkState/commited",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0015",
                                "opName": "标准产品管理导出",
                                "opSort": "P0015",
                                "elementClass": "acl_export_ydsGood",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ydsgoodsExcel",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0276",
                                "opName": "标准产品管理撤回",
                                "opSort": "P0276",
                                "elementClass": "acl_cancelCommit_ydsGood",
                                "webApis": []
                            },
                            {
                                "opId": "P0279",
                                "opName": "标准产品批量提交",
                                "opSort": "P0279",
                                "elementClass": "acl_commitEntities_ydsGood",
                                "webApis": []
                            },
                            {
                                "opId": "P0013",
                                "opName": "标准产品管理同步",
                                "opSort": "P0013",
                                "elementClass": "acl_view_ydsGood,acl_sync_ysdGood",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}/checkState/reviewed",
                                        "serviceMethod": "PUT"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "children": [],
                "topMenu": false
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
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0107",
                                "opName": "标准产品批次新增",
                                "opSort": "P0107",
                                "elementClass": "acl_add_ydsGoodsLot",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0106",
                                "opName": "标准产品批次编辑",
                                "opSort": "P0106",
                                "elementClass": "acl_edit_ydsGoodsLot",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots/{goodsLotId}",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsLots",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "children": [],
                "topMenu": false
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
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{goodsId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/byUse",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/byUse",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0018",
                                "opName": "企业产品管理新增",
                                "opSort": "P0018",
                                "elementClass": "acl_add_ydsEdsGoods",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/byUse",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{goodsId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/byUse",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/byUse/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0020",
                                "opName": "企业产品管理提交",
                                "opSort": "P0020",
                                "elementClass": "acl_commitEntity_ydsEdsGoods",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{ydsEdsGoodsId}/checkState/commited",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{goodsId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{goodsId}/checkState/commited",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/byUse",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0023",
                                "opName": "企业产品管理导出",
                                "opSort": "P0023",
                                "elementClass": "acl_export_ydsEdsGoods,acl_view_ydsEdsGoods",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/Excel",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/count",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0284",
                                "opName": "企业产品管理撤回",
                                "opSort": "P0284",
                                "elementClass": "acl_cancelCommit_ydsEdsGoods",
                                "webApis": []
                            },
                            {
                                "opId": "P0280",
                                "opName": "企业产品批量提交",
                                "opSort": "P0280",
                                "elementClass": "acl_commitEntities_ydsEdsGoods",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{ydsEdsGoodsId}/checkState/commited",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{edsGoodsId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/byUse",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0017",
                                "opName": "企业产品管理编辑",
                                "opSort": "P0017",
                                "elementClass": "acl_edit_ydsEdsGoods",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{goodsId}",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{goodsId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsWorkBooks/byUse",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/byUse/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/byUse",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{edsGoodsId}",
                                        "serviceMethod": "PUT"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "children": [],
                "topMenu": false
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
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdReceives",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/ids,{ids}",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0103",
                                "opName": "企业产品批次编辑",
                                "opSort": "P0103",
                                "elementClass": "acl_edit_ydsEdsGoodsLot",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/{edsGoodsLotId}",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoods/{edsGoodsId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/count",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0104",
                                "opName": "企业产品批次新增",
                                "opSort": "P0104",
                                "elementClass": "acl_add_ydsEdsGoodsLot",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsEdsGoodsLots",
                                        "serviceMethod": "POST"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "children": [],
                "topMenu": false
            }
        ],
        "topMenu": true
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
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0241",
                                "opName": "请领流向策略删除",
                                "opSort": "P0241",
                                "elementClass": "acl_delete_spdDepotRoute",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes/{routeId}",
                                        "serviceMethod": "DELETE"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes/count",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0240",
                                "opName": "请领流向策略编辑",
                                "opSort": "P0240",
                                "elementClass": "acl_edit_spdDepotRoute",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0239",
                                "opName": "请领流向策略新增",
                                "opSort": "P0239",
                                "elementClass": "acl_add_spdDepotRoute",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotRoutes",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUse",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byUse/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byTakePoint/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byTakePoint",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "children": [],
                "topMenu": false
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
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes/count",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0645",
                                "opName": "使用类型管理增加",
                                "opSort": "P0645",
                                "elementClass": "acl_add_spdUsedType",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotViews/byUsedDepot",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepts/orgId,{orgId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotViews/byUsedDepot",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotViews/byUsedDepot/count",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0646",
                                "opName": "使用类型管理编辑",
                                "opSort": "P0646",
                                "elementClass": "acl_edit_spdUsedType",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes/{usedType}",
                                        "serviceMethod": "PUT"
                                    }
                                ]
                            },
                            {
                                "opId": "P0647",
                                "opName": "使用类型管理删除",
                                "opSort": "P0647",
                                "elementClass": "acl_delete_spdUsedType",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes/{usedType}",
                                        "serviceMethod": "DELETE"
                                    }
                                ]
                            },
                            {
                                "opId": "P0648",
                                "opName": "使用类型管理提交",
                                "opSort": "P0648",
                                "elementClass": "acl_commitEntity_spdUsedType",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes/{usedType}/checkState/commited",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdUsedTypes/{usedType}",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0649",
                                "opName": "使用类型管理撤回",
                                "opSort": "P0649",
                                "elementClass": "acl_cancelCommit_spdUsedType",
                                "webApis": []
                            }
                        ]
                    }
                ],
                "children": [],
                "topMenu": false
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
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/SpdDepotCardByStockTotalViews/ids,{ids}",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0109",
                                "opName": "仓库帐页管理编辑",
                                "opSort": "P0109",
                                "elementClass": "acl_edit_spdDepotCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/byLoseSheft,{depotId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/byLoseSheft,{depotId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/{shelfId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/SpdDepotCardByStockTotalViews/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/byWMGDepotShelf,{depotId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/byWMGDepotShelf,{depotId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/WMGDepotShelf",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/WMGDepotShelf/count",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0110",
                                "opName": "仓库帐页管理新增",
                                "opSort": "P0110",
                                "elementClass": "acl_add_spdDepotCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/WMGDepotShelf/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/WMGDepotShelf",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/SpdDepotCardByStockTotalViews/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepotAreas/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/byLoseSheft,{depotId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/byLoseSheft,{depotId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/byWMGDepotShelf,{depotId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/byWMGDepotShelf,{depotId}",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0111",
                                "opName": "仓库帐页管理删除",
                                "opSort": "P0111",
                                "elementClass": "acl_delete_spdDepotCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/{cardId}",
                                        "serviceMethod": "DELETE"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/SpdDepotCardByStockTotalViews/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0307",
                                "opName": "仓库帐页管理撤回",
                                "opSort": "P0307",
                                "elementClass": "acl_cancelCommit_spdDepotCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/SpdDepotCardByStockTotalViews/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/{cardId}/checkState/completed",
                                        "serviceMethod": "PUT"
                                    }
                                ]
                            },
                            {
                                "opId": "P0277",
                                "opName": "仓库帐页管理提交",
                                "opSort": "P0277",
                                "elementClass": "acl_commitEntity_spdDepotCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/{cardId}/checkState/commited",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/depotShelfs/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/SpdDepotCardByStockTotalViews/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/{cardId}",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "children": [],
                "topMenu": false
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
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "PUT"
                                    }
                                ]
                            },
                            {
                                "opId": "P0454",
                                "opName": "定数帐页管理新增",
                                "opSort": "P0454",
                                "elementClass": "acl_add_spdDepotFixedCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byGoodsCard,{goodsId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/byUsed",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/byUsed/count",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0455",
                                "opName": "定数帐页管理删除",
                                "opSort": "P0455",
                                "elementClass": "acl_delete_spdDepotFixedCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/{cardId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/{fixedId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/{cardFixedId}",
                                        "serviceMethod": "DELETE"
                                    }
                                ]
                            },
                            {
                                "opId": "P0456",
                                "opName": "定数帐页管理提交",
                                "opSort": "P0456",
                                "elementClass": "acl_commitEntity_spdDepotFixedCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/{cardFixedId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/{cardFixedId}/checkState/commited",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/{cardFixedId}/checkState/commited",
                                        "serviceMethod": "PUT"
                                    }
                                ]
                            },
                            {
                                "opId": "P0457",
                                "opName": "定数帐页管理撤回",
                                "opSort": "P0457",
                                "elementClass": "acl_cancelCommit_spdDepotFixedCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/{cardFixedId}",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0446",
                                "opName": "定数帐页管理查看",
                                "opSort": "P0446",
                                "elementClass": "acl_view_spdDepotFixedCard",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/{fixedId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byGoodsCard,{goodsId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byGoodsCard,{goodsId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/{cardFixedId}",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "children": [],
                "topMenu": false
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
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "PUT"
                                    }
                                ]
                            },
                            {
                                "opId": "P0449",
                                "opName": "定数配置管理新增",
                                "opSort": "P0449",
                                "elementClass": "acl_add_spdFixed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "POST"
                                    }
                                ]
                            },
                            {
                                "opId": "P0450",
                                "opName": "定数配置管理删除",
                                "opSort": "P0450",
                                "elementClass": "acl_delete_spdFixed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/{fixedId}",
                                        "serviceMethod": "DELETE"
                                    }
                                ]
                            },
                            {
                                "opId": "P0451",
                                "opName": "定数配置管理提交",
                                "opSort": "P0451",
                                "elementClass": "acl_commitEntity_spdFixed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/{fixedId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/{fixedId}/checkState/commited",
                                        "serviceMethod": "PUT"
                                    }
                                ]
                            },
                            {
                                "opId": "P0452",
                                "opName": "定数配置管理撤回",
                                "opSort": "P0452",
                                "elementClass": "acl_cancelCommit_spdFixed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/{fixedId}",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0445",
                                "opName": "定数配置管理查看",
                                "opSort": "P0445",
                                "elementClass": "acl_view_spdFixed",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdFixeds",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "children": [],
                "topMenu": false
            }
        ],
        "topMenu": true
    },
    {
        "systemName": "收货系统",
        "menuId": "10003",
        "menuCode": "10003",
        "menuParentId": "-1",
        "icon": "fa-cart-arrow-down",
        "menuSort": 3,
        "name": "采购业务管理",
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
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0078",
                                "opName": "物资价格维护删除",
                                "opSort": "P0078",
                                "elementClass": "acl_delete_ydsGoodsInfo",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/{goodsId}",
                                        "serviceMethod": "DELETE"
                                    }
                                ]
                            },
                            {
                                "opId": "P0079",
                                "opName": "物资价格维护编辑",
                                "opSort": "P0079",
                                "elementClass": "acl_edit_ydsGoodsInfo",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/{goodsId}",
                                        "serviceMethod": "PUT"
                                    }
                                ]
                            },
                            {
                                "opId": "P0080",
                                "opName": "物资价格维护查看",
                                "opSort": "P0080",
                                "elementClass": "acl_view_ydsGoodsInfo",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoodsInfos",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "children": [],
                "topMenu": false
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
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/{conId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/conId,{conId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/{conId}",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/conId,{conId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/{conItemId}",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/PcsDepts/byProcurementDept",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0084",
                                "opName": "采购合同管理新增",
                                "opSort": "P0084",
                                "elementClass": "acl_add_spdPoContract,acl_add_spdPoContractItem,acl_view_spdPoContractItem,acl_edit_spdPoContractItem,acl_delete_spdPoContractItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/PcsDepts/byProcurementType",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/PcsDepts/byUse",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/PcsDepts/byProcurementDept",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0085",
                                "opName": "采购合同管理删除",
                                "opSort": "P0085",
                                "elementClass": "acl_delete_spdPoContract,acl_delete_spdPoContractItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/{conId}",
                                        "serviceMethod": "DELETE"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/conId,{conId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/{conItemId}",
                                        "serviceMethod": "DELETE"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0086",
                                "opName": "采购合同管理提交",
                                "opSort": "P0086",
                                "elementClass": "acl_commitEntity_spdPoContract",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/{conId}/checkState/commited",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/{conId}",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0087",
                                "opName": "采购合同管理审核",
                                "opSort": "P0087",
                                "elementClass": "acl_reviewEntity_spdPoContract",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/{conId}",
                                        "serviceMethod": "PUT"
                                    }
                                ]
                            },
                            {
                                "opId": "P0088",
                                "opName": "采购合同管理撤回",
                                "opSort": "P0088",
                                "elementClass": "acl_cancelCommit_spdPoContract",
                                "webApis": []
                            },
                            {
                                "opId": "P0082",
                                "opName": "采购合同管理查看",
                                "opSort": "P0082",
                                "elementClass": "acl_view_spdPoContract,acl_view_spdPoContractItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/PcsDepts/byProcurementType",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/conId,{conId}",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "children": [],
                "topMenu": false
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
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/{adjustId}",
                                        "serviceMethod": "PUT"
                                    }
                                ]
                            },
                            {
                                "opId": "P0480",
                                "opName": "配额调节管理删除",
                                "opSort": "P0480",
                                "elementClass": "acl_edit_spdPoContractItemAdjust,acl_delete_spdPoContractAdjust",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/{adjustId}",
                                        "serviceMethod": "DELETE"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/ids,{ids}",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0479",
                                "opName": "配额调节管理新增",
                                "opSort": "P0479",
                                "elementClass": "acl_edit_spdPoContractItemAdjust,acl_add_spdPoContractAdjust",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0481",
                                "opName": "配额调节管理提交",
                                "opSort": "P0481",
                                "elementClass": "acl_edit_spdPoContractItemAdjust,acl_commitEntity_spdPoContractAdjust",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/{adjustId}/checkState/commited",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/{adjustId}",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0482",
                                "opName": "配额调节管理审核",
                                "opSort": "P0482",
                                "elementClass": "acl_edit_spdPoContractItemAdjust,acl_reviewEntity_spdPoContractAdjust",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/{adjustId}/checkState/reviewed",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/{adjustId}",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0098",
                                "opName": "配额调节管理查看",
                                "opSort": "P0098",
                                "elementClass": "acl_view_spdPoContractItemAdjust,acl_view_spdPoContractAdjust",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractItems/byAdjust",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContractAdjusts/conItemId,{conItemId}",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "children": [],
                "topMenu": false
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
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/{cardId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/{poId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0090",
                                "opName": "采购订单管理编辑",
                                "opSort": "P0090",
                                "elementClass": "acl_edit_spdPurch,acl_edit_spdPurchItem,acl_view_spdPurchItem,acl_add_spdPurchItem,acl_delete_spdPurchItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/poId,{poId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byPurchase/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byPurchase",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPoContracts",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/{poId}",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/{poItemId}",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/{cardId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsContractViews/{depotId},{supplierOrg}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsContractViews/{depotId},{supplierOrg}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/poId,{poId}/count",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0091",
                                "opName": "采购订单管理增加",
                                "opSort": "P0091",
                                "elementClass": "acl_add_spdPurch,acl_add_spdPurchItem,acl_view_spdPurchItem,acl_edit_spdPurchItem,acl_delete_spdPurchItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byPurchase",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byPurchase/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byReceivePoint,{ownerOrgId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byOwnerHospital,{ownerOrgId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byOwnerDepot,{depotId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byOwnerDepot,{depotId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsContractViews/{depotId},{supplierOrg}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdGoodsContractViews/{depotId},{supplierOrg}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/poId,{poId}/count",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0092",
                                "opName": "采购订单管理删除",
                                "opSort": "P0092",
                                "elementClass": "acl_delete_spdPurch,acl_delete_spdPurchItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/{poId}",
                                        "serviceMethod": "DELETE"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/{poItemId}",
                                        "serviceMethod": "DELETE"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/poId,{poId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byPurchase/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byPurchase",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0094",
                                "opName": "采购订单管理审核",
                                "opSort": "P0094",
                                "elementClass": "acl_reviewEntity_spdPurch",
                                "webApis": []
                            },
                            {
                                "opId": "P0306",
                                "opName": "采购订单管理打印",
                                "opSort": "P0306",
                                "elementClass": "acl_export_PurchItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/detail/poId,{poId}/pdf",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/detail/poId,{poId}/pdf",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "children": [],
                "topMenu": false
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
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byStocking",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byStocking/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byOwnerSupplier,{ownerOrgId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/pcs/pcsDepots/byOwnerSupplier,{ownerOrgId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/{poItemId}",
                                        "serviceMethod": "PUT"
                                    }
                                ]
                            },
                            {
                                "opId": "P0259",
                                "opName": "备货业务管理编辑",
                                "opSort": "P0259",
                                "elementClass": "acl_edit_spdPurchRe,acl_edit_spdPurchItemRe,acl_view_spdPurchItemRe,acl_add_spdPurchItemRe,acl_delete_spdPurchItemRe",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byStocking",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byStocking/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/poId,{poId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/{poId}",
                                        "serviceMethod": "PUT"
                                    }
                                ]
                            },
                            {
                                "opId": "P0260",
                                "opName": "备货业务管理查看",
                                "opSort": "P0260",
                                "elementClass": "acl_view_spdPurchRe,acl_view_spdPurchItemRe",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchItems/poId,{poId}",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0261",
                                "opName": "备货业务管理审核",
                                "opSort": "P0261",
                                "elementClass": "acl_reviewEntity_spdPurchRe",
                                "webApis": []
                            },
                            {
                                "opId": "P0262",
                                "opName": "备货业务管理提交",
                                "opSort": "P0262",
                                "elementClass": "acl_commitEntity_spdPurchRe",
                                "webApis": []
                            },
                            {
                                "opId": "P0264",
                                "opName": "备货业务管理删除",
                                "opSort": "P0264",
                                "elementClass": "acl_delete_spdPurchRe,acl_delete_spdPurchItemRe",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byStocking",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdPurchs/byStocking/count",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "children": [],
                "topMenu": false
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
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems/exampleId,{exampleId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples",
                                        "serviceMethod": "GET"
                                    }
                                ]
                            },
                            {
                                "opId": "P0494",
                                "opName": "业务模版管理新增",
                                "opSort": "P0494",
                                "elementClass": "acl_add_spdBizExample,acl_add_spdBizExampleItem,acl_view_spdBizExampleItem,acl_edit_spdBizExampleItem,acl_delete _spdBizExampleItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples",
                                        "serviceMethod": "POST"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems/exampleId,{exampleId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems/exampleId,{exampleId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byUse/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotCards/byUse",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems",
                                        "serviceMethod": "POST"
                                    }
                                ]
                            },
                            {
                                "opId": "P0495",
                                "opName": "业务模版管理编辑",
                                "opSort": "P0495",
                                "elementClass": "acl_edit_spdBizExample,acl_edit_spdBizExampleItem,acl_view_spdBizExampleItem,acl_add_spdBizExampleItem,acl_delete _spdBizExampleItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems/exampleId,{exampleId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems/exampleId,{exampleId}/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/ids,{ids}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdDepotFixedCards/{cardFixedId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples/{exampleId}",
                                        "serviceMethod": "PUT"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/ydsGoods/{goodsId}",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems/{exampleItemId}",
                                        "serviceMethod": "PUT"
                                    }
                                ]
                            },
                            {
                                "opId": "P0496",
                                "opName": "业务模版管理删除",
                                "opSort": "P0496",
                                "elementClass": "acl_delete_spdBizExample,acl_delete_spdBizExampleItem",
                                "webApis": [
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples/count",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples",
                                        "serviceMethod": "GET"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExamples/{exampleId}",
                                        "serviceMethod": "DELETE"
                                    },
                                    {
                                        "serviceUrl": "/yard/spd/spdBizExampleItems/{exampleItemId}",
                                        "serviceMethod": "DELETE"
                                    }
                                ]
                            },
                            {
                                "opId": "P0497",
                                "opName": "业务模版管理提交",
                                "opSort": "P0497",
                                "elementClass": null,
                                "webApis": []
                            }
                        ]
                    }
                ],
                "children": [],
                "topMenu": false
            }
        ],
        "topMenu": true
    },
],
  }
}



