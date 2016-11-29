import React from 'react';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'

const style = {
  textField: {
    marginLeft: 20,
  },
  paper: {
    overflowY: 'auto',
    height: 260,
  },
  actionButton: {
    margin: 16
  }
};

const DividerExampleForm = () => (
  <Paper style={style.paper} zDepth={2}>
    <div>
      <h3 className="dialogTitle">functions</h3>
      <TextField defaultValue="Default Value" hintText="functionId" floatingLabelText="functionId" style={style.textField} />
      <TextField defaultValue="Default Value" hintText="opId" floatingLabelText="opId" style={style.textField} />
      <TextField hintText="opName" floatingLabelText="opName" style={style.textField} />
      <TextField hintText="elementClass" floatingLabelText="elementClass" style={style.textField} />
    </div>
    <div>
      <h3 className="dialogTitle">webApis</h3>
      <div>
        <TextField hintText="serviceUrl" floatingLabelText="serviceUrl" style={style.textField} />
        <TextField hintText="serviceMethod" floatingLabelText="serviceMethod" style={style.textField} />
      </div>
      <div>
        <TextField hintText="serviceUrl" floatingLabelText="serviceUrl" style={style.textField} />
        <TextField hintText="serviceMethod" floatingLabelText="serviceMethod" style={style.textField} />
      </div>

      <FloatingActionButton secondary={true} mini={true} style={style.actionButton}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  </Paper>
);

export default DividerExampleForm;