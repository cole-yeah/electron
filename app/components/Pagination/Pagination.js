/**
 * 分页 暂时不用
 */
import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/lib/raised-button'

const style = {
  raisedButton: {
    minWidth: 20,
    margin: 2,
  },
  span: {
    fontSize: 14
  }
}

export default class Pagination extends Component {
  render() {
    return(
      <div className="pagination">
        <RaisedButton label="<" secondary={true} disabled={true} style={style.raisedButton} />
        <RaisedButton label="1" secondary={true} disabled={true} style={style.raisedButton} />
        <RaisedButton label="2" secondary={true} disabled={false} style={style.raisedButton} />
        <RaisedButton label="3" secondary={true} disabled={false} style={style.raisedButton} />
        <RaisedButton label=">" secondary={true} disabled={true} style={style.raisedButton} />
        <span style={style.span}>第1/3页，共21条数据</span>
      </div>
    )
  }
}