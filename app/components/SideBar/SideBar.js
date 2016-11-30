import React, { Component } from 'react'
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
    margin: '0 -12px 130px 0',
    overflowY: 'scroll',
  },
  item:{
    minWidth:'180px',
  },
  actionButton: {
    marginLeft: 14
  },
  buttonBox: {
    position: 'fixed',
    bottom: 20,
  }
}

export default class SideBar extends Component {
  constructor(props) {
    super(props)
    this.handleOpen = this.handleOpen.bind(this)
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
        data = JSON.parse(data)
        this.setState({listItems: data})
      }
    })
  }

  handleOpen(){
    this.setState({open: true});
  }

  render(){
    const { handleClick } = this.props
    return(
      <div style={style.paper}>
        <List style={style.item}>
          {
            this.state.listItems.map((listItem, j) => 
            <ListItem 
              primaryText={listItem.name}
              primaryTogglesNestedList={true}
              nestedItems={[
              listItem.children.map((list, i) =>
                <ListItem 
                  key={i}
                  onClick={handleClick.bind(this, j, i)}
                  primaryText={list.name}/>,)
            ]}/>
          )}
          </List>
          <div style={style.buttonBox}>
            <FloatingActionButton secondary={true} onTouchTap={this.handleOpen} mini={true} style={style.actionButton}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton secondary={true} onTouchTap={this.handleOpen} mini={true} style={style.actionButton}>
              <ContentDelete />
            </FloatingActionButton>
            <FloatingActionButton secondary={true} onTouchTap={this.handleOpen} mini={true} style={style.actionButton}>
              <ContentCreate />
            </FloatingActionButton>
          </div>
        </div>
    )
  }
}