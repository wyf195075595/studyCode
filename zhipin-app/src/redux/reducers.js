/*
包含n 个reducer函数：根据老的state和指定的action返回一个新的state
 */

import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG,RESETUSER,RECEIVE_USER_LISTR,RECEIVE_MSG_LISTR,RECEIVE_MSG, MSG_READ} from './action-types'
import {getRedirectTo} from '../utils/index'
// 保存用户数据
const initUser = {username:'',type:'',msg:'',redirectTo:''}//用户名/类型/错误提示
 function user (state = initUser,action){
    switch(action.type){
        case AUTH_SUCCESS: //data是user
            const {type,avatar} = action.data
            return {...action.data,redirectTo:getRedirectTo(type,avatar)}//新状态覆盖老状态  ---action.data
        case ERROR_MSG: //data是 msg
            return {...state,msg:action.data}//新状态覆盖老状态  ---action.data.msg
        case RESETUSER: //data是 msg
            return {...initUser, msg: action.data}//新状态覆盖老状态  ---action.data.msg
        
        default:
            return state 
    }
     
 }

//  产生userlist
const inituserlist = []
 function userlist (state = inituserlist,action){
    switch(action.type){
        case RECEIVE_USER_LISTR: //data是user
            return action.data
        default:
            return state 
    }
}

// 产生聊天数据
const initChat = {
    users:{},//所有用户对象
    chats:[],//相关聊天msg数组
    unReadCount:0//未读
}
function chat (state = initChat , action){
    switch(action.type){
        case RECEIVE_MSG:
            const {chatMsg} = action.data
            return {users:state.users,chats:[...state.chats,chatMsg],unReadCount:state.unReadCount + (!chatMsg.read && chatMsg.to === action.data.userid ? 1 : 0 )} //返回新消息列表数据+1
        case RECEIVE_MSG_LISTR:
            const {users,chats,userid} = action.data
            const a = chats.reduce((preTotal,msg)=> preTotal + (!msg.read && msg.to ===  userid ? 1 : 0 ),0)
        
            return {users,chats,unReadCount:a}
        case MSG_READ:
            const {from,to,count} = action.data
            state.chats.forEach(msg => {
                if(msg.from===from && msg.to===to && !msg.read) {
                  msg.read = true
                }
              })
            return {users:state.users,
                    chats:state.chats.map(msg=>{
                        if(msg.to ===to && msg.from===from && !msg.read){
                            return {...msg,read:true}
                        }else{
                            return msg
                        }
                    })
                ,unReadCount:state.unReadCount - count}
        default:
            return state
    }
}
// 向外暴露对象{user:{},yyy}
export default combineReducers({
    user,
    userlist,
    chat
})

