const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
    // 前端提交的数据一定可以通过req取到
    // 要响应到后端的数据一定可以通过res设置
    //htttps://www.baidu.com
    //console.log(req,req.url);
    if (req.url === '/') {
        //首页返回一段html
        const html = fs.readFileSync('./index.html', 'utf-8');
        res.end(html);
        // readFile 异步方式读文件
        // readFileSync  同步方式读文件
        // res.writeHead(200, {
        //     'Content-Type':'text/html'
        // })
        // res.end(`<h2>asdsad</h2>`);
        //Content-Type 表示后端返回的内容的类型
    } else if (req.url === '/getPosts') {
        //没有返回 浏览器认为正在做什么复杂处理 耗时处理 所以处于pending状态 然后报 超时错误
        //GET请求 把要提交的参数放到url里面 
        //POST请求 把参数放到实体
        let posts = [
            { title: 'js', star: 1000 },
            { title: 'php', star: 2000 }
        ]
        let str = '';
        req.on('data', function (chunk) {
            str += chunk;
        })//数据拼接组装完成 
        req.on('end', function () {
        console.log(JSON.parse(str));
        });
        res.end(JSON.stringify(posts));//end方法只能返回字符串
        //把前端提交的数据进行解析
    }
    // res.end('hello server');
})
server.listen(8080, function () {
    console.log('server is running 8080');

})