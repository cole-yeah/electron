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
    //todo  不要重复取一个对象里面的数据'
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
      /**functions */
      icon,
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
  /**hahahah */  //3.key在这里为undefined
  render() {
    const { Key, menus, _MenusSubmit, array } = this.props
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
          onTouchTap={() => _MenusSubmit(Key, menus.key, ...submitContent)}
          />
      </span>
    )
  }
}