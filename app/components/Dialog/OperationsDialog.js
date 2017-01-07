import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/lib/dialog'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ForwardTable from './ForwardTable'
import EditTextField from './EditTextField'
import * as ApiActions from '../../actions/api'

const style = {
  dialog: {
    width: '80%',
    maxWidth: 'none',
  }
}

class OperationsDialog extends Component {

  render() {
    const { content, key, edit, itemsActions, apiActions, api } = this.props
    return (
      <span>
        {
          edit ?
            <EditTextField
              menus={content}
              Key={key}
              _MenusSubmit={itemsActions.dispatchOperationsSubmit}
              array={['opId', 'opSort', 'opName', 'elementClass']}
              /> :
            <ForwardTable
              forward={false}
              items={content.webApis}
              keys={content.key}  //用content.key解决那个webApis下新增每次都在第一个的operations中的webApis的问题 2016.12.21
              _handleChecked={itemsActions.webApisSelected}
              _handleDelete={itemsActions.handleDelete}
              _handleEdit={apiActions.setApiEdit}
              _handleAdd={apiActions.setApiAdd}
              _handleOpen={apiActions.setApiOpen}
              array={['serviceMethod', 'serviceUrl']}
              />
        }

        <Dialog
          modal={false}
          open={api.open}
          contentStyle={style.dialog}
          onRequestClose={apiActions.setApiClose}
          >
          <EditTextField
            menus={api.nextContent}
            idArray={[]}
            Key={api.nextKey} //nextKey 的值其实就是从forwardTable通过handleAdd函数setState然后传过来的，这个值用于去生成新增的functions、operations、webApis下的key
            _MenusSubmit={api.addItems ? itemsActions.dispatchAddApiActions : itemsActions.dispatchWebApisSubmit}
            array={['serviceMethod', 'serviceUrl']}
            />
        </Dialog>
      </span>
    )
  }
}

function mapStateToProps(state) {
  return {
    api: state.api
  }
}
function mapDispatchToProps(dispatch) {
  return {
    apiActions: bindActionCreators(ApiActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OperationsDialog)