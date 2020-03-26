const http = require('http');

http.createServer((req,response)=>{
    var Get = {};
    var reqUrl = req.url;
    if(req.url.indexOf('?')!=-1){
        var arr = reqUrl.split('?')
        Get.path = arr[0];
        arr2 = arr[1].split('&');
        for(var i=0;i<arr2.length;i++){
            var arr3 = arr2[i].split('=');
            Get[arr3[0]] = arr3[1];
        }
    }else{
        Get.path = req.url;
    }

    console.log(Get);

    response.write('aaa');
    response.end();
}).listen(9000);