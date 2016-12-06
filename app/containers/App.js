import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import ActionHome from 'material-ui/lib/svg-icons/action/home'
import {fullWhite} from 'material-ui/lib/styles/colors'

import * as MenusActions from '../actions/menus'
import * as ItemsActions from '../actions/items'
import Items from '../components/Items/Items'
import Menus from '../components/Menus/Menus'
// import { receiveMenus } from '../actions/menus'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('执行app componentDidMount')
    this.props.menusActions.receiveMenus()
  }
  // handleClick(j, i) {
  //   this.props.dispatch(readItemsFile(j, i))
  // }                      

  // <SideBar
  //  handleClick={this.handleClick.bind(this)}/>

  render() {
    const {items, menusActions, itemsActions, menus} = this.props
    return(    
      <div>
        <AppBar
          title="Coooooool"
            iconElementLeft={
                <IconButton>
                  <ActionHome color={fullWhite} />
                </IconButton>
              }
        />

        <div className="MainBody">

          <div className="MainLeft">
            <Menus
              actions={menusActions}
              menus={menus}/>
          </div>

          <div className="MainRight">
            <Items
              itemsActions={itemsActions}
              items={items}/> 
          </div>

        </div>
      </div>
      )
  }
}

function mapStateToProps(state) {
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
