import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import ChildrenItems from './ChildrenItems'

// const remote = window.require('electron').remote
// const fs = remote.require('fs')
// const {dialog} = window.require('electron').remote

const style = {
  raisedButton: {
    margin: 10
  }
}

export default class Items extends Component {
  componentDidMount() {
    window.addEventListener('keyup', e => {   //监听键盘事件
      e.preventDefault()
      if(e.ctrlKey && e.which === 83) {       //ctrl + s为保存
        this.writeItemsFile()
      }else if (e.ctrlKey && e.which === 69){ //ctrl + e为导出
        this.exportItemsFile()
      }
    })
  }

  writeItemsFile() {
    const data = this.props.menus
    console.log(data)
    const dialogSave = confirm('确定覆盖menus.json?')
    // if (dialogSave) {
    //   data = JSON.stringify(data)
    //   fs.writeFileSync('./menus.json', data, 'utf-8', err => {
    //     err ? err : alert('保存成功！')
    //   })
    // }
  }

  exportItemsFile() {
    //todo 组件和逻辑尽量分离 2016.12.26
    // const data = this.props.menus
    // data = JSON.stringify(data.filter(item => item.checked)
    //   .map(item => Object.assign({}, item, {
    //     children: item.children.filter(child => child.checked)
    //       .map(child => Object.assign({}, child, {
    //         functions: child.functions.filter(func => func.checked)
    //           .map(func => Object.assign({}, func, {
    //             operations: func.operations.filter(oper => oper.checked)
    //               .map(oper => Object.assign({}, oper, {
    //                 webApis: oper.webApis.filter(api => api.checked)
    //               }))
    //           }))
    //       }))
    //   })))

    // dialog.showSaveDialog({
    //   filters: [
    //     { name: 'Json', extensions: ['json'] },
    //     { name: 'All Files', extensions: ['*'] }
    //   ]
    // }, fileName => {
    //   if (fileName === undefined) {
    //     alert("请输入文件名！")
    //     return
    //   }
    //   fs.writeFile(fileName, data, err => {
    //     if (err) {
    //       alert("导出失败 " + err.message)
    //       return
    //     }
    //     alert("导出成功！")
    //   })
    // })
  }

  render() {
    const { items, menus, itemsActions, menusActions } = this.props
    return (
      <div>

        <ChildrenItems
          items={items}
          menus={menus}
          forward={false}
          itemsActions={itemsActions}
          menusActions={menusActions}
          />

        <div className="exp-imp">
          <RaisedButton label="导 入" secondary={true} style={style.raisedButton} onTouchTap={() => menusActions.importItemsFile()} />
          <RaisedButton label="导 出" secondary={true} style={style.raisedButton} onTouchTap={this.exportItemsFile.bind(this)} />
          <RaisedButton label="保 存" primary={true} style={style.raisedButton} onTouchTap={this.writeItemsFile.bind(this)} />
        </div>
      </div>
    )
  }
}
