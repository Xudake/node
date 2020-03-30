const querystring = require('querystring');
const http = require('http');
const url1 = require('url');

http.createServer((req,res)=>{
    console.log(url1.parse(req.url,true));
    var query = url1.parse(req.url,true).query;
    res.write(JSON.stringify(query));
    res.end();
}).listen(9000);