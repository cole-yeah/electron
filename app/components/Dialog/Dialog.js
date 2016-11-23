import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'

import Test from './test'

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
    return (
      <div>
        <Dialog
          modal={false}
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