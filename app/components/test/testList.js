import React, { Component } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';
let SelectableList = SelectableContainerEnhance(List);

function wrapState(ComposedComponent) {
  const StateWrapper = React.createClass({
    getInitialState() {
      return {selectedIndex:''};
    },

    handleUpdateSelectedIndex(e, index) {
      this.setState({
        selectedIndex: index,
      });
    },
    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          valueLink={{value: this.state.selectedIndex, requestChange: this.handleUpdateSelectedIndex}}
        />
      );
    },
  });
  return StateWrapper;
}

SelectableList = wrapState(SelectableList);


export default class ListExampleSelectable extends Component {
  render() {
    const i = 4
    const j = 2
    return(
      <SelectableList>
        <ListItem
          value={101}
          primaryText="Brendan Lim"
          nestedItems={[
            <ListItem
              value={i+j}
              primaryText="Grace Ng"
            />,
          ]}
        />
        <ListItem
          value={103}
          primaryText="Kerem Suer"
          nestedItems={[
            <ListItem
              value={i*10+j}
              primaryText="Grace Ng"
            />,
          ]}
        />
        <ListItem
          value={104}
          primaryText="Eric Hoffman"
        />
        <ListItem
          value={105}
          primaryText="Raquel Parrado"
        />
      </SelectableList>
      )
    }
}


          <h3 className="dialogTitle">webApis</h3>
          <div>
            <TextField hintText="serviceUrl" floatingLabelText="serviceUrl" style={style.textField} />
            <TextField hintText="serviceMethod" floatingLabelText="serviceMethod" style={style.textField} />
          </div>
          <div>
            <TextField hintText="serviceUrl" floatingLabelText="serviceUrl" style={style.textField} />
            <TextField hintText="serviceMethod" floatingLabelText="serviceMethod" style={style.textField} />
          </div>

                  <div>
          <FloatingActionButton secondary={true} mini={true} style={style.actionButton}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
