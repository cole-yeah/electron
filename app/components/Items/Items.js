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
      // fs.writeFileSync('./test.json', data, 'utf-8')  
      // const aa = data.filter(item => item.checked===true)
      // const bb = aa.map(xi => xi.children.filter(child => child.checked === true))//导出勾选的数组应该是先从最底下的开始遍历，一层一层遍历，最后合并成一个新的数组
      // const cc = bb.map(i => i.map(ha => ha.functions.filter(func => func.checked === true)))
      // const dd = cc.map(he => he.operations.filter(oper => oper.checked === true))
      // const ee = dd.map(ga => ga.webApis.filter(api => api.checked === true))

      // let kk = data.filter(item => item.checked === true)
      // console.log(kk)

      let haha = data.filter(item => item.checked === true?
        item.children.filter(child => child.checked === true?
          child.functions.filter(func => func.checked === true?
            func.operations.filter(oper => oper.checked === true?
              oper.webApis.filter(api => {api.checked === true}
              ):''
            ):''
          ):''
        ):''
      )
      console.log(haha)

      // data.filter(item => item)

      // console.log(aa)
      // console.log(bb)
      // console.log(cc)
      // console.log(dd)
      // console.log(ee)
      // console.log(data.filter(item => item.checked === true?item.children.filter(child => child.checked === true):''))

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
