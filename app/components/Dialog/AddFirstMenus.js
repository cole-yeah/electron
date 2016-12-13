import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/lib/text-field'
import FlatButton from 'material-ui/lib/flat-button'

const style = {
  textField: {
    marginLeft: 20,
    width: '46%'
  },
  flatButton: {
    float: 'right',
    margin: '20px 20px 0'
  }
}

export default class ChildrenItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuId: 'P0001',
      menuCode: 'P0001',
      icon: 'fa-database',
      menuSort: 1,
      name: '基础数据管理'
    }
  }

  handleChange(name, event) {
    let newState = {}
    newState[name] = event.target.value
    this.setState(newState)
  }

  render() {
    const { itemsActions, array } = this.props
    let submitContent = array.map(arr => this.state[arr])

    return (
      <span>
        {
          array.map((arr, i) => 
            <TextField 
              value={this.state[arr]} 
              hintText={arr} 
              floatingLabelText={arr}
              onChange={this.handleChange.bind(this, arr)}
              style={style.textField} />
          )
        }
        <FlatButton
          style={style.flatButton} 
          label="Submit" 
          primary={true} 
          keyboardFocused={true}
          onTouchTap={() => itemsActions.addFirstMenus(...submitContent)}
        />
      </span>
    )
  }
}