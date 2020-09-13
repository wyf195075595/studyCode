/**
 * 包含n个接口请求函数
 */
import ajax from './axios'

// 注册
export const Reqregister = (user) =>ajax('/register',user,'POST')

// 登陆
export const Reqlogin = (user) =>ajax('/login',user,'POST')

// 完善用户信息
export const Updateinfo = (user) =>ajax('/updateuserinfo',user,'POST')


// 完善用户信息
export const Getuserinfo = (id) =>ajax('/getuserinfo',id,'GET')

// 完善用户信息
export const Getuserbytype = (type) =>ajax('/getuserbytype',type,'GET')

// 获取聊天信息
export const Getchatlist = (id) =>ajax('/getchats',{id},'GET')

// 修改指定消息为已读 
export const Reqreadmsg = ({from,to}) =>ajax('/changread',{from,to},"POST")