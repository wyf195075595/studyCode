var mongoose = require("./db.js");
// 映射
var Schema=mongoose.Schema;

var commentSchema = Schema({
    aid:{type:Schema.Types.ObjectId,ref:'articles'},
    content:String,
    time:String,
    name:String,
    email:String,
    website:String,
    avatar:String
},{collection:"comments"})

// 模型
module.exports=mongoose.model("comments",commentSchema);