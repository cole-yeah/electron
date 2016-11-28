import React, { Component } from 'react'
import { Link } from 'react-router'
import Paper from 'material-ui/lib/paper'
import ContentDelete from 'material-ui/lib/svg-icons/content/remove'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'

const remote = window.require('electron').remote
const fs = remote.require('fs')

const style = {
  paper:{
    display: 'inline-block',
    margin: '0 -16px 60px 0',
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
  constructor(props) {
    super(props)
    this.state = {
      listItems: []
    }
  }

  componentDidMount() {
    console.log('执行componentDidMount')
    fs.readFile('./test.json', 'utf-8', (err, data) => {
      if(err) {
        console.log(err)
      } else {
        console.log(typeof(data))
        // console.log(data)
        data = JSON.parse(data)
        console.log(data.length)
        console.log(data[0].children[0])
        const tData = []
        for(var i = 0;i<data.length;i++) {
          tData.push(data[i])
        }
        this.setState({listItems: tData})
      }
    })
  }

  handleOpen(){
    this.setState({open: true});
  }

  render(){
    const lists = ['counter', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign', 'link', 'todoMvc', 'Sign']
    return(
      <Paper style={style.paper}>
        <List style={style.item}>
          {
            this.state.listItems.map((listItem, i) => 
            <ListItem key={listItem.menuCode} primaryText={listItem.name}/>
          )}
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