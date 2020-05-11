const http = require('http');// node内置模块
// web  编程的基石http 协议
http.createServer((req, res) => {
    if (req.url === '/') {
        //设置响应头
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' })
        res.end('你好');
    } else if (req.url === '/about') {
        res.end('About');
    }
})
    .listen(1314)
