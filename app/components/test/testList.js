import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';
let SelectableList = SelectableContainerEnhance(List);

function wrapState(ComposedComponent) {
  const StateWrapper = React.createClass({
    getInitialState() {
      return {selectedIndex: 1};
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

const ListExampleSelectable = () => (
    <SelectableList
      value={3}
      subheader="SelectableContacts"
    >
      <ListItem
        value={1}
        primaryText="Brendan Lim"
        nestedItems={[
          <ListItem
            value={2}
            primaryText="Grace Ng"
          />,
        ]}
      />
      <ListItem
        value={3}
        primaryText="Kerem Suer"
      />
      <ListItem
        value={4}
        primaryText="Eric Hoffman"
      />
      <ListItem
        value={5}
        primaryText="Raquel Parrado"
      />
    </SelectableList>
);

export default ListExampleSelectable;