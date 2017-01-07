import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import ActionHome from 'material-ui/lib/svg-icons/action/home'
import ActionDelete from 'material-ui/lib/svg-icons/action/delete'

import * as MenusActions from '../actions/menus'
import * as ItemsActions from '../actions/items'
import Items from '../components/Items/Items'
import Menus from '../components/Menus/Menus'
import '../../css/styles.css'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.menusActions.readItemsFile()  //electron下，用fs读取文件
    this.props.menusActions.receiveMenus()    //web下
  }

  componentWillReceiveProps(nextState) {
    nextState.items.map((item, i) =>
      nextState.items !== this.props.items ? this.props.menusActions.combineItems(item.key, nextState.items) : item
    )
  }

  render() {
    const {items, menusActions, itemsActions, menus} = this.props
    return (
      <div>
        <AppBar
          title="MCT"
          iconElementLeft={
            <IconButton>
              <ActionHome />
            </IconButton>
          }
          />

        <div className="MainBody">

          <div className="MainLeft">
            <Menus
              actions={menusActions}
              menus={menus} />
          </div>

          <div className="MainRight">
            <Items
              itemsActions={itemsActions}
              menusActions={menusActions}
              menus={menus}
              items={items}
              />
          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // menu = Object.assign({}, menu, {functions: item}) //想把items上改变合并到menus上用这个方法行不通,因为item和menu是平级
  return {
    items: state.items,
    menus: state.menus
  }
}

function mapDispatchToProps(dispatch) {
  return {
    menusActions: bindActionCreators(MenusActions, dispatch),
    itemsActions: bindActionCreators(ItemsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
