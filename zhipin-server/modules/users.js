var mongoose = require("./db.js");
// 映射
var Schema=mongoose.Schema;

var userSchema = Schema({
    username:String,//用户名
	password:String,//密码
    type:String,//用户类型
    post:String,//职位
    avatar:String,// 头像
    info:String,//个人职位简介
    company:String,//公司名称
    salary:String//工资
},{collection:"users"})

// 模型
var user=mongoose.model("users",userSchema);
module.exports=user;