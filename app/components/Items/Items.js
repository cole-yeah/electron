import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import ChildrenItems from './ChildrenItems'

const remote = window.require('electron').remote
const fs = remote.require('fs')
const {dialog} = window.require('electron').remote

const style = {
  raisedButton: {
    margin: 10
  }
}

export default class Items extends Component {

  writeItemsFile(data) {
    data = JSON.stringify(data)
    fs.writeFileSync('./menus.json', data, 'utf-8', err => {
      err ? err : alert('保存成功！')
    })
  }

  exportItemsFile(data) {
    //完成了filter筛选，逻辑欠妥，点保存的时候不应该filter，因为如果这样那么每次新增或修改时需要保存都要去勾选这样很麻烦,这个应该放在导出上 2016.12.23
    //这个应该放在哪里呢？？ action要保持纯净 2016.12.23
    data = JSON.stringify(data.filter(item => item.checked)
      .map(item => Object.assign({}, item, {
        children: item.children.filter(child => child.checked)
          .map(child => Object.assign({}, child, {
            functions: child.functions.filter(func => func.checked)
              .map(func => Object.assign({}, func, {
                operations: func.operations.filter(oper => oper.checked)
                  .map(oper => Object.assign({}, oper, {
                    webApis: oper.webApis.filter(api => api.checked)
                  }))
              }))
          }))
      })))

    dialog.showSaveDialog({
      filters: [
        { name: 'Json', extensions: ['json'] },
        { name: 'All Files', extensions: ['*'] }
      ]
    }, fileName => {
      if (fileName === undefined) {
        alert("请输入文件名！")
        return
      }
      fs.writeFile(fileName, data, err => {
        if (err) {
          alert("导出失败 " + err.message)
          return
        }
        alert("导出成功！")
      })
    })
  }

  render() {
    const { items, keys, menus, itemsActions, menusActions } = this.props
    return (
      <div>

        <ChildrenItems
          items={items}
          keys={keys}
          forward={false}
          itemsActions={itemsActions}
          />

        <div className="exp-imp">
          <RaisedButton label="导 入" secondary={true} style={style.raisedButton} onTouchTap={() => menusActions.importItemsFile()} />
          <RaisedButton label="导 出" secondary={true} style={style.raisedButton} onTouchTap={this.exportItemsFile.bind(this, menus)} />
          <RaisedButton label="保 存" primary={true} style={style.raisedButton} onTouchTap={this.writeItemsFile.bind(this, menus)} />
        </div>
      </div>
    )
  }
}
