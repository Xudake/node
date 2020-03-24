const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    var urlPath = './www' + req.url;
    console.log(req.url);
    fs.readFile(urlPath,(err,data)=>{
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    })

}).listen("9000");