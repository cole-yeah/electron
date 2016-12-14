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

export default class EditMenusDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      /**menus */
      anchor: this.props.menus.anchor || '',
      menuCode: this.props.menus.menuCode || '',
      menuId: this.props.menus.menuId || '',
      menuParentId: this.props.menus.menuParentId || '',
      menuSort: this.props.menus.menuSort || '',
      name: this.props.menus.name || '',
      icon: this.props.menus.icon || '',
      /**add functions */
      functionId: this.props.menus.functionId || '',
      functionName: this.props.menus.functionName || '',
      /**add webApis */
      opId: this.props.menus.opId || '',
      opSort: this.props.menus.opSort || '',
      opName: this.props.menus.opName || '',
      elementClass: this.props.menus.elementClass || ''
    }
  }

  handleChange(name, event) {
    let newState = {}
    newState[name] = event.target.value
    this.setState(newState)
  }

  render() {
    const { menus, _MenusSubmit, array } = this.props
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
          onTouchTap={() => _MenusSubmit(...submitContent)}
        />
      </span>
    )
  }
}