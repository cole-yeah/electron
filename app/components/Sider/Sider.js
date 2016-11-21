import React, { Component } from 'react'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

const style = {
  paper:{
    display: 'inline-block',
    margin: '4px 10px 16px 0',
  },
  link:{
    textDecoration:'none',
  },
  menu:{
    minWidth:'180px',
  },
  item:{
    minWidth:'180px',
  }
}

export default class Sider extends Component {
  render(){
    const lists = ['counter', 'link', 'todoMvc', 'Sign']
    return(
      <Paper style={style.paper}>
        <Menu style={style.menu}>
          {
            lists.map((list, i) => 
              <Link key={i} style={style.link} to={`/${list}`}><MenuItem style={style.item} primaryText = {list}/></Link>
            )
          }
        </Menu>
      </Paper>
    )
  }
}