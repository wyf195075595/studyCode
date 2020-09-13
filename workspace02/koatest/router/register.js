const router = require('koa-router')()

    router.get('/',async ctx =>{
        ctx.body = '注册'
    })

module.exports = router.routes()