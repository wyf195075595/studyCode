var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/myblog",{ useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false });//建立链接
mongoose.connection.on('connected',function(){
    console.log('已连接')
})
module.exports=mongoose;