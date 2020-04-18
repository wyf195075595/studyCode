var mongoose=require("mongoose");//引入mongoose
mongoose.connect("mongodb://127.0.0.1:27017/zhipin",{ useNewUrlParser: true, useUnifiedTopology: true });//建立链接
mongoose.connection.on('connected',function(){
    console.log('已连接')
})
module.exports=mongoose;