// const http = require('http');

// var server = http.createServer((req,res)=>{
//     console.log('aaa');

//     res.write('abc');
//     res.end();
// })

// server.listen('9000');

const http = require('http');

var server = http.createServer((request,response)=>{
    console.log('有人来了');
    response.write('123123');
    response.end();
})

server.listen('9000');