var mongoose = require("./db.js");
// 映射
var Schema=mongoose.Schema;

var greatSchema = Schema({
    uid:String,//用户id
    aid:String,//文章id
    status:{type:Number,default:0},//点赞状态 0未点赞 1已点赞

},{collection:"greats"})

// 模型
var greats=mongoose.model("greats",greatSchema);
module.exports=greats;