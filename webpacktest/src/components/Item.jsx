import React from 'react';//创建组件，虚拟DOM元素，生命周期

import itemobj from '@/css/item.css'
console.log(itemobj)
export default function Item(props){
    return <div className={itemobj.itembox} >
        <h3>评论人：{props.user}</h3>
        <p>评论内容：{props.content}</p>
    </div> 
  }