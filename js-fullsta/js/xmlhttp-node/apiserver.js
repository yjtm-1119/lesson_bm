const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
    //htttps://www.baidu.com
    //console.log(req,req.url);
    if (req.url === '/') {
        //首页返回一段html
        const html = fs.readFileSync('./index.html', 'utf-8');
        res.end(html);
        // readFile 异步方式读文件
        // readFileSync  同步方式读文件
    } else if (req.url === '/getPosts') {
        //没有返回 浏览器认为正在做什么复杂处理 耗时处理 所以处于pending状态 然后报 超时错误
        let posts = [
            { title: 'js', star: 1000 },
            { title: 'php', star: 2000 }
        ]
        res.end(JSON.stringify(posts));//end方法只能返回字符串
    }
    // res.end('hello server');
})
server.listen(8080, function () {
    console.log('server is running 8080');

})