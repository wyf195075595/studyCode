// 1、这两个包导入时，接收成员必须这么写
import React from 'react';//创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom';//把创建好的组件和虚拟DOM，放到页面上面展示的

import Hello from '@/components/Hello'
//3、使用ReactDOM把虚拟元素渲染到页面
//参数1：要渲染的虚拟DOM元素
//参数2：指定页面上一个容器

var a =10;
function aaa(){
    return <h4>111</h4>
}
//函数方式声明组件
function Clock1(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  //对象方式申明组件
  class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  //使用.jsx单独抽离组件
ReactDOM.render(<Hello name='111' title='222'></Hello>,document.getElementById('root'))