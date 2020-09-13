var mongoose = require("./db.js");
// 映射
var Schema=mongoose.Schema;

var userSchema = Schema({
    name:String,
	pwd:String,
    avatar:String,
    time:String
},{collection:"users"})

// 模型
var user=mongoose.model("users",userSchema);
module.exports=user;