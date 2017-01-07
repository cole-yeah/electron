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

export default class EditTextField extends Component {
  constructor(props) {
    super(props)
    const {anchor, menuCode, menuId, menuParentId, menuSort, name, icon, functionId, functionName, opId, opSort, opName,
      elementClass, serviceMethod, serviceUrl} = this.props.menus || {}
    this.state = {
      /**menus */
      anchor,
      menuCode,
      menuId,
      menuParentId,
      menuSort,
      name,
      icon,
      /**functions */
      functionId,
      functionName,
      /*operations */
      opId,
      opSort,
      opName,
      elementClass,
      /**webApis*/
      serviceMethod,
      serviceUrl
    }
  }

  handleChange(name, event) {
    let newState = {}
    //todo  target -》 currentTarget
    newState[name] = event.currentTarget.value
    this.setState(newState)
  }
  render() {
    const { Key, menus, _MenusSubmit, array, idArray = []} = this.props
    let submitContent = array.map(arr => this.state[arr])

    return (
      <span>
        {
          array.map((arr, i) =>
            <TextField
              key={i}
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
          onTouchTap={array[0] === 'serviceMethod' ? () => _MenusSubmit(Key, menus.key, ...submitContent) : () => _MenusSubmit(idArray, Key, menus.key, ...submitContent)}
          />
      </span>
    )
  }
}