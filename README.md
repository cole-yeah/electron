# electron no by myself
npm run dev -- browser open localhost:3000
1. npm run buildapp ==> 2. npm start -- app open

//todo 2016.12.13 
待优化1.dialog重复的很多，可以做成复用，对于this.state的不知怎么弄及多个onChange都可以都放到父组件上吗？
2.菜单点击有时会出现卡顿现象，会不会是action过多，就是点击一个二级菜单会调用三个action，selected_menus、receive_items、combine_items三个，也就是说要刷新三次页面，造成过多的性能损耗？
3.勾选菜单有时也会卡顿，是不是过多使用Object.assign?因为有5个数组嵌套，每次全局级联时造成的？？

未完成1.json文件的导出导入，大概思路：1.用<input type='file'>点击调用node.js下的fs模块，及electron 的api


