import React, { Component, PropTypes } from 'react'
import Checkbox from 'material-ui/lib/checkbox'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import ContentForward from 'material-ui/lib/svg-icons/content/forward'

import Dialog from '../Dialog/Dialog'
import FunctionsItems from './FunctionsItems'

export default class ChildrenItems extends Component {

  render() {
    const { functionName, functionId, checked, _handleOpen, _handleEdit, _handleSelected, keyWord, item, itemsActions } = this.props

    return (
      <span>
        <table className="tableItems">
          <thead className="theadItems">
            <tr>
              <th className="toolItems"><Checkbox disabled={true} /></th>
              {
                keyWord.map((key, i) => 
                  <th key={i} className="thItems">{key}</th>
                )
              }
              <th className="toolItems">forward</th>
              <th className="toolItems">edit</th>
            </tr>
            </thead>
          <tbody>

          <tr>
            <td className="toolItems"><Checkbox checked={checked} onClick={() => _handleSelected()}/></td>
            <td className="tdItems">{functionId}</td>
            <td className="tdItems">{functionName}</td>
            <td className="toolItems">
              <FloatingActionButton mini={true} secondary={true} onClick={() => _handleOpen()}>
                <ContentForward />
              </FloatingActionButton>
            </td>
            <td className="toolItems">
              <FloatingActionButton mini={true} secondary={true} onClick={() => _handleEdit()}>
                <ContentCreate />
              </FloatingActionButton>
            </td>
          </tr>

          </tbody>

        </table>
      </span>
    )
  }
}