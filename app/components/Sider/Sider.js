import React, { Component } from 'react'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import { List, ListItem, makeSelectable } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentCreate from 'material-ui/svg-icons/content/create'
import ContentDelete from 'material-ui/svg-icons/content/delete-sweep'
import Diaaalog from '../test/test'

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
            initiallyOpen={true}
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
          <Diaaalog/>
          <div style={style.menuHandle}>
            <FloatingActionButton mini={true} style={style.button}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton mini={true} style={style.button}>
              <ContentCreate />
            </FloatingActionButton>
            <FloatingActionButton mini={true} style={style.button}>
              <ContentDelete />
            </FloatingActionButton>
          </div>
        </Paper>
    )
  }
}