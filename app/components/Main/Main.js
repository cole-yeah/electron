import React, { Component } from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import ActionHome from 'material-ui/lib/svg-icons/action/home'
import {fullWhite} from 'material-ui/lib/styles/colors'
import SideBar from '../SideBar/SideBar'

export default class Main extends Component {
  constructor(props) {
    super(props)
  }

render(){
  return(    
    <div>
      <AppBar
        title="Coooooool"
          iconElementLeft={
            <IconButton>
              <ActionHome color={fullWhite} />
            </IconButton>}
      />

      <div className="MainBody">

        <div className="MainLeft">
          <SideBar/>
        </div>

        <div className="MainRight">
          { this.props.children }
        </div>

      </div>
    </div>
    )}
  }
