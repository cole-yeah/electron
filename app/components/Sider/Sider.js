import React, { Component } from 'react'
import { Link } from 'react-router'
import Paper from 'material-ui/lib/paper'

import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'

// import Diaaalog from '../test/test'

const style = {
  paper:{
    display: 'inline-block',
    margin: '4px 10px 16px 0',
  },
  link:{
    textDecoration:'none',
    textIndent: '1em',
    display: 'block',
  },
  item:{
    minWidth:'180px',
  },
  menuHandle: {
    paddingLeft: 16,
    position: 'fixed',
    bottom: 20,
  },
  button: {
    marginLeft: 8,
  }
}

export default class Sider extends Component {
  render(){
    const lists = ['counter', 'link', 'todoMvc', 'Sign']
    return(
      <Paper style={style.paper}>
        <List style={style.item}>
          <ListItem primaryText="Sent mail"/>
          <ListItem primaryText="Drafts"/>
          <ListItem 
            primaryText="Inbox"
            primaryTogglesNestedList={true}
            nestedItems={[
              lists.map((list, i) =>
              <Link style={style.link} to={`/${list}`}> 
                <ListItem 
                  key={i + 1}
                  primaryText={list}/>
              </Link>,)
            ]} />
          </List>
        </Paper>
    )
  }
}