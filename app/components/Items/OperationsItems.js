import React, { Component, PropTypes } from 'react'
import Checkbox from 'material-ui/lib/checkbox'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import TextField from 'material-ui/lib/text-field'
import FlatButton from 'material-ui/lib/flat-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'

const style = {
  textField: {
    marginLeft: 20,
    width: '90%',
  },
  flatButton: {
    float: 'right',
    margin: '20px 20px 0'
  },
  actionButton: {
    position: 'absolute',
    bottom: 0,
    left: '44%',
    margin: '20px 20px 10px'
  }
}

export default class ChildrenItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opId: this.props.operations.opId,
      opName: this.props.operations.opName,
      opSort: this.props.operations.opSort,
      elementClass: this.props.operations.elementClass
    }
  }

  handleChange(name, event) {
    let newState = {}
    newState[name] = event.target.value
    console.log(newState)
    this.setState(newState)
  }

  render() {
    const { operations, edit, itemsActions } = this.props

    let element = (
      edit?
        <span>
          <TextField 
            value={this.state.opId} 
            hintText="opId" 
            floatingLabelText="opId"
            onChange={this.handleChange.bind(this,"opId")} 
            style={style.textField} />
          <TextField 
            value={this.state.opSort} 
            hintText="opSort" 
            floatingLabelText="opSort" 
            onChange={this.handleChange.bind(this,"opSort")}
            style={style.textField} />
          <TextField 
            value={this.state.opName} 
            hintText="opName" 
            floatingLabelText="opName" 
            onChange={this.handleChange.bind(this,"opName")}
            style={style.textField} />
          <TextField 
            value={this.state.elementClass} 
            hintText="elementClass" 
            floatingLabelText="elementClass" 
            onChange={this.handleChange.bind(this,"elementClass")}
            style={style.textField} />
          <FlatButton
            style={style.flatButton} 
            label="Submit" 
            primary={true} 
            keyboardFocused={true}
            onTouchTap={() => itemsActions.operationsSubmit(operations.opId, this.state.opId, this.state.opName, this.state.opSort, this.state.elementClass)} />
        </span>:         
          <table className="tableItems">
            <thead className="theadItems">
              <tr>
                <th className="toolItems"><Checkbox disabled={true} /></th>
                <th className="thItems">webApis.opId</th>
                <th className="thItems">serviceUrl</th>
                <th className="toolItems">edit</th>
              </tr>
              </thead>
            <tbody>
              {
                operations.webApis.map((api, i) => 
                  <tr key={i}>
                    <td className="toolItems"><Checkbox checked={api.checked} onClick={() => itemsActions.webApisSelected(api.id)} /></td>
                    <td className="tdItems">{api.serviceMethod}</td>
                    <td className="tdItems">{api.serviceUrl}</td>
                    <td className="toolItems">
                      <FloatingActionButton mini={true} secondary={true}>
                        <ContentCreate />
                      </FloatingActionButton>
                    </td>

                  </tr>
                )
              }
            </tbody>
            <FloatingActionButton secondary={true} mini={true} style={style.actionButton}>
              <ContentAdd />
            </FloatingActionButton>
          </table>
    )

    return (
      <span>
        {element}
      </span>
    )
  }
}