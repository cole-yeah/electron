import React, { Component, PropTypes } from 'react'
import Checkbox from 'material-ui/lib/checkbox'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import ContentForward from 'material-ui/lib/svg-icons/content/forward'

import Dialog from '../Dialog/Dialog'

export default class ChildrenItems extends Component {

  render() {
    const { items, itemsActions } = this.props

    return (
      <span>
        <table className="tableItems">
          <thead className="theadItems">
            <tr>
              <th className="toolItems"><Checkbox disabled={true} /></th>
              <th className="thItems">opId</th>
              <th className="thItems">opSort</th>
              <th className="thItems">opName</th>
              <th className="thItems">elementClass</th>
              <th className="toolItems">forward</th>
              <th className="toolItems">edit</th>
            </tr>
            </thead>
          <tbody>

          {
            items.map(item => item.operations.map((operation, i) => 
              <tr>
                <td className="toolItems"><Checkbox checked={operation.checked} onClick={() => itemsActions.operationsSeleted(operation.opId)}/></td>
                <td className="tdItems">{operation.opId}</td>
                <td className="tdItems">{operation.opSort}</td>
                <td className="tdItems">{operation.opName}</td>
                <td className="tdItems">{operation.elementClass}</td>
                <td className="toolItems">
                  <FloatingActionButton mini={true} secondary={true} >
                    <ContentForward />
                  </FloatingActionButton>
                </td>
                <td className="toolItems">
                  <FloatingActionButton mini={true} secondary={true} >
                    <ContentCreate />
                  </FloatingActionButton>
                </td>
              </tr>
            ))
          }


          </tbody>

        </table>
      </span>
    )
  }
}