const fs = require('fs')

var readStream = fs.createReadStream('./jsTest/002.txt');//创建读取流

var count = 0;
var str = '';

readStream.on('data',data=>{ //监听读取
    str += data;
    count++
})


readStream.on('end',data=>{ //监听读取结束
    console.log(str);
    console.log(count);
})


readStream.on('error',data=>{ //监听读取错误
    console.log('错误',data);
})