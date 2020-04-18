var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')
var http = require('http')
// var socketIO = require('socket-io')


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
require('./router')(app)

 
var server = http.createServer(app)
require('./socket-io/server')(server)

server.listen(process.env.PORT || 5000,()=>{
    console.log('zhipin is runging on port 5000')
})

// app.listen(5000,()=>{
//     console.log('zhipin is runging on port 5000')
// })
