var mongoose = require("./db.js");
// 映射
var Schema=mongoose.Schema;

var chatSchema = Schema({
    from:String,//发送用户的id
	to:String,//接收用户的id
    chat_id:String,//from,to组成字符串
    content:String,//聊天内容
    read:{type:Boolean,default:false},// 是否已读
    create_time:String,//创建时间
},{collection:"chats"})

// 模型
var chats=mongoose.model("chats",chatSchema);
module.exports=chats;