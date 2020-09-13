import React,{Component} from 'react'
import {connect} from 'react-redux'

import {
    List,
    Badge

} from 'antd-mobile'
const Item = List.Item
const Brief = Item.Brief

// 依据chat_id吧消息分类
function getclassMsgs(chatMsgs,userId){
    let lastMsgObjs = {}  // {chat_id:lastMsg} --chat_id,最后一条消息
    chatMsgs.forEach((msg) => {
        // 对msg经行个体统计
        if(msg.to ===userId && !msg.read ){
            msg.unReadCount = 1
        }else{
            msg.unReadCount = 0
        }

        const chatId = msg.chat_id   //取出该消息的chat_id
        const lastMsg = lastMsgObjs[chatId] //尝试从分组中取出
        if(lastMsg){//说明已存在
            // 保存已有的未读状态
            let unReadCount = lastMsg.unReadCount  + msg.unReadCount  //第一次的unreadCount + 后来的每次unreadCount  --
            if(msg.create_time > lastMsgObjs[chatId].create_time){//如果此消息创建时间大于已储存，则更新
                lastMsgObjs[chatId] = msg
            }
            lastMsgObjs[chatId].unReadCount = unReadCount   //为最新的lastMsgObjs[chatId]更新 unreadCount
        }else{//说明不存在
            lastMsgObjs[chatId] = msg
        }
    });
    // 得到所有lastMsgs数组
    const lastMsgs =  Object.values(lastMsgObjs) 
    // 按发表时间经行降序
    lastMsgs.sort(function(a,b){
        return b.create_time - a.create_time
    })

    return lastMsgs
}

class Message extends Component {
    render(){
        const {user} = this.props 
        const {chats,users} = this.props.chat

        const msgList =  getclassMsgs(chats,user._id)
        console.log(user._id)
        console.log(msgList)
        // 对消息经行分组by chat_id
        return(
            <List style={{paddingTop:50}}>
                {msgList.map(item=>{
                    const targetUserId = item.from === user._id ? item.to : item.from

                    const targetUser = users[targetUserId]
                    return  <Item   onClick={()=>this.props.history.push(`/chat/${targetUserId}`)}
                            extra={<Badge text={item.unReadCount}/>}
                            thumb={targetUser.avatar?require(`../../assets/images/${targetUser.avatar}.png`):null}
                            arrow='horizontal'
                            key = {item._id}
                        >
                            {item.content}
                            <Brief>{targetUser.username}</Brief>
                    </Item>
                })}
            </List>
        )
    }
}

export default connect(
    state=>({user:state.user,chat:state.chat}),

)(Message)