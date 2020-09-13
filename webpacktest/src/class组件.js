// 1、这两个包导入时，接收成员必须这么写
import React from 'react';//创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom';//把创建好的组件和虚拟DOM，放到页面上面展示的

import Hello from '@/components/Hello'
import js from '@/class继承'
//3、使用ReactDOM把虚拟元素渲染到页面
//参数1：要渲染的虚拟DOM元素
//参数2：指定页面上一个容器

var a =10;
function aaa(){
    return <h4>111</h4>
}
//1、函数方式声明组件,外界传props参数，需接收，props.XXX访问,权限只读,没有私有数据和生命周期
function Clock1(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  //2、class关键字方式申明组件，外界传props参数，不需接收，直接this.props访问，权限可读写，有私有数据和生命周期
  class Clock extends React.Component {
    constructor(){
      super()
      this.state = {//使用super（）后才有this，state相当于vue中的data(){} 权限可读写
        msg:'我是私有数据'
      }
    }
    render() {//用于渲染当前组件的虚拟DOM元素
      this.name = '里斯'
      console.log(this.name)
      console.log(this.state.msg)
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  //3、使用.jsx单独抽离组件 import Hello from '@/components/Hello'  eg:<Hello name='111' title='222'></Hello>

list = [
  {id:1,user:'唐一',content:'嘻嘻哈哈'},
  {id:2,user:'楚二',content:'此次苦苦'},
  {id:3,user:'张三',content:'哔哩哔哩'},
  {id:4,user:'李四',content:'啪啦啪啦'},
  {id:5,user:'王五',content:'噼噼啪啪'},
]

ReactDOM.render(<div>
  <Hello name='111' title='222'></Hello>
  <Clock date={new Date()} name="五五"></Clock>


  </div>,document.getElementById('root'))