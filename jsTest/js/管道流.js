const fs = require('fs')


var readStream = fs.createReadStream('./jsTest/bz1.jpg');//创建读取流

var writeStream = fs.createWriteStream('./jsTest/bz01.zip');//创建写入流

readStream.pipe(writeStream);
