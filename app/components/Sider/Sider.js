import React, { Component } from 'react'
import { Link } from 'react-router'
import Paper from 'material-ui/lib/paper'
import ContentDelete from 'material-ui/lib/svg-icons/content/remove'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'

const style = {
  paper:{
    display: 'inline-block',
    margin: '4px -12px 60px 0',
    overflowY: 'scroll',
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
  },
  actionButton: {
    marginLeft: 14
  },
  buttonBox: {
    position: 'fixed',
    bottom: 20,
  }
}

export default class Sider extends Component {

  handleOpen(){
    this.setState({open: true});
  }

  render(){
    const lists = ['counter', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign']
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
          <div style={style.buttonBox}>
            <FloatingActionButton secondary={true} onTouchTap={this.handleOpen.bind(this)} mini={true} style={style.actionButton}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton secondary={true} onTouchTap={this.handleOpen.bind(this)} mini={true} style={style.actionButton}>
              <ContentDelete />
            </FloatingActionButton>
            <FloatingActionButton secondary={true} onTouchTap={this.handleOpen.bind(this)} mini={true} style={style.actionButton}>
              <ContentCreate />
            </FloatingActionButton>
          </div>
        </Paper>
    )
  }
}