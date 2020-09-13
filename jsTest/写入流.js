const fs = require('fs')

var writeStream = fs.createWriteStream('./jsTest/002.txt');//创建写入流

var str = '';

for(var i = 0; i < 500; i++){
    str += '我是写入的一行数据\n'
}

writeStream.write(str)

writeStream.end()//标记写入完成

writeStream.on('finish',()=>{ //监听写入完成
    console.log('写入完成');
})