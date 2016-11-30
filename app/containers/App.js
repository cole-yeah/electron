import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import ActionHome from 'material-ui/lib/svg-icons/action/home'
import {fullWhite} from 'material-ui/lib/styles/colors'

import * as ItemsAcitons from '../actions/items'
import Items from '../components/Items/Items'
import SideBar from '../components/SideBar/SideBar'
import { readItemsFile } from '../actions/items'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('执行componentDidMount')
  }

  handleClick(j, i) {
    this.props.dispatch(readItemsFile(j, i))
  }

  render() {
    const {posts} = this.props
    return(    
      <div>
        <AppBar
          title="Coooooool"
            iconElementLeft={
              <Link to="/">
                <IconButton>
                  <ActionHome color={fullWhite} />
                </IconButton>
              </Link>}
        />

        <div className="MainBody">

          <div className="MainLeft">
            <SideBar
              handleClick={this.handleClick.bind(this)}/>
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
    posts: state.items.posts
  }
}

export default connect(mapStateToProps)(App)
