import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import Dialog from 'material-ui/lib/dialog'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MenusItems from './MenusItems'
import EditTextField from '../Dialog/EditTextField'
import * as TopActions from '../../actions/top'

const style = {
  dialog: {
    width: '80%',
    maxWidth: 'none',
  }
}

const nameBox = ['menuId', 'menuCode', 'menuSort', 'name']

class Menus extends Component {

  render() {
    const {menus, actions, topActions, top} = this.props
    return (
      <span className="mainLeftMenus">
        <ul className="menusBox">
          {
            menus.map((menu, i) =>
              <MenusItems
                key={i}
                open={actions.openMenus}
                _dispatchActions={actions.dispatchActions}
                _checkedAll={actions.checkedAll}
                _checkedMenus={actions.checkedMenus}
                _menuDelete={actions.menuDelete}
                _menuSubmit={topActions.setTopEdit}
                menuItems={menu}
                />)
          }
        </ul>

        <span className="buttonBox">
          <FloatingActionButton secondary={true} mini={true} onTouchTap={() => topActions.setTopAdd(menus)}>
            <ContentAdd />
          </FloatingActionButton>
        </span>
        <Dialog
          modal={false}
          open={top.open}
          contentStyle={style.dialog}
          onRequestClose={topActions.setTopClose}
          >
          <EditTextField
            menus={top.addMenus ? top : top.nextContent}
            Key={top.nextKey}
            idArray={top.idArray}
            _MenusSubmit={
              top.addMenus ?
                (top.first ? actions.dispatchAddFirst : actions.dispatchAddSecond) :
                (top.first ? actions.dispatchSubmitFirst : actions.dispatchSubmitSecond)}
            array={
              top.addMenus ?
                (top.first ? [...nameBox, 'icon'] : [...nameBox, 'menuParentId', 'anchor']) :
                (top.first ? [...nameBox] : [...nameBox, 'menuParentId', 'anchor'])}
            />
        </Dialog>
      </span>
    )
  }
}

function mapStateToProps(state) {
  return {
    top: state.top
  }
}
function mapDispatchToProps(dispatch) {
  return {
    topActions: bindActionCreators(TopActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menus)