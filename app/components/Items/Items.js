import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import ChildrenItems from './ChildrenItems'

import Dialog from 'material-ui/lib/dialog'

const style = {
  raisedButton: {
    margin: 10
  },
  dialog: {
    width: '80%',
    maxWidth: 'none',
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
          array={['functionId', 'functionName']}
          items={items}
          forward={false}
          _handleChecked={itemsActions.handleSelected}
          itemsActions={itemsActions}
        />

          {
            items.map((item, i) =>
              <ChildrenItems
                key={i}
                items={item.operations}
                forward={true}
                array={['opId', 'opSort', 'opName', 'elementClass']}
                _handleChecked={itemsActions.operationsSeleted}
                itemsActions={itemsActions}
              />
            )
          }


        <div className="exp-imp">
          <RaisedButton label="导 入" secondary={true} style={style.raisedButton} />
          <RaisedButton label="导 出" secondary={true} style={style.raisedButton} />
          <RaisedButton label="保 存" primary={true} style={style.raisedButton} />
        </div>
      </div>
    )
  }
}
