var zhipin = require('./zhipin')
 module.exports =  function (app){
    app.use(function(req,res,next){
        // 服务端设置 跨越问题
        res.header({ 
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-Requested-With',
            'Access-Control-Allow-Methods': 'POST,GET'//,OPTIONS,PUT,DETELE
        })
        next();
    })

    app.use('/zhipin',zhipin)

    app.get('*',(req,res)=>{
        res.send('404,page is no found')
    })

    app.post('*',(req,res)=>{
        res.send('404,page is no found')
    })
}