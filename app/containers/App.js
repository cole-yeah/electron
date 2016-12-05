import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import ActionHome from 'material-ui/lib/svg-icons/action/home'
import {fullWhite} from 'material-ui/lib/styles/colors'

import * as Actions from '../actions/items'
import Items from '../components/Items/Items'
import Menus from '../components/Menus/Menus'
import { receiveItems } from '../actions/items'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('执行app componentDidMount')
    this.props.actions.receiveItems()
  }
  // handleClick(j, i) {
  //   this.props.dispatch(readItemsFile(j, i))
  // }           
  // <SideBar
  //  handleClick={this.handleClick.bind(this)}/>

  render() {
    const {posts, actions} = this.props
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
              actions={actions}
              posts={posts}/>
          </div>

          <div className="MainRight">
            <Items
              posts={posts}/>
          </div>

        </div>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
