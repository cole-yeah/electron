import React from 'react'
import { browserHistory, Router, Route, IndexRoute, Redirect } from 'react-router'
import SideBar from './components/SideBar/SideBar'
import Welcome from './components/Welcome/Welcome'
import Menu from './components/Menu/Menu'
import Main from './components/Main/Main'
import Items from './components/Items/Items'

export default (
      <Route path="/" component={Main}>
        <IndexRoute component={Welcome}/>
        <Route path="/items/:menuId" component={Items}/>
        <Route path="/counter" component={Menu} />
      </Route>
)
