// 1、这两个包导入时，接收成员必须这么写
import React from 'react';//创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom';//把创建好的组件和虚拟DOM，放到页面上面展示的

import UlList from './components/UlList'
  //3、使用.jsx单独抽离组件 import Hello from '@/components/Hello'  eg:<Hello name='111' title='222'></Hello>


ReactDOM.render(<div>
  <UlList date={new Date()} name="五五"></UlList>


  </div>,document.getElementById('root'))