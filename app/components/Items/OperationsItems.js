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

  render() {
    const { operations, edit } = this.props

    let element = (
      edit?
        <span>
          <TextField 
            value={operations.opId} 
            hintText="opId" 
            floatingLabelText="opId" 
            style={style.textField} />
          <TextField 
            value={operations.opSort} 
            hintText="opSort" 
            floatingLabelText="opSort" 
            style={style.textField} />
          <TextField 
            value={operations.opName} 
            hintText="opName" 
            floatingLabelText="opName" 
            style={style.textField} />
          <TextField 
            value={operations.elementClass} 
            hintText="elementClass" 
            floatingLabelText="elementClass" 
            style={style.textField} />
          <FlatButton
            style={style.flatButton} 
            label="Submit" 
            primary={true} 
            keyboardFocused={true} />
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
                  <tr>
                    <td className="toolItems"><Checkbox /></td>
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