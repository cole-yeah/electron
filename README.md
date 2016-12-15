# electron no by myself
npm run dev -- browser open localhost:3000
1. npm run buildapp ==> 2. npm start -- app open

//todo 2016.12.13 
待优化1.dialog重复的很多，可以做成复用，对于this.state的不知怎么弄及多个onChange都可以都放到父组件上吗？
2.菜单点击有时会出现卡顿现象，会不会是action过多，就是点击一个二级菜单会调用三个action，selected_menus、receive_items、combine_items三个，也就是说要刷新三次页面，造成过多的性能损耗？
3.勾选菜单有时也会卡顿，是不是过多使用Object.assign?因为有5个数组嵌套，每次全局级联时造成的？？

未完成1.json文件的导出导入，大概思路：1.用<input type='file'>点击调用node.js下的fs模块，及electron 的api

//todo 2016.12.14
关于 13 的第一个问题，state不应该在组件中setState，提取出来…毕竟redux，今天完成一下  1.不行…onChange及时更新到界面上要setState;2.尝试使用ref也不行，如果只是单个input标签的话就可以，
但是因为使用的是ui框架的input，嵌套比较深，不用通过this.refs.xxx.value获取相应的值;3.那就把几个页面所需要的state都写到this.state上，如果为false则赋值为''，
如： haha: this.props.api.haha || ''

//todo 2016.12.15
组件的复用差不多了，自己写的代码也是看的醉醉的，很乱。也有挺多问题暴露出来：
1.operations修改是会删除一些东西，每修改一次删一个，暂未debug
2.webApis新增的点击是单选……原因可能为未给其独一无二的id值取判断
3.修改的时候要根据什么去修改到相应的位置呢？id值？id值应该也会被相应的修改的。。

