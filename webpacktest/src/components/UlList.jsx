import React from 'react';//创建组件，虚拟DOM元素，生命周期

import Item from '@/components/Item'

import ulList from '@/css/UlList.css'


export default  class UlList extends React.Component {
    constructor(){
      super()
      this.state = {//使用super（）后才有this，state相当于vue中的data(){} 权限可读写
        list : [
          {id:1,user:'唐一',content:'嘻嘻哈哈'},
          {id:2,user:'楚二',content:'此次苦苦'},
          {id:3,user:'张三',content:'哔哩哔哩'},
          {id:4,user:'李四',content:'啪啦啪啦'},
          {id:5,user:'王五',content:'噼噼啪啪'},
        ],
        msg:'我是state中的msg'
      }
    }
    play = ()=>{
      this.state.msg = '改变了'
      // console.log(this.state.msg)//此方式页面不跟新
      this.setState({//类似于原生小程序中的setData,,【！注意！】此方法为异步，可以添加cb函数
        msg:'我变了'
      },function(){
        console.log('完事了')
      })
    }
    changeTxt = (e)=>{
      // 获取表单数据1、e.target.value 2、通过this.refs.XXX.defaultValue类似于vue（只是没有$）
      // console.log(this.refs.value.defaultValue)
      this.setState({
        msg:e.target.value
      })
    }
    
    render() {//用于渲染当前组件的虚拟DOM元素
      this.name = '里斯'
      // console.log(this.name)
      // console.log(this.state.list)
      return ( 
        <div>
          {/* {ulList.title +'  test'} */}
          <h1 onClick={this.play} className={ [ulList.title,'test'].join(" ")} >评论列表!</h1>
          <p>{this.state.msg}</p>
          {/* 为文本框绑定value后，要么提供 readOnly 属性，要么添加onChange函数 */}
          <input type="text" value={this.state.msg} readOnly/>
          <input type="text" value={this.state.msg} ref='value' onChange = {this.changeTxt}/>
          <h2>{this.props.date.toLocaleTimeString()}.</h2>
          {this.state.list.map(item=><Item {...item} key={item.id}></Item>)}
        </div>
      );
    }
  }

//#region 可折叠注释




//#endregion