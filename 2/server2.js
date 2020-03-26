const http = require('http');

var server = http.createServer((req,res)=>{
    console.log(req.url);

    switch(req.url){
        case '/1.html':
            res.write('1.html');
            break;
        case '/2.html':
            res.write('2.html');
            break;
        default:
            res.write('404');
    }
    res.end();
})

server.listen("9000");