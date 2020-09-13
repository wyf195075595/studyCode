var mongoose = require("./db.js");
// 映射
var Schema=mongoose.Schema;

var messageSchema = Schema({
    content:String,
    time:String,
    name:String,
    email:String,
    website:String,
    avatar:String
},{collection:"messages"})

// 模型
module.exports=mongoose.model("messages",messageSchema);