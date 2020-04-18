var socketIO = require('socket.io')
const chatModel = require('../modules/chats')
module.exports = function(server) {

const io = socketIO(server)
    io.on('connection', function (socket) {
        console.log('有一个客户端连接上了服务器')
        // 监听客户端发送消息方法，有数据就转发给客户端
        socket.on('sendMsg',function ({to,from,content}) {
            //准备数据
            const chat_id = [to,from].sort().join('_') //这样处理[from,to],[to,from]结果一样
            const create_time = Date.now()
            // 处理数据
            new chatModel({
                from,//发送用户的id
                to,//接收用户的id
                chat_id,//from,to组成字符串
                content,//聊天内容
                create_time,//创建时间  
            }).save((err,chatMsg)=>{
                if(!err){
                    // 向所有连接的用户发送消息
                    console.log(chatMsg)
                    // 向客户端发送数据
                    io.emit('reciveMsg',chatMsg)
                }
            })
        })
    })




}