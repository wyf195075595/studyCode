var mongoose = require("./db.js");
// 映射
var Schema=mongoose.Schema;

var tagsSchema = Schema({
    tagname:String,
},{collection:"tags"})

// 模型
var tags=mongoose.model("tags",tagsSchema);
module.exports=tags;