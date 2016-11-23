import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import ContentDelete from 'material-ui/svg-icons/content/delete-sweep'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

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
          <RaisedButton label="搜 索" primary={true} style={styles.raisedButton} />
        </span>

          <Dialog
          open={this.state.open}
          handleClose={this.handleClose.bind(this)}/>

        <span className="handle">
          <FloatingActionButton onTouchTap={this.handleOpen.bind(this)} mini={true} style={styles.actionButton}>
            <ContentAdd />
          </FloatingActionButton>
          <FloatingActionButton onTouchTap={this.handleOpen.bind(this)} mini={true} style={styles.actionButton}>
            <ContentDelete />
          </FloatingActionButton>
        </span>

      </Paper>
    )
  }
}