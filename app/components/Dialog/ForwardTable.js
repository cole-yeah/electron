import React, { Component, PropTypes } from 'react'
import Checkbox from 'material-ui/lib/checkbox'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import ContentForward from 'material-ui/lib/svg-icons/content/forward'
import ContentRemove from 'material-ui/lib/svg-icons/action/delete'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import Colors from 'material-ui/lib/styles/colors'

const style = {
  actionButton: {
    position: 'relative',
    left: '48%',
    marginBottom: 30
  }
}

export default class ForwardTable extends Component {
  
  render() {
    const { items = [], array, forward, _handleOpen, _handleAdd, _handleEdit, _handleChecked, _handleDelete, keys, idArray = []} = this.props
    return (
      <div className="tableBox">
        <table className="tableItems" hahah={items}>
          <thead className="theadItems">
            <tr>
              <th className="toolItems"><Checkbox disabled={true} /></th>
              {
                array.map((arr, i) =>
                  <th className="thItems" key={i}>{arr}</th>)
              }
              {forward ? <th className="toolItems">forward</th> : ''}
              <th className="toolItems">edit</th>
              {array[0] === 'functionId' ? '' : <th className="toolItems">delete</th>}
            </tr>
          </thead>
          <tbody>

            {
              items.map((item, i) =>
                <tr key={i}>
                  <td className="toolItems"><Checkbox checked={item.checked} onClick={() => _handleChecked(item.key)} /></td>
                  {
                    array.map(arr =>
                      <td className="tdItems">{item[arr]}</td>
                    )
                  }
                  {forward ? (<td className="toolItems">
                    <ContentForward color={Colors.cyan500} onTouchTap={() => _handleOpen(item)} />
                  </td>) : ''}
                  <td className="toolItems">
                    <ContentCreate color={Colors.cyan500} onTouchTap={() => _handleEdit(item)} />
                  </td>
                  <td className="toolItems">
                    <ContentRemove color={Colors.cyan500} onTouchTap={() => _handleDelete(array[0], item.key)} />
                  </td>
                </tr>
              )
            }

          </tbody>

        </table>

        <FloatingActionButton
          secondary={true}
          mini={true}
          style={style.actionButton}
          onTouchTap={array[0] === 'serviceMethod' ? () => _handleAdd(keys) : () => _handleAdd(keys, idArray)}
          >
          <ContentAdd />
        </FloatingActionButton>

      </div>
    )
  }
}
