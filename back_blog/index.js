var express = require('express');
var app = express();
var path = require('path')
var bodyParse = require("body-parser")

var router = require('./router')

app.use(bodyParse.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

router(app)

app.listen(4000,()=>{
    console.log('Blog is running on port 4000.')
})