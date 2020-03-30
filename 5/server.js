const http = require('http');
const querystring = require('querystring');

http.createServer((req,res)=>{
    // console.log(req)
    var str = '';
    var i = 0;
    req.on('data',(data)=>{
        i++;
        str += data;
        console.log('第' + i + '次接受数据');
    })

    req.on('end',()=>{
        console.log(querystring.parse(str));
    })
}).listen(9000);