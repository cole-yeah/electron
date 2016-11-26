import React, { Component } from 'react';
// import data from '../../../test.json'
import fetch from 'isomorphic-fetch'
import One from './testOne'
export default class ListExampleSelectable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tData: [],
    }
  }

  handleClick(e) {
    fetch('../../../test.json')
      .then(res => {
        console.log(res.status);
        return res.json()
      })
      .then(data => {
        this.setState({tData: data.B})
        console.log(this.state.tData)
      })
      .catch((e) => {console.log(e.message)})
  } 

  render() {
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>123</button>
        {
          this.state.tData.map((data, i) => 
          <p key={i}>{data.serviceUrl}</p>)
        }
      </div>
      )
    }
}
