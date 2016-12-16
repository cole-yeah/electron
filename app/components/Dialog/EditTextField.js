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
    this.state = {
      /**menus */
      anchor: this.props.menus.anchor || '',
      menuCode: this.props.menus.menuCode || '',
      menuId: this.props.menus.menuId || '',
      menuParentId: this.props.menus.menuParentId || '',
      menuSort: this.props.menus.menuSort || '',
      name: this.props.menus.name || '',
      icon: this.props.menus.icon || '',
      /**functions */
      functionId: this.props.menus.functionId || '',
      functionName: this.props.menus.functionName || '',
      /*operations */
      opId: this.props.menus.opId || '',
      opSort: this.props.menus.opSort || '',
      opName: this.props.menus.opName || '',
      elementClass: this.props.menus.elementClass || '',
      /**webApis*/
      serviceMethod: this.props.menus.serviceMethod || '',
      serviceUrl: this.props.menus.serviceUrl || '',
    }
  }

  handleChange(name, event) {
    let newState = {}
    newState[name] = event.target.value
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
          onTouchTap={() => _MenusSubmit(Key, menus.key||'', ...submitContent)}
        />
      </span>
    )
  }
}