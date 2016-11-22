import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import ContentDelete from 'material-ui/svg-icons/content/delete-sweep'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

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
  render() {
    return (
      <Paper style={styles.paper} zDepth={1}>
        <span>
          <TextField
            hintText="search"
          />
          <RaisedButton label="搜 索" primary={true} style={styles.raisedButton} />
        </span>

        <span className="handle">
          <FloatingActionButton mini={true} style={styles.actionButton}>
            <ContentAdd />
          </FloatingActionButton>
          <FloatingActionButton mini={true} style={styles.actionButton}>
            <ContentDelete />
          </FloatingActionButton>
        </span>
      </Paper>
    )
  }
}