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
        const a = data
        textarea.value=a.A
        console.log("读完成！")
        console.log(a["A"])
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
