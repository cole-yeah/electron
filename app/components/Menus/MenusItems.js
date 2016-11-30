import React, { Component, PropTypes } from 'react'
import Checkbox from 'material-ui/lib/checkbox'

export default class MenusItems extends Component {
  render() {
    return (
      <div>
        <Checkbox/>
        <span>123</span>
        <span>+-</span>
      </div>
    )
  }
}