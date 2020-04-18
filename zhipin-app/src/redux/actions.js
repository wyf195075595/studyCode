/*
包含n个action creator 
同步action
异步action
 */
import {ERROR_MSG,AUTH_SUCCESS,RESETUSER,RECEIVE_USER_LISTR,RECEIVE_MSG,RECEIVE_MSG_LISTR,MSG_READ} from './action-types'
import io from 'socket.io-client'
import {
    Reqregister,
    Reqlogin,
    Updateinfo,
    Getuserinfo,
    Getuserbytype,
    Reqreadmsg,
    Getchatlist
} from '../api/index'

// 授权成功同步action
const authSuccess = (user) =>({type:AUTH_SUCCESS,data:user})

//错误提示信息的action
const errorMsg = (msg) =>({type:ERROR_MSG,data:msg})

// 重置用户同步action
export const resetUser = (msg) =>({type:RESETUSER,data:msg})

// 接收用户列表
const getuserlist = (userlist) =>({type:RECEIVE_USER_LISTR,data:userlist})

// 接收消息列表
export const reciveMsgList = ({users,chats,userid}) =>({type:RECEIVE_MSG_LISTR,data:{users,chats,userid}})

// 接收一个同步消息
const getMsg = (chatMsg,userid) =>({type:RECEIVE_MSG,data:{chatMsg,userid}})

// 读取某个消息的同步action
const msgRead = ({count,from,to}) =>({type:MSG_READ,data:{count,from,to}})

// 读取消息异步action
export const readMsg = (from,to) =>{
    console.log(from,to)
    return async dispatch=>{
        const res = await Reqreadmsg({from,to})
        console.log(res.data)
        if(res.data.status === 1){
            const count = res.data.data.nModified
            console.log("阅读数量：",count)
            dispatch(msgRead({count,from,to}))
        }
    }
}

// 异步获取聊天列表
async function  getMsgList (userid,dispatch){
    var localUser = JSON.parse(localStorage.getItem('user'))
    initIO(userid,dispatch)//初始化io
    if(localUser){
        const id = localUser._id
        const res = await Getchatlist(id)
        console.log(res.data)
        if(res.data.status === 1){
            const {users,chats} = res.data.data
            console.log(users,chats)
            // 分发action
             
            dispatch(reciveMsgList({users,chats,userid}))
        }else{

        }
    }
    
}

//  注册异步action
 export const register =(user)=>{
    const {username,pwd,rpwd,type} = user
    console.log(user)
    if(!username||!type||!pwd||!rpwd){
        return errorMsg('注册信息不完整！')
    }
    if(pwd!==rpwd){
        return errorMsg('两次密码不一致！')
    }
    return async dispatch =>{
       const info = {username,pwd,type}
       const res =  await Reqregister(info) //使用 await 它所在函数必须声明 async
       localStorage.setItem('user',JSON.stringify(res.data.data))
        console.log('ww',res.data)
       if(res.data.status === 1 ){//成功
            getMsgList(res.data.data._id,dispatch)
            dispatch(authSuccess(res.data.data))
        }else{//失败
            dispatch(errorMsg(res.data.msg))
        }
    }
 }

 //  登陆异步action
 export const login =(user)=>{
    const {username,pwd} = user
    if(!username){
        return errorMsg('请输入用户名！')
    }
    if(!pwd){
        return errorMsg('请输入密码！')
    }
    return async dispatch =>{
       const res =  await Reqlogin(user) //使用 await 它所在函数必须声明 async
       console.log(res.data)
       localStorage.setItem('user',JSON.stringify(res.data.data))
        if(res.data.status === 1 ){//成功
            getMsgList(res.data.data._id,dispatch)
            dispatch(authSuccess(res.data.data))
        }else{//失败
            dispatch(errorMsg(res.data.msg))
        }
    }
 }

//  用户信息完善，异步
 export const updateuserinfo = (user)=>{
    const {id,avatar,post,info,company,salary} = user
    if(id&&avatar&&post&&info){
        console.log("请求信息",id,avatar,post,info,company,salary)
        return async dispatch =>{
            const res = await Updateinfo(user)
            console.log(res.data)
            if(res.data.status === 1 ){//成功
                dispatch(authSuccess(res.data.data))
            }else{//失败
                dispatch(errorMsg(res.data.msg))
            }
        }
    }else{

    }
    
 }


// 获取用户信息
export const getuserInfo  = (id) =>{
    console.log(id)
    return async dispatch =>{
        let res = await Getuserinfo({id})
        console.log(res.data)
        if(res.data.status === 1 ){//成功
            getMsgList(res.data.data._id,dispatch)
            dispatch(authSuccess(res.data.data))
        }else{//失败
            dispatch(errorMsg(res.data.msg))
        }
    }
}

// 获取用户类型列表
export const getUserBytype  = (type) =>{
    console.log(type)
    return async dispatch =>{
        let res = await Getuserbytype({type})
        console.log(res.data)
        if(res.data.status === 1 ){//成功
            dispatch(getuserlist(res.data.data))
        }
    }
}


// 初始化io
function initIO(userid,dispatch){
    if(!io.socket){
        io.socket = io('ws://localhost:5000')
        io.socket.on('reciveMsg',function(chatMsg){
            console.log('客户端接收消息11111',chatMsg)
            // 保存用户相关消息
            if(userid === chatMsg.from || userid === chatMsg.to){
                dispatch(getMsg(chatMsg,userid))
            }
        })
    }
}
// 发送消息

export const sendMsg = ({to,from,content})=>{
    console.log('客户端发送的消息',to,from,content)
    return dispatch=>{
        io.socket.emit('sendMsg',{to,from,content})
    }
}