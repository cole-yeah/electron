import React, { Component, PropTypes } from 'react'
import Checkbox from 'material-ui/lib/checkbox'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import TextField from 'material-ui/lib/text-field'
import FlatButton from 'material-ui/lib/flat-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import Dialog from 'material-ui/lib/dialog'

import WebApisDialog from './WebApisDialog'

const style = {
  textField: {
    marginLeft: 20,
    width: '90%',
  },
  flatButton: {
    float: 'right',
    margin: '20px 20px 0'
  },
  dialog: {
    width: '80%',
    maxWidth: 'none',
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
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      opId: this.props.operations.opId,
      opName: this.props.operations.opName,
      opSort: this.props.operations.opSort,
      elementClass: this.props.operations.elementClass,
      open: false,
      api: ''
    }
  }

  handleChange(name, event) {
    let newState = {}
    newState[name] = event.target.value
    console.log(newState)
    this.setState(newState)
  }

  handleEdit(content) {
    this.setState({open: true, api: content})
  }

  handleClose() {
    this.setState({open: false})
  }

  render() {
    const { operations, edit, itemsActions, array } = this.props

    let element = (
      edit?
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
            onTouchTap={() => itemsActions.operationsSubmit(operations.opId, this.state.opId, this.state.opName, this.state.opSort, this.state.elementClass)} />
        </span>:
          <table className="tableItems">
            <thead className="theadItems">
              <tr>
                <th className="toolItems"><Checkbox disabled={true} /></th>
                <th className="thItems">serviceMethod</th>
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
                      <FloatingActionButton mini={true} secondary={true} onTouchTap={this.handleEdit.bind(this, api)}>
                        <ContentCreate />
                      </FloatingActionButton>
                    </td>
                  </tr>
                )
              }
            </tbody>
            <Dialog
              modal={false}
              open={this.state.open}
              contentStyle={style.dialog}
              onRequestClose={this.handleClose}
            >
              <WebApisDialog
                array={['serviceMethod', 'serviceUrl']}
                itemsActions={itemsActions}
                api={this.state.api}/>
            </Dialog>
            <FloatingActionButton secondary={true} mini={true} style={style.actionButton}>
              <ContentAdd/>
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