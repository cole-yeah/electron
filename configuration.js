/*
*读写本地json文件
*/

var fs = require('fs'),
    textarea = document.getElementsByTagName('textarea')[0],
    read_btn = document.getElementById('read_btn'),
    write_btn = document.getElementById('write_btn');

function writeFile() {
    var text = textarea.value;
    console.log("写内容："+text);
    var fileN = __dirname+'/message.txt';
    console.log("文件名："+fileN);
    fs.writeFileSync(fileN,text, 'utf8');
    console.log("写完成！");
}
function readFile() {
    var fileN = __dirname+'/info.txt';
    console.log("文件名："+fileN);
	var content = fs.readFileSync(fileN,'utf-8');
 	textarea.value=content;
    console.log("读完成！");
}

write_btn.onclick = writeFile;
read_btn.onclick = readFile;
