/**咱不用到 */
import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'
import TextField from 'material-ui/lib/text-field'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import Checkbox from 'material-ui/lib/checkbox'

const style = {
  textField: {
    marginLeft: 20,
    width: '100%',
  },
  paper: {
    overflowY: 'auto',
    overflowX: 'hidden',
    height: 260,
  }
}

export default class OperationsDialog extends Component {

  constructor(props) {
    super(props)
  }


  render() {

    const { operations, itemsActions } = this.props

    let element = (
      operations.edit?(
        <div>
          <h3 className="dialogTitle">operations</h3>
          <TextField defaultValue={operations.opId} hintText="opId" floatingLabelText="opId" style={style.textField} />
          <TextField defaultValue={operations.opSort} hintText="opSort" floatingLabelText="opSort" style={style.textField} />
          <TextField defaultValue={operations.opName} hintText="opName" floatingLabelText="opName" style={style.textField} />
          <TextField defaultValue={operations.elementClass} hintText="elementClass" floatingLabelText="elementClass" style={style.textField} />
        </div>):(
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
                  <tr key={i} webApi={api}>
                    <td className="toolItems"><Checkbox dd={api.serviceMethod} checked={api.checked} onClick={() => itemsActions.webApisSelected(api.id)} /></td>
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
        </table>)
    )

    return (
      <Paper style={style.paper} zDepth={2}>
        { element }
      </Paper>
    )
  }
}
