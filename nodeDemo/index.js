var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')
var router = require('./router')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

router(app)

app.listen(4000,()=>{
    console.log('demo is running on port 4000.')
})