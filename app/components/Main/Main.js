import React, { Component } from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home'
import DatePicker from 'material-ui/DatePicker'
import {fullWhite} from 'material-ui/styles/colors'

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
          <div>
            <DatePicker hintText="Min date" />
            <DatePicker hintText="Max date" />
          </div>
          { props.children }
        </div>

      </div>
    </div>
  )
export default Main
