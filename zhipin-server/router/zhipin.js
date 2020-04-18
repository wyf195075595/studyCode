var express = require('express')
var router = express.Router()
var url=require('url') //处理get请求参数
var userModel = require('../modules/users')
var chatModel = require('../modules/chats')
var crypto = require('crypto')
router.get('/',(req,res)=>{
    res.send('zhipin')
})

// 注册
router.post('/register',(req,res)=>{
    console.log(req.body)
    const {username,pwd,type} = req.body
    if(username&&pwd&&type){
        userModel.find({username},(err,users)=>{
            if(users.length>0){//用户名已存在
                res.json({
                    status:0,
                    msg:'用户已存在',
                    data:''
                })
            }else{
                var user =new userModel({
                    username,
                    password:crypto.createHash('md5').update(pwd).digest('hex') ,
                    type
                })
                user.save((err,data)=>{
                    if(!err){
                        res.json({
                            status:1,
                            msg:'注册成功',
                            data
                        })
                    }else{
                        res.json({
                            status:0,
                            msg:'注册失败',
                            data:err
                        })
                    }
                })
            }
        })
        
    }else{
        res.json({
            status:0,
            msg:'参数有误',
            data:''
        })
    }

})

// 登陆
router.post('/login',(req,res)=>{
    const {username,pwd} = req.body
    if(username&&pwd){
        userModel.find({username},(err,users)=>{
            if(users.length>0){//用户名存在
                if(users[0].password === crypto.createHash('md5').update(pwd).digest('hex')){
                     res.json({
                        status:1,
                        msg:'登陆成功',
                        data:users[0]
                    })
                }else{
                    res.json({
                        status:0,
                        msg:'密码错误',
                        data:''
                    })
                }
               
            }else{
                res.json({
                    status:0,
                    msg:'用户名不存在',
                    data:''
                })
            }
        })
        
    }else{
        res.json({
            status:0,
            msg:'参数有误',
            data:''
        })
    }

})

// 用户信息完善
router.post('/updateuserinfo',(req,res)=>{
    var  {id,avatar,post,info,company,salary} = req.body
    if(!company&&!salary){
        company = '',
        salary = ''
    }

    if(avatar&&post&&info&&id){
        userModel.findByIdAndUpdate(id,{avatar,post,info,company,salary},{new:true},(err,data)=>{
            console.log(data)
            if(!err){
                res.json({
                    status:1,
                    msg:'完善用户信息成功',
                    data
                })
            }else{
                res.json({
                    status:0,
                    msg:'完善用户信息失败',
                    data:err
                })
            }
        })
    }else{
        res.json({
            status:0,
            msg:'参数有误',
            data:''
        })
    }
    
    
})

// 获取用户信息
router.get('/getuserinfo',(req,res)=>{
    var id=url.parse(req.url,true).query.id;
    console.log(id)
    if(id){
        userModel.findById(id,(err,data)=>{
            if(!err){
                res.json({
                    status:1,
                    msg:'获取用户信息成功',
                    data
                })
            }else{
                res.json({
                    status:0,
                    msg:'获取用户信息失败',
                    data:''
                })
            }
        })
    }else{
        res.json({
            status:0,
            msg:'参数错误',
            data:''
        })
    }
})

// 获取用户类型列表
router.get('/getuserbytype',(req,res)=>{
    var type=url.parse(req.url,true).query.type;
    console.log(type)
    if(type){
        userModel.find({type},(err,data)=>{
            if(!err){
                res.json({
                    status:1,
                    msg:'获取用户列表成功',
                    data
                })
            }else{
                res.json({
                    status:0,
                    msg:'获取用户列表失败',
                    data:''
                })
            }
        })
    }else{
        res.json({
            status:0,
            msg:'参数错误',
            data:''
        })
    }
})

// 获取当前用户的聊天消息列表 id
router.get('/getchats',(req,res)=>{
    var id=url.parse(req.url,true).query.id;
    if(id){
        userModel.find({},function (err,userDocs) {
            if(!err){
                // const users ={}
                // // 将所有user信息变成 key为 _id ,value为{username:'',avatar:''}对象
                // userDocs.forEach(doc=>{
                //     users[doc._id] = {username:doc.username,avatar:doc.avatar}
                // })

                const users = userDocs.reduce((users,user)=>{
                    users[user._id] = {username:user.username,avatar:user.avatar}
                    return users
                },{})
                // reduce(回调，初始值)

                chatModel.find({$or:[{from:id},{to:id}]},'-__v -password',(error,chats)=>{
                    if(!error){
                        res.json({
                            status:1,
                            msg:'获取聊天列表成功',
                            data:{users,chats}
                        })
                    }else{
                        res.json({
                            status:0,
                            msg:'获取聊天列表失败',
                            data:''
                        })
                    }
                })
            }else{
                res.json({
                    status:0,
                    msg:'用户获取失败',
                    data:''
                })
            }

        })
        
    }else{
        res.json({
            status:0,
            msg:'参数有误',
            data:''
        })
    }


}) 

// 修改指定消息为已读
router.post('/changread',(req,res)=>{
    const from = req.body.from
    const to = req.body.to
    console.log(req.body)
    if(from,to){
        // {multi:true}更新所有符合条件的数据
        chatModel.update({from,to,read:false},{read:true},{multi:true},(err,doc)=>{
            if(!err){
                res.json({
                    status:1,
                    msg:'修改状态成功',
                    data:doc
                })
            }else{
                res.json({
                    status:0,
                    msg:'修改阅读状态失败',
                    data:''
                })
            }
        })
    }else{
        res.json({
            status:0,
            msg:'参数有误',
            data:''
        })        
    }
}) 
module.exports = router