var blog = require('./blog.js')

module.exports = function(app){

    app.use(function(req,res,next){
      // 服务端设置 跨越问题
      res.header({ 
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'X-Requested-With',
          'Access-Control-Allow-Methods': 'POST'//,GET,OPTIONS,PUT,DETELE
      })
      next();
    })

    app.use("/blog",blog)

    app.post("*",(req,res)=>{
        res.send('404,页面未找到')
    })
    app.get("*",(req,res)=>{
        res.send('404,页面未找到')
    })
    
}