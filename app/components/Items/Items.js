import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import ChildrenItems from './ChildrenItems'

const remote = window.require('electron').remote
const fs = remote.require('fs')


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
      data = JSON.stringify(data)
      // console.log(typeof(data))
      // console.log(data) //todo TypeError: Cannot read property 'type' of undefined
      fs.writeFileSync('./test.json', data, 'utf-8')  
  }    

  render() {
    const { items, menus, itemsActions } = this.props
    return (
      <div>

        <ChildrenItems
          items={items}
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
