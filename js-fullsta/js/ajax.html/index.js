const http = require('http');
const fs = require('fs');
//1.前端ajax  传输数据给后端  后端接受前端数据
//2.响应数据给前端
//把ajax内容返回给前端 
const server = http.createServer(function (req, res) {
    console.log('当前正在请求',req.url);
    
    res.writeHead(200, {
        'Content-Type':'text/html;charset=utf-8'
    })
    const file = fs.readFileSync('./ajax.html',{encoding:'utf-8'})
    res.end(file);
})
server.listen(8081, function () {
    console.log('server is running http:127.0.0.1:8081');
})