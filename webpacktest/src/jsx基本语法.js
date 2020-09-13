// 1、这两个包导入时，接收成员必须这么写
import React from 'react';//创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom';//把创建好的组件和虚拟DOM，放到页面上面展示的


//2、创建虚拟DOM元素
//参数1：创建元素类型，字符床表示元素名称
//参数2：是一个对象/null，表示当前这个DOM元素的属性
//参数n：其他子节点
//eg <div id="myh1" title="this is a h1" >这是一个div</div>
const mydiv = React.createElement('div',{id:'myh1',title:'this is a h1'},'这是一个div')
const divwarp = React.createElement('div',null,'这是一个div容器',mydiv)

// 上面方式写页面太慢了，直接写html最好了
const div = <div>嗡嗡嗡<h1>asdjahk</h1></div>  //此种方式不能渲染成功
//报错error:You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
//解决：混合写入的类似于html的语法，叫jsx语法 ；符合html语法



//3、使用ReactDOM把虚拟元素渲染到页面
//参数1：要渲染的虚拟DOM元素
//参数2：指定页面上一个容器

ReactDOM.render(div,document.getElementById('root'))