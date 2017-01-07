import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/lib/dialog'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ForwardTable from './ForwardTable'
import EditTextField from './EditTextField'
import OperationsDialog from '../Dialog/OperationsDialog'
import * as OperActions from '../../actions/oper'

const style = {
  dialog: {
    width: '80%',
    maxWidth: 'none',
  }
}

class FunctionsDialog extends Component {

  render() {
    const { itemsActions, func, oper, operActions, menus } = this.props
    const array = menus.map(item => item.children.map(child => child.functions.map(func => func.operations.map(oper => oper.opId))))
    const idArray = array.reduce((x, y) => {
      return x.concat(y)
    }, []).reduce((x, y) => {
      return x.concat(y)
    }, []).reduce((x, y) => {
      return x.concat(y)
    }, []).sort()

    return (
      <span>
        {func.edit ?
          <EditTextField
            menus={func.nextContent}
            Key={func.nextKey}                      //用于后面新增或修改进行匹配的值
            _MenusSubmit={itemsActions.dispatchHandleSubmit}
            array={['functionId', 'functionName']}//不同点
            /> :
          <ForwardTable
            forward={true}                        //不同点  控制是否有下一级，true为有，false反之
            items={func.nextContent.operations}   //不同点  下一级为operations,若webApis则为webApis
            keys={func.nextContent.key}           //operations的新增需要从functions传keys过来
            idArray={idArray}                     //opId数组
            _handleDelete={itemsActions.handleDelete}
            _handleChecked={itemsActions.operationsSelected}        //不同点
            _handleEdit={operActions.setOperEdit}
            _handleAdd={operActions.setOperAdd}
            _handleOpen={operActions.setOperOpen}
            array={['opId', 'opSort', 'opName', 'elementClass']}    //不同点
            />}
        <Dialog
          modal={false}
          open={oper.open}
          contentStyle={style.dialog}
          onRequestClose={operActions.setOperClose}
          >
          {oper.addItems ?
            <EditTextField
              menus={oper}
              idArray={idArray}  //用于后面判断新增的opId是否为重复
              Key={oper.nextKey} //nextKey 从forwardTable传过来的，用于去生成新增的functions、operations、webApis下的key
              _MenusSubmit={itemsActions.dispatchAddOperActions}
              array={['opId', 'opSort', 'opName', 'elementClass']}
              /> :
            <OperationsDialog
              edit={oper.edit}
              itemsActions={itemsActions}
              content={oper.nextContent}
              />}
        </Dialog>
      </span>
    )
  }
}

function mapStateToProps(state) {
  return {
    oper: state.oper
  }
}
function mapDispatchToProps(dispatch) {
  return {
    operActions: bindActionCreators(OperActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FunctionsDialog)