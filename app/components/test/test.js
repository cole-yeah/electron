import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'

export default class DialogExampleAlert extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open:false
    }
  }

  handleClose(){
    this.setState({
      open:false
    })
  }

   handleOpen(){
    this.setState({open: true});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
    ]
    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={this.handleOpen.bind(this)} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
        >
          Open a Date Picker dialog from within a dialog.
          <DatePicker hintText="Date Picker" />
        </Dialog>
      </div>
    );
  }
}