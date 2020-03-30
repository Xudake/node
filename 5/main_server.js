const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

http.createServer((req,res)=>{
    // get
    var urlData = urlLib.parse(req.url, true);
    var url = urlData.pathname;
    var GET = urlData.query;

    // post
    var str = '';
    req.on('data',(data)=>{
        str += data;
    })

    req.on('end', ()=>{
        var POST = querystring.parse(str);
        console.log(url, GET, POST);
    })

    // 文件操作
    var file_name = 'www/' + url;
    fs.readFile(file_name,(err,data)=>{
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    })

}).listen(9000)