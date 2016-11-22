import React, {Component, PropTypes} from 'react';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';

let SelectableList = makeSelectable(List);

export default class ListExampleSelectable extends Component {

    wrapState(ComposedComponent) {
    return class SelectableList extends Component {
        static propTypes = {
        children: PropTypes.node.isRequired,
        defaultValue: PropTypes.number.isRequired,
        };

        componentWillMount() {
        this.setState({
            selectedIndex: this.props.defaultValue,
        });
        }

        handleRequestChange(event, index){
        this.setState({
            selectedIndex: index,
        });
        };
        render() {
        return (
            <ComposedComponent
            value={this.state.selectedIndex}
            onChange={this.handleRequestChange.bind(this)}
            >
            {this.props.children}
            </ComposedComponent>
        );
        }
    };
    }
    SelectableList = wrapState(SelectableList)

    render() {
        return(    
            <SelectableList defaultValue={3}>
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
        )
    }
}