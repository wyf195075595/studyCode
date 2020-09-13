// // 引入客户端
// import io from 'socket.io-client'
// // 连接服务器，得到连接的socket对象
// const socket = io('ws://localhost:5000')

// socket.on('reciveMsg',function(data){
//     console.log('客户端接收到消息',data)
// })

// // 客户端向服务端发送消息
// socket.emit('sendMsg',{name:'李四',data:Date.now()})
// console.log('客户端发送了',{name:'李四',data:Date.now()})