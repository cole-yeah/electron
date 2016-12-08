import React, { Component, PropTypes } from 'react'
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column'
import TableRow from 'material-ui/lib/table/table-row'
import TableHeader from 'material-ui/lib/table/table-header'
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import TableBody from 'material-ui/lib/table/table-body'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentCreate from 'material-ui/lib/svg-icons/content/create'
import ContentForward from 'material-ui/lib/svg-icons/content/forward'
import RaisedButton from 'material-ui/lib/raised-button'
import Search from '../Search/Search'
import Dialog from '../Dialog/Dialog'
import ChildrenItems from './ChildrenItems'
import FunctionsItems from './FunctionsItems'

const style = {
  raisedButton: {
    margin: 10
  },
}

export default class Items extends Component {

  constructor(props) {
    super(props)
  }    

handleClick(){
  console.log('123')
}

  render() {
    const { items=[], itemsActions } = this.props
    return (
      <div>

        <Search
          searchTitle={items} />

        {
          items.map((item, i) => 
            <ChildrenItems
              key={i}
              item={item}
              checked={item.checked}
              functionId={item.functionId}
              functionName={item.functionName}
              keyWord={['functionId', 'functionName']}
              itemsActions={itemsActions}
              _handleSelected={itemsActions.handleSelected}
              _handleOpen={itemsActions.handleOpen}
              _handleEdit={itemsActions.handleEdit}
              />
          )
        }

        {
          items.map(menu => menu.operations.map(item =>
            <FunctionsItems
              keyWord={['opId', 'opSort', 'opName', 'elementClass']}
              opId={item.opId}
              opSort={item.opSort}
              opName={item.opName}
              elementClass={item.elementClass}
              checked={item.checked}
              functions={item}/>
          ))
        }
        
        <div className="exp-imp">
          <RaisedButton label="导 入" secondary={true} style={style.raisedButton} />
          <RaisedButton label="导 出" secondary={true} style={style.raisedButton} />
        </div>
      </div>
    )
  }
}
