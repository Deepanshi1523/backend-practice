// const { error } = require('console');
// const fs = require('fs');

// fs.readFile("./bye.txt",'utf8',function(err,data){
//     if(err) console.error(error.message);
//     else console.log(data);
// })

// const http = require('http');

// const server= http.createServer(function(req,res){
//     res.end("hello world");
// })

// server.listen(3000);

const express = require('express')
const app = express()

app.use(function(req, rs, next){
    console.log("middleware chala");
    next();
})

app.use(function(req, res, next){
    console.log("middleware fir chala");
    next();
})

app.get('/', function (req, res) {
  res.send('Hey World')
})

app.listen(3000)