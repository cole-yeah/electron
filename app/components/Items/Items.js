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
import Search from '../Search/Search'

const remote = window.require('electron').remote
const fs = remote.require('fs')

const style = {
  tableCreate: {
    width: 40,
  },
  table: {
    overflowX: 'hidden'
  }
}

export default class Items extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: false,
      showCheckboxes: true,
      posts: [],
    }
  }

  componentDidMount() {
    console.log('执行items componentDidMount')
    fs.readFile('./test.json', 'utf-8', (err, data) => {
      if(err) {
        console.log(err)
      } else {
        // console.log(typeof(data))
        // console.log(data.length)
        data = JSON.parse(data)
        // console.log(data.length)
        const i = 0, j = 1
        // console.log(data[i].children[j].functions[0])
        this.setState({posts:(data[i].children[j].functions[0].operations)})
      }
    })
  }

    handleClick(e) {
      alert("123")
    }

  render() {

    return (
      <div>

        <Search/>

        <Table
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          style={style.table}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip="The opId">opId</TableHeaderColumn>
              <TableHeaderColumn tooltip="The opName">opName</TableHeaderColumn>
              <TableHeaderColumn tooltip="The elementClass">elementClass</TableHeaderColumn>
              <TableHeaderColumn style={style.tableCreate} tooltip="The check">check</TableHeaderColumn>
              <TableHeaderColumn style={style.tableCreate} tooltip="The EDIT">EDIT</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {
              this.state.posts.map( (post, index) => 
              <TableRow key={index}>
                <TableRowColumn>{post.opId}</TableRowColumn>
                <TableRowColumn>{post.opName}</TableRowColumn>
                <TableRowColumn>{post.elementClass}</TableRowColumn>
                <TableRowColumn style={style.tableCreate}>
                  <FloatingActionButton mini={true} secondary={true} onClick={this.handleClick.bind(this)}>
                   <ContentForward />
                  </FloatingActionButton>
                </TableRowColumn>
                <TableRowColumn style={style.tableCreate}>
                  <FloatingActionButton mini={true} secondary={true} onClick={this.handleClick.bind(this)}>
                   <ContentCreate />
                  </FloatingActionButton>
                </TableRowColumn>
              </TableRow>
              )
            }
          </TableBody>
        </Table>
        
      </div>
    )
  }
}