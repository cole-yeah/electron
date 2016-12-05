import React, { Component, PropTypes } from 'react'
import Checkbox from 'material-ui/lib/checkbox'
import cs from 'classnames'
const style = {
  checkbox: {
    display: 'inline-block',
    width: 30,
    verticalAlign: 'top',
  },
  span: {
    display: 'inline-block'
  }
}

export default class Test extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      checked: false,
    }
  }

  handleClick(e) {
    this.setState({
      open: !this.state.open
    })
  }

  onClick(e) {
    this.setState({
      checked: !this.state.checked
    })
  }

  click(e) {
    this.setStae({
      
    })
  }

  render() {
    return (
        <ul>
          <li open={this.state.open}>
            <Checkbox 
              onClick={this.onClick.bind(this)} 
              checked={this.state.checked}
              style={style.checkbox}/>
            <span 
              style={style.span}
              onClick={this.handleClick.bind(this)}>
              789789879
            </span>
            <span>
              {this.state.open?'-':'+'}
            </span>
            <ul className={cs('items',{itemBlock: this.state.open})}>
              <li>
                <Checkbox 
                  style={style.checkbox}
                  onClick={this.click.bind(this)}
                  checked={this.state.checked}/>
                <span>123</span>
                <ul>
                  <li>
                    <Checkbox
                    checked={this.state.checked}
                    onClick={this.click.bind(this)}
                    style={style.checkbox}/>
                    <span>123</span>
                    <Checkbox style={style.checkbox}/>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
    )
  }
}