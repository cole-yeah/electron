import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/lib/text-field'
import FlatButton from 'material-ui/lib/flat-button'

const style = {
  textField: {
    marginLeft: 20,
    width: '90%',
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
      functionId: this.props.functions.functionId,
      functionName:this.props.functions.functionName,
    }
  }

  handleChange(name, event) {
    let newState = {}
    newState[name] = event.target.value
    this.setState(newState)
  }

  render() {
    const { functions, itemsActions } = this.props

    return (
      <span>
        <TextField 
          value={this.state.functionId} 
          hintText="functionId" 
          floatingLabelText="functionId" 
          onChange={this.handleChange.bind(this,"functionId")}
          style={style.textField} />
        <TextField 
          value={this.state.functionName} 
          hintText="functionName" 
          floatingLabelText="functionName"
          onChange={this.handleChange.bind(this,"functionName")} 
          style={style.textField} />
        <FlatButton
          style={style.flatButton} 
          label="Submit" 
          primary={true} 
          keyboardFocused={true}
          onTouchTap={() => itemsActions.handleSubmit(this.state.functionId, this.state.functionName)} />
      </span>
    )
  }
}