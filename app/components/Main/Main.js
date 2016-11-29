import React, { Component } from 'react'
import { Link } from 'react-router'

import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import ActionHome from 'material-ui/lib/svg-icons/action/home'
import {fullWhite} from 'material-ui/lib/styles/colors'
import SideBar from '../SideBar/SideBar'

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
          <SideBar/>
        </div>

        <div className="MainRight">
          { props.children }
        </div>


      </div>
    </div>
  )
export default Main
