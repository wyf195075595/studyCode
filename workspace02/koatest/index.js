const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')()
const static = require('koa-static')
const path = require('path')
const login = require('./router/login')
const register = require('./router/register')
router.use('/login',login)
router.use('/register',register)

// 设置静态资源文件
app.use(static(path.join(__dirname,'public')))

router.get('/',async ctx =>{
    ctx.body = '主界面'
})

// 路由中间件
app.use(async (ctx,next) => {
  console.log('页面跳转了');
  if(ctx.status == 404){
      ctx.body = '404，页面不存在'
  }
  next()
});


// 加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000);