const http = require('http');
const querystring = require('querystring');

http.createServer((req,res)=>{
    var url = req.url;
    console.log(url);
    var arr = url.split('?');
    var path = arr[0];
    var params = querystring.parse(arr[1])

    console.log(path,params);
    res.write(JSON.stringify(params));
    res.end();
}).listen(9000);