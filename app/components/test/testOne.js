import React, { Component, PropTypes } from 'react'

export default class One extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const datas = this.props.tData
    return(
      <ul>
        {
          datas.map(data => 
          <li>{data.serviceUrl}</li>)
        }
      </ul>
    )
  }
}