import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import ChildrenItems from './ChildrenItems'

const style = {
  raisedButton: {
    margin: 10
  }
}

export default class Items extends Component {

  constructor(props) {
    super(props)
  }    

  render() {
    const { items, itemsActions } = this.props
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
          <RaisedButton label="保 存" primary={true} style={style.raisedButton} />
        </div>
      </div>
    )
  }
}
