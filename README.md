# 基于electron + react + redux + webpack修改json文件的桌面应用
**浏览器查看**：
1. App.js文件下注释相应引用：</br>    
    this.props.menusActions.readItemsFile()  //electron下，用fs读取文件<br/> 
    this.props.menusActions.receiveMenus()  //web下，假数据<br/> 
2. items.js和actions文件下menus.js注释相应的fs引用</br>
    读取本地json文件获取列表,根据参数first,second 索引出点击菜单下的数组</br>
     `export function readItemsFile() {`</br>
       `return dispatch => {`</br>
         `return (fs.readFile('./menus.json', 'utf-8', (err, data) => {`</br>
           `data = JSON.parse(data)`</br>
           `dispatch(receiveMenus(data))`</br>
         `}))`</br>
       `}`</br>
     `}`</br>
3. npm run dev -- browser open localhost:3000</br>
**打开应用查看**：
1. 操作和浏览器相反的操作</br>
2. npm run build </br>
3. npm start </br>
**打包成应用（win下版本）**：
1. electron-packager ./ --platform=win32 --arch=all --version=1.0.6 --out=../APP/ --overwrite=true --prune=true


