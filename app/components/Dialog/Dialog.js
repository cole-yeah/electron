import React from 'react'
import Dialog from 'material-ui/lib/dialog'
import FlatButton from 'material-ui/lib/flat-button'
import RaisedButton from 'material-ui/lib/raised-button'
import Divider from 'material-ui/lib/divider'
import TextField from 'material-ui/lib/text-field'

import FunctionsDialog from './FunctionsDialog'

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
    const { handleClose, functions, open, itemsActions } = this.props

    return (
      <div>
        <Dialog
          modal={false}
          open={open}
          contentStyle={style.dialog}
          onRequestClose={() => handleClose()}
        >
          <FunctionsDialog
            itemsActions={itemsActions}
            functions={functions}/>

        </Dialog>
      </div>
    );
  }
}