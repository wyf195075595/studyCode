const router = require('koa-router')()

    router.get('/',async ctx =>{
        ctx.body = '登录'
    })
    router.get('/:name/:pwd',async ctx =>{
        console.log(ctx.params)
        ctx.body = `用户${ctx.params.name}登录成功`
    })
module.exports = router.routes()