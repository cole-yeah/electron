/*
*读写本地json文件
*/

// var textarea = document.getElementsByTagName('textarea')[0],
//     read_btn = document.getElementById('read_btn'),
//     write_btn = document.getElementById('write_btn');
// const fs = require('fs')
// function writeFile() {
//     var text = textarea.value;
//     console.log("写内容："+text);
//     var fileN =  __dirname+'/test.json';
//     console.log("文件名："+fileN);
//     fs.writeFileSync(fileN,text, 'utf8');
//     console.log("写完成！");
// }
// function readFile() {
//     var fileN = __dirname+'/test.json';
//     console.log("文件名："+fileN);
// 	var content = fs.readFileSync(fileN,'utf-8');
//  	textarea.value=content;
//     console.log("读完成！");
// }

// write_btn.onclick = writeFile;
// read_btn.onclick = readFile;

import React, { Component, PropTypes } from 'react'
const remote = window.require('electron').remote
const fs = remote.require('fs')


export default class Test extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(e) {
    var textarea = document.getElementsByTagName('textarea')[0]
    fs.readFile('./test.json','utf-8', (err,data) => {
      if(err) {
        console.error(err)
      } else {
        console.log(typeof(data))
        data = JSON.parse(data)
        var data = JSON.stringify(data[0].children[0])
        textarea.value=data
        console.log("读完成！")
        console.log(data)
      }
    });
  }
    writeClick(e) {
    var textarea = document.getElementsByTagName('textarea')[0]
    var text = textarea.value
    var content = fs.writeFileSync('./test.json',text,'utf-8');
    console.log("写完成！");
  }

  render() {
    return (
      <div>
        <h2>456</h2>
        <button onClick={this.handleClick.bind(this)}>Read</button>
        <button onClick={this.writeClick.bind(this)}>Write</button>
      </div>
    )
  }
}

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
    }
  }

    handleClick(e) {
      alert("123")
    }

  render() {
    const { posts } = this.props
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
              <TableHeaderColumn style={style.tableCreate} tooltip="The edit">edit</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {
              posts.map( (post, index) => 
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

