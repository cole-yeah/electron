import React from 'react'
import Dialog from 'material-ui/lib/dialog'
import FlatButton from 'material-ui/lib/flat-button'
import RaisedButton from 'material-ui/lib/raised-button'
import Divider from 'material-ui/lib/divider'
import TextField from 'material-ui/lib/text-field'

import Test from './OperationsDialog'

const style = {
  textField: {
    marginLeft: 16
  },
  dialog: {
    width: '80%',
    maxWidth: 'none',
  }
}

export default class DialogExampleAlert extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.props.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.handleClose.bind(this)}//到时这个逻辑改为提交的
      />,
    ]

    return (
      <div>
        <Dialog
          modal={false}
          actions={actions}
          open={this.props.open}
          contentStyle={style.dialog}
          onRequestClose={this.props.handleClose.bind(this)}
        >
          <Test/>
        </Dialog>
      </div>
    );
  }
}