import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/lib/dialog'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import EditTextField from '../Dialog/EditTextField'
import FunctionsDialog from '../Dialog/FunctionsDialog'
import ForwardTable from '../Dialog/ForwardTable'
import * as KeysActions from '../../actions/keys'

const style = {
  dialog: {
    width: '80%',
    maxWidth: 'none',
  }
}

class ChildrenItems extends Component {

  render() {

    const { items, menus, itemsActions, menusActions, keys, keysActions } = this.props
    const array = menus.map(item => item.children.map(child => child.functions.map(func => func.functionId)))
    const idArray = array.reduce((x, y) => {
      return x.concat(y)
    }, []).reduce((x, y) => {
      return x.concat(y)
    }, []).sort()

    return (
      <div>
        <ForwardTable
          forward={true}
          items={items}
          idArray={idArray}
          keys={keys.key}  //functions的新增需要从menus传key过来
          _handleDelete={menusActions.menuDelete}
          _handleChecked={itemsActions.handleSelected}
          _handleEdit={keysActions.setEdit}
          _handleAdd={keysActions.setAdd}
          _handleOpen={keysActions.setOpen}
          array={['functionId', 'functionName']}
          />

        <Dialog
          modal={false}
          open={keys.open}
          contentStyle={style.dialog}
          onRequestClose={keysActions.setClose}
          >
          {
            keys.addItems ?
              <EditTextField
                menus={keys}
                idArray={idArray}
                Key={keys.nextKey} //nextKey 的值其实就是从forwardTable通过handleAdd函数setState然后传过来的，这个值用于去生成新增的functions、operations、webApis下的key
                _MenusSubmit={itemsActions.dispatchAddActions}
                array={['functionId', 'functionName']}
                /> :
              <FunctionsDialog
                itemsActions={itemsActions}
                menus={menus}
                func={keys}
                />
          }
        </Dialog>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    keys: state.keys
  }
}
function mapDispatchToProps(dispatch) {
  return {
    keysActions: bindActionCreators(KeysActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChildrenItems)
