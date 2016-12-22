import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import ChildrenItems from './ChildrenItems'

// const remote = window.require('electron').remote
// const fs = remote.require('fs')

const style = {
  raisedButton: {
    margin: 10
  }
}

export default class Items extends Component {

  constructor(props) {
    super(props)
  }

  writeItemsFile(data) {
      // data = JSON.stringify(data)
      // fs.writeFileSync('./menus.json', data, 'utf-8')  
      //filter出来的只是如果第一个checked为true，那么其下面的子孙级不管true或false，都被带出来  因为filter的条件就是item.checked===xx啊,所以在这里item.checked===true?后面的也就没有任何意义了
      // const aa = data.filter(item => item.checked===true)  //选中的一级菜单
      // const bb = aa.map(a => a.children = a.children.filter(b => b.checked === true))
      // aa.map(a => a.children.filter(child => child.checked === true)) //选中的二级菜单  //导出勾选的数组应该是先从最底下的开始遍历，一层一层遍历，最后合并成一个新的数组
      // const cc = bb.map(a => a.map(b => b.functions.filter(func => func.checked === true))) //选中的functions
      // const dd = cc.map(a => a.map(b => b.map(c => c.operations.filter(oper => oper.checked === true))))  //选中的operations
      // const ee = dd.map(a => a.map(b => b.map(c => c.map(d => d.webApis.filter(api => api.checked === true))))) //选中的webApis

      // const kk = data.map(item => item.checked === true?Object.assign({}, item, {
      //   children: item.children.map(child => child.checked === true?Object.assign({}, child, {
      //     functions: child.functions.map(func => func.checked === true?Object.assign({}, func, {
      //       operations: func.operations.map(oper => oper.checked === true?Object.assign({}, oper, {
      //         webApis: oper.webApis.map(api => api.checked === true?api:'')
      //       }):null)
      //     }):null)
      //   }):null)
      // }):null)

      let kk = data.map(function(item) {
        if(item.checked === true) {
          Object.assign({}, item, {children: item.children.map(function(aa){
            if(aa.checked === true) {
              Object.assign({}, aa, {functions: aa.functions.map(function(bb){
                if(bb.checked === true) {
                  Object.assign({}, bb, {operations: bb.operations.map(function(cc){
                    cc.checked === true
                    // if(cc.checked === true) {
                    //   Object.assign({}, cc, {webApis: cc.webApis.map(function(dd){
                    //     dd.checked === true
                    //   })})
                    // }
                  })})
                }
              })})
            }
          })})
        }
      })

      console.log(kk)

      // console.log(aa)
      // console.log(bb)
      // console.log(cc)
      // console.log(dd)
      // console.log(ee)
      
      // let kk = data.map((a, i) => a.checked === true?Object.assign({}, a, a.children = bb[i]):a)



  }    

  render() {
    const { items, keys, menus, itemsActions } = this.props
    return (
      <div>

        <ChildrenItems
          items={items}
          keys={keys}
          forward={false}
          itemsActions={itemsActions}
        />

        <div className="exp-imp">
          <RaisedButton label="导 入" secondary={true} style={style.raisedButton} />
          <RaisedButton label="导 出" secondary={true} style={style.raisedButton} />
          <RaisedButton label="保 存" primary={true} style={style.raisedButton} onTouchTap={this.writeItemsFile.bind(this, menus)} />
        </div>
      </div>
    )
  }
}
