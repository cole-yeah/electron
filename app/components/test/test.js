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
var fs = require('fs')

const _file = '../../../test.json'

export default class Test extends Component {

  handleClick(e) {
    fs.readFileSync(_file, (err, data) => {
      if(err) {
        console.log(err)
      } else {
        console.log(data)
      }
    })
  }

  render() {
    return (
      <div>
        <h2>456</h2>
        <button onClick={this.handleClick.bind(this)}>click me</button>
      </div>
    )
  }
}
