import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'
import ContentDelete from 'material-ui/lib/svg-icons/content/remove'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'

const styles = {
  paper:{
    width: '100%',
    margin: '0 0 20px',
    display: 'flex',
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'initial',
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
  }

  // handleClose() {
  //   this.setState({
  //     open:false
  //   })    
  // }

  render() {
    const {searchTitle} = this.props
    return (
      <Paper style={styles.paper} zDepth={1}>
        <span>
          <TextField
            hintText="search"
          />
          <RaisedButton label="搜 索" secondary={true} style={styles.raisedButton} />
          <RaisedButton label="刷 新" primary={true} style={styles.raisedButton} />
        </span>

        <span className="searchTitle">
          {
            searchTitle.map((title,i) => title.functionName)
          }
        </span>
      </Paper>
    )
  }
}