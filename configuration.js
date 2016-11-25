/*
*读写本地json文件
*/

'use strict'

const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;

ipcRenderer.on('save-state', (event, state) => {
  console.log('save-state:%O %O', event, state)
})

/**
 * 点击保存按钮（修改or新增）时触发，向ipcmain发送,data为已修改的json数组
 */
ipcRenderer.send('save-json-file',data);
