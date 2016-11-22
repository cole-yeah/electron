import React, { Component } from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home'
import DatePicker from 'material-ui/DatePicker'
import {fullWhite} from 'material-ui/styles/colors'

import Search from '../Search/Search'
import Sider from '../test/testList'

const style = {
  datePicker: {
    display: 'inline-block',
    margin: 10,
  }
}

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
