import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'
import ContentDelete from 'material-ui/lib/svg-icons/content/remove'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'

import Dialog from '../Dialog/Dialog'

const styles = {
  paper:{
    width: '100%',
    margin: '0 0 20px',
    display: 'flex',
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  raisedButton: {
    margin: 10
  },
  actionButton: {
    marginRight: 20
  }
}

export default class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

   handleOpen(){
    this.setState({open: true});
  }

  handleClose() {
    this.setState({
      open:false
    })    
  }

  render() {
    return (
      <Paper style={styles.paper} zDepth={1}>
        <span>
          <TextField
            hintText="search"
          />
          <RaisedButton label="搜 索" secondary={true} style={styles.raisedButton} />
          <RaisedButton label="刷 新" primary={true} style={styles.raisedButton} />
        </span>

          <Dialog
          open={this.state.open}
          handleClose={this.handleClose.bind(this)}/>

        <span className="handle">
          <FloatingActionButton secondary={true} onTouchTap={this.handleOpen.bind(this)} mini={true} style={styles.actionButton}>
            <ContentAdd />
          </FloatingActionButton>
          <FloatingActionButton secondary={true} onTouchTap={this.handleOpen.bind(this)} mini={true} style={styles.actionButton}>
            <ContentDelete />
          </FloatingActionButton>
        </span>

      </Paper>
    )
  }
}