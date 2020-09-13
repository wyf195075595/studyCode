var mongoose = require("./db.js");
// 映射
var Schema=mongoose.Schema;

var articleSchema = Schema({
    title:String,//标题
	tag:String,//标签
    picUrl:String,//头图
    time:String,//时间
    comments:[{type:Schema.Types.ObjectId,ref:'comments'}],//评论
    views:{type:Number,default:0},//浏览次数
    content:String,//文章内容
    thumbs:{type:Number,default:0}//点赞数
},{collection:"articles"})

// 模型
module.exports=mongoose.model("articles",articleSchema);