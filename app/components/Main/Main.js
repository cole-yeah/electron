import React, { Component } from 'react'
import { Link } from 'react-router'

import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import ActionHome from 'material-ui/lib/svg-icons/action/home'
import {fullWhite} from 'material-ui/lib/styles/colors'
import Paper from 'material-ui/lib/paper'
import Search from '../Search/Search'
import Sider from '../Sider/Sider'

const Main = props => (
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
          <Sider/>
        </div>

        <div className="MainRight">
          { props.children }
        </div>


      </div>
    </div>
  )
export default Main
