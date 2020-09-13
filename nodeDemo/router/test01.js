var express = require('express')
var router = express.Router()
var url = require('url')
router.get('/',(req,res)=>{
    res.send('welcome to test01')
})

router.get('/getList01',(req,res)=>{
    var str = url.parse(req.url , true).query //将get参数转化为键值对形式
    // var str = req.body //接受post请求参数

    console.log('参数：',str, '页码：',str.page);
    res.json(
        {
            "code": 0,
            "msg": "查询成功",
            "count": 1000,
            "data": [
                {id:1,sex:'男',username:'张三'},
                {id:1,sex:'男',username:'张三'},
                {id:1,sex:'男',username:'张三'},
                {id:1,sex:'男',username:'张三'},
                {id:1,sex:'男',username:'张三'},
            ]
        })
})



module.exports = router